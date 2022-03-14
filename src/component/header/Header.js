import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faHeart, faSearch, faTruck } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

import logo from '../../assets/img/logo.png'

const Header = (props) => {

    const [isHover, setHover] = useState(false);
    const [cartQnt, setCartQnt] = useState(props.cart)

    const blur = () => {
        setHover(false);
    }
    const hover = () => {
        setHover(true);
    }
    useEffect(() => {
        setCartQnt(props.cart)
    })

    return (
        <header>
            <div className='topHeader'>
                <FontAwesomeIcon icon={faTruck} /> Frete grátis para compras a partir de R$299
            </div>
            <div className='container'>
                <div className='logo'>
                    <div className={`is_mobile favorites`}>
                        <Link to="/favoritos">
                            <FontAwesomeIcon icon={faHeart} />
                        </Link>
                    </div>
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                    <div className={`is_mobile cart`}>
                        <Link to="/carrinho">
                            {cartQnt ? <span>{cartQnt}</span> : ''}
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </Link>
                    </div>
                </div>
                <div className='form'>
                    <form className={isHover ? 'active' : ''} action="/buscar">
                        <input type="text" onFocus={hover} onBlur={blur} name="p" value={props.val} onChange={props.formAction} />
                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <Link to="/">
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link to="/favoritos">
                                <FontAwesomeIcon icon={faHeart} /> Favoritos
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='cart'>
                    <Link to="/carrinho">
                        {cartQnt ? <span>{cartQnt}</span> : ''}
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </Link>
                </div>
            </div>
        </header >
    )

};

export default Header;