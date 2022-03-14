import { Link } from "react-router-dom";
import { faCheck, faBagShopping, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Modal = (props) => {

    return (
        <div id="modal"
            onClick={props.modalEvent}
            className={[`modal_box modalAlert ${props.modal ? 'modal' : ''}`]} >
            <div>
                <div className="close_modal">
                    <button onClick={props.changeModal}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className="description">
                    <div>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <h3>
                        {props.product}
                    </h3>
                    <p>
                        Adicionado a sacola com sucesso!
                    </p>
                </div>
                <div className="col-2">
                    <Link to="/" >
                        <FontAwesomeIcon icon={faBagShopping} />
                        Continuar comprando
                    </Link>
                    <Link to="/carrinho" >
                        <FontAwesomeIcon icon={faCheck} />
                        Ver sacola
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Modal;