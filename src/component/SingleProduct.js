import { Link } from "react-router-dom";
import { faHouse, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import Order from '../api/Order';
import Title from "./title";

const SingleProduct = (props) => {

    const [qnt, setQnt] = useState(1);
    const productValue = props.product.price;
    const [total, setTotal] = useState('');

    const plus = () => {

        setQnt(qnt + 1)
        setTotal(Number(props.product.price * (qnt + 1)).toFixed(2))

    }
    const minus = () => {
        if (qnt) {
            setQnt(qnt - 1)
            setTotal(Number(props.product.price * (qnt - 1)).toFixed(2))
        }
    }


    const addProduct = () => {

        let order = new Order();
        order.setNewOrder(props.product, qnt)
        props.modal();
        props.updateCart(order.getOrder());
    }

    return (
        <div className="single">
            <Title title={props.product.name} path={props.product.name} />
            <div className="container product">
                <div className="img">
                    <div
                        style={{ backgroundImage: `url(${props.product.img})` }}
                    >

                    </div>
                </div>
                <div className="description">

                    <div className="col-2">
                        <div>
                            <div>REF:</div>
                            <div>Produto:</div>
                        </div>
                        <div>
                            <div className="sku">{`#SKU-${props.product.id}`}</div>
                            <div>{props.product.name}</div>
                            <div className="price">
                                <span>Apenas:</span>
                                <span>R$ {Number(props.product.price).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>



                    <div className="col-2">

                        <div>
                            Descrição:
                        </div>
                        <div>
                            <p>
                                {props.product.description}
                            </p>
                        </div>

                    </div>

                    <div className="col-2 qnt">

                        <div>
                            Quantidade:
                        </div>
                        <div>
                            <AddItem plus={plus} minus={minus} qnt={qnt} />
                        </div>

                    </div>

                    <div className="col-2-price">

                        <div>
                            <span>Total: </span>
                            <span>R$ {!total ? Number(props.product.price).toFixed(2) : total}</span>
                        </div>
                        <div>
                            <button disabled={!qnt ? true : false} onClick={addProduct}>
                                <FontAwesomeIcon icon={faBagShopping} />
                                Adicionar a sacola
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleProduct;