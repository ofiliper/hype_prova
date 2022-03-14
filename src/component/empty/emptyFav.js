import { Link } from "react-router-dom";
import empty from '../../assets/img/empty-bag.png';

const Empty = () => {
    return (
        <div className="message">
            <img src={empty} />
            <h2>Ops, não há produtos favoritados...</h2>
            <p>
                Desculpe, não encontramos nenhum produto com os termos inserido.<br/>
                Para adicionar o produto em seus favoritos basta clicar no coração.
            </p>
            <Link to="/">Voltar para a loja</Link>
        </div>
    )
}

export default Empty;