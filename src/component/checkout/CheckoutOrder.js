import { useState, useEffect } from "react";
import TicketOrder from "./Order";
import Order from "../../api/Order";
import orderImg from "../../assets/img/note.svg";

const ListOrder = (props) => {

    const OrderList = props.order.map((value, index) => {

        return <TicketOrder
            name={value.name}
            price={value.price}
            qnt={value.quantity}
            key={index}
        />

    })

    return OrderList;

}


const CheckoutOrder = props => {

    const order = new Order();
    const [orderList, setOrder] = useState(order.getOrder());
    const [subtotalPrice, setSubtotal] = useState(0);
    const [totalPrice, setTotal] = useState(0);
    const [valueTotal, updateWithDelivery] = useState('');
    const [img, setImg] = useState(orderImg);

    const Delivery = () => {
        return (
            <span>
                <strong>Entrega: </strong>
                {subtotalPrice > 299 ? 'GRÁTIS' : 'R$ 20.00'}
            </span>
        )
    }

    useEffect(() => {

        let total_price = 0;
        orderList.map((el, index) => {
            total_price += ((el.price) * el.quantity)
        })
        setSubtotal(Number(total_price).toFixed(2));
        let PriceDelivery = (parseFloat(20.00) + parseFloat(subtotalPrice))
        updateWithDelivery(Number(PriceDelivery).toFixed(2))
    })

    return (
        <div className="checkout_order">
            <div className="checkout_ticket">
                <div className="checkout_paper">
                    <h4>Seu pedido</h4>
                    <ListOrder order={orderList} />
                    <div className="subtotal">
                        <span>
                            <strong>Subtotal: </strong>
                            R$ {subtotalPrice}
                        </span>
                        {props.method ? <Delivery /> : ''}
                    </div>
                    <div className="total">
                        <span>
                            <strong>Total: </strong>
                            {setSubtotal}
                        </span>
                        <span>
                            R$ {props.method ? subtotalPrice > 299 ? subtotalPrice : valueTotal : subtotalPrice}
                        </span>
                    </div>
                </div>
                <div className="order_scratch" style={{
                    backgroundImage: `url(${img})`
                }}>
                </div>

            </div>
        </div>
    )
}

export default CheckoutOrder;