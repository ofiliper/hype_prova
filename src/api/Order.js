
export default class Order {

    getOrder() {
        let order = JSON.parse(localStorage.getItem("order"));
        if (order != null && order.length > 0) {
            return order;
        } else {
            return this.setOrder;
        }
    }
    setOrder() {
        localStorage.setItem("order", JSON.stringify([]));
        return JSON.parse(localStorage.getItem("order"));
    }
    setQuantity(id, action) {

        let current = this.getOrder();
        let cartUpdate = [];
        let calc = action ? +1 : -1;

        current.map((value, index) => {
            if (value.id == id) {
                // console.log("Atual " + value.quantity)
                value.quantity = value.quantity + (calc);
                // console.log("Matematica " +  calc)
                // console.log("Alterado " + value.quantity)
                cartUpdate.push(value)
            } else {
                cartUpdate.push(value)
            }
        });
        // console.log(cartUpdate);
        localStorage.setItem("order", JSON.stringify(cartUpdate));

    }
    removeItemFromOrder(item) {

        let current = this.getOrder();
        let cartUpdate = [];

        current.map((value, index) => {
            if (value.id != item) {
                cartUpdate.push(value)
            }
        });

        localStorage.setItem("order", JSON.stringify(cartUpdate));

    }
    setNewOrder(item, qnt = '') {

        let current = this.getOrder();
        let cartUpdate = [];

        if (current.length > 0) {

            let hasSameItem = false;

            current.map((value, index) => {

                let itemUpdate = value;

                if (value.id == item.id) {
                    let itemQnt = itemUpdate.quantity ? itemUpdate.quantity : 0
                    itemUpdate.quantity = itemQnt + qnt;
                    hasSameItem = true;
                } else {
                    itemUpdate = value;
                }
                cartUpdate.push(itemUpdate)
            });
            if (!hasSameItem) {
                item.quantity = qnt;
                cartUpdate.push(item);
            }

        } else {
            item.quantity = qnt;
            cartUpdate.push(item);
        }

        localStorage.setItem("order", JSON.stringify(cartUpdate));

    }
}