import AddItem from "./AddItem";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import Order from "../api/Order";

const CartProductLine = props => {

    const order = new Order();
    const [fade, setFade] = useState(false);
    const [qnt, setQnt] = useState(props.qnt);

    useEffect(() => {
        setQnt(props.qnt);
    })
    const removeItem = () => {

        setFade(true)
        setTimeout(() => {
            props.removeItem(props.id);
            setFade(false)
            // console.log(props.name)
        }, 1000)

    }
    // console.log(qnt)
    const plus = () => {
        setQnt(qnt + 1)
        order.setQuantity(props.id, true)
        props.updateOrder()
    }

    const minus = () => {
        if (qnt > 1) {
            setQnt(qnt - 1)
            order.setQuantity(props.id, false)
            props.updateOrder()
        }
    }


    return (
        <tr className={[`tableRow ${fade ? 'fadeOut' : ''}`]}>
            <th className="img">
                <div style={{
                    backgroundImage: `url(${props.img})`
                }}>
                </div>
            </th>
            <th>
                <Link to={`/produto/${props.id}`} >
                    {props.name}
                </Link>
            </th>
            <th className="qnt">
                <AddItem plus={plus} minus={minus} qnt={qnt} />
            </th>
            <th>{Number((props.price) * props.qnt).toFixed(2)}</th>
            {/* <th>Detalhes</th> */}
            <th className="delete">
                <button onClick={removeItem}>
                    <FontAwesomeIcon icon={faTrash} />
                    Excluir
                </button>
            </th>
        </tr>
    )
}

export default CartProductLine;