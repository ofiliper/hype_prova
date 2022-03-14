import { Link } from "react-router-dom";
import { faHouse, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = props => {
    return (
        <div className="title container">
            <h2>{props.title}</h2>
            <span className="breadcrumbs">
                <Link to="/">
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
                <span> / {props.lastPath ? <Link to="/Carrinho">{props.lastPath}</Link> : ''} {props.path}</span>
            </span>
        </div>
    )
}
export default Title;