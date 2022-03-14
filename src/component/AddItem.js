const AddItem = (props) => {
    return (
        <div className="addItem">
            <span onClick={props.minus}> - </span>
            <input type="number" value={props.qnt}  />
            <span onClick={props.plus}> +</span>
        </div>
    )
}

export default AddItem;