
import empty from '../../assets/img/empty-bag.png';
import { Link } from "react-router-dom";

const EmptyBag = () => {
    return (
        <div className="message">
            <img src={empty} />
            <h2>Ops, não há produtos em seu carrinho...</h2>
            <p>
                Parece que não há nenhum produto em seu carrinho.
            </p>
            <p>
                Tente voltar para a loja e acrescentra algum produto em sua sacola.
            </p>
            <Link to="/">Voltar para a loja</Link>
        </div>
    )
}

export default EmptyBag;