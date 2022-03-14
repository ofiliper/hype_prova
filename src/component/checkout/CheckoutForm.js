import { faUser, faMoneyCheckDollar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Address from "./Address";
import Card from "./Card";



const CheckoutForm = props => {

    const [method, changeMethod] = useState(props.method)
    const [payMethod, changePayMethod] = useState('')

    const setDelivery = e => {

        changeMethod(e.target.value)

        if (e.target.value == 'delivery') {
            props.delivery(true)
        } else {
            props.delivery(false)
        }

    }

    const setPayMethod = e => {
        if(e.target.value == 'card'){
            changePayMethod(true)
        }else{
            changePayMethod(false)
        }
    }

    return (
        <div className="checkout_form">
            <div>
                <div>
                    <h3><FontAwesomeIcon icon={faUser} /> Dados do cliente </h3>
                </div>
                <div>
                    <div>
                        <label>Nome completo: </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Telefone / WhatsApp: </label>
                        <input type="text" />
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h3> <FontAwesomeIcon icon={faTruck} /> Informações de entrega </h3>
                </div>
                <div>
                    <div>
                        <label>Forma de entrega: </label>
                        <select value={method ? 'delivery' : 'takeaway'} onChange={setDelivery}>
                            <option value="takeaway">Retirar no balcão</option>
                            <option value="delivery">Fixo (+R$20)</option>
                        </select>
                    </div>
                    {method ? <Address /> : ''}
                </div>
            </div>

            <div>
                <div>
                    <h3><FontAwesomeIcon icon={faMoneyCheckDollar} /> Pagamento </h3>
                </div>
                <div>
                    <div>
                        <label>Forma de pagamento: </label>
                        <select onChange={setPayMethod}>
                            <option value="money">Dinheiro</option>
                            <option value="card">Cartão</option>
                            <option value="pix">Pix</option>
                        </select>
                    </div>
                    {payMethod ? <Card /> : ''}
                </div>
            </div>

        </div>
    )
}

export default CheckoutForm;