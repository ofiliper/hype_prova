const Order = props => {
    return (
        <div>
            <div>
                <strong>{props.qnt}x </strong>
                {props.name}
            </div>
            <div>
                <strong>Valor: </strong>
                R$ {Number(props.price * props.qnt).toFixed(2)}
            </div>
        </div>
    )
}
export default Order;