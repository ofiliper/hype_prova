import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faHeart } from '@fortawesome/free-solid-svg-icons'

import loadimg from '../assets/img/loadimg.png';

function Product(props) {

    const [img, setImg] = useState(loadimg);
    const [active, setActive] = useState(props.fav);


    useEffect(() => {
        setImg(props.img)
    });

    const favToggle = () => {

        setActive(!active);

        let favorites = JSON.parse(localStorage.getItem("favorites"));

        if (favorites == null) {

            localStorage.setItem("favorites", JSON.stringify([props.id]))

        } else {

            if (!active) {
                favorites.push(props.id);
            } else {
                favorites.forEach((el, i) => {
                    if (el == props.id) {
                        favorites.splice(i, 1);
                        props.remove(favorites);
                    }
                });
            }
            localStorage.setItem("favorites", JSON.stringify(favorites))

        }

    }

    return (

        <div className="product_box">
            <div className="product_box-thumb" style={{
                // backgroundImage: `url(${count})`,
                backgroundImage: `linear-gradient(180deg, rgb(255 255 255 / 0%) , rgba(255, 255, 255, 0), rgb(0 0 0 / 75%)), url(${img})`
            }}>
                <span className={`fav_btn ${active ? 'active' : ''}`} onClick={favToggle}>
                    <FontAwesomeIcon icon={faHeart} />
                    <span></span>
                </span>
                <h2>{props.name}</h2>
            </div>

            <div className="product_box-content">
                <div>
                    <span>Por apenas</span>
                    <span>R$ {props.price}</span>
                </div>

                <Link to={`/produto/${props.id}`} className="product_box-btn">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    Ver produto
                </Link>
            </div>
        </div>

    );
}

export default Product;
