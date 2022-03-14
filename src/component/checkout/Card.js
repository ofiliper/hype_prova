import { useState } from "react";
const Card = () => {

    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardCode, setCardCode] = useState('')
    const [expireDate, setExpireDate] = useState('')


    return (
        <div className="address">
            <div>
                <label>Nome no cartão</label>
                <input type="text" onChange={(e) => { setCardName(e.target.value) }} value={cardName} />
            </div>
            <div>
                <label>Número do cartão</label>
                <input type="text" onChange={(e) => { setCardNumber(e.target.value) }} value={cardNumber} />
            </div>
            <div className="col-2">
                <div>
                    <label>Código do cartão: </label>
                    <input type="text" onChange={(e) => { setCardCode(e.target.value) }} value={cardCode} />
                </div>
                <div>
                    <label>Data de vencimento: </label>
                    <input type="text" onChange={(e) => { setExpireDate(e.target.value) }} value={expireDate} />
                </div>
            </div>
        </div>

    )
}
export default Card;