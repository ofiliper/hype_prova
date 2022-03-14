import Order from '../api/Order';
import CartProductLine from './CartProductLine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductList = (props) => {


    const orderObj = new Order();
    const [order, updateCurrentOrder] = useState(props.order)

    useEffect(()=>{
        updateCurrentOrder(props.order)
    })
    
    const productsCart = order.map((value, index) => {

        //Remove single item
        const removeItem = id => {
            props.removeProduct(id);
            updateCurrentOrder(orderObj.getOrder());
        }
        const updateOrder = () => {
            props.updateOrder();
            updateCurrentOrder(orderObj.getOrder());

        }


        return <CartProductLine
            name={value.name}
            img={value.img}
            qnt={value.quantity}
            price={Number(value.price).toFixed(2)}
            id={value.id}
            key={index}
            removeItem={removeItem}
            updateOrder={updateOrder}
        />

    })

    return productsCart;

};

const CartTable = props => {

    const order = new Order();

    const currentOrder = order.getOrder();
    const [orderList, setOrder] = useState(order.getOrder());
    // const [qnt, setQnt] = useState(currentOrder)
    const [total, setTotal] = useState('')

    const removeProduct = id => {

        order.removeItemFromOrder(id)

        setOrder(order.getOrder())
        // setQnt(order.getOrder().length)

        props.updateCart(order.getOrder())

    }

    const updateOrder = () => {
        setOrder(order.getOrder())
    }

    useEffect(() => {

        let total_price = 0;
        const total = orderList.map((value, index) => {
            total_price += ((value.price) * value.quantity)
        })
        setTotal(Number(total_price).toFixed(2));

    }, [order])

    return (
        <div className="container">
            <table>
                <thead>
                    <tr><th></th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Detalhes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <ProductList order={orderList} removeProduct={removeProduct} updateOrder={updateOrder} />
                </tbody>
            </table>
            <div className='total_cart'>
                <div className='total_cart-value'>
                    <span>Subtotal: </span>
                    <span>R$ {total}</span>
                </div>
                <div>

                    <Link to="/checkout">
                        <FontAwesomeIcon icon={faBagShopping} />
                        Fechar compra
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default CartTable;