import empty from '../../assets/img/empty-bag.png';

const Empty = () => {
    return (
        <div className="message">
            <img src={empty}/>
            <h2>Ops...</h2>
            <p>
                Desculpe, não encontramos nenhum produto.
            </p>
            <p>
                Por favor, tente fazer uma nova busca.
            </p>
        </div>
    )
}

export default Empty;