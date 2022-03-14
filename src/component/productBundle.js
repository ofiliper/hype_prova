import Product from '../component/product';
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import getProducts from "../api/Names";

import Loading from './Loading';

import Empty from './empty/notFound';
import Fav from '../api/Favorites';


let fav = new Fav();

const RenderProducts = (props) => {

    const removeFav = (val) => {
        // setFavList(val)
        // props.isVisible(val)
    }

    const favList = fav.getFav() != null ? JSON.parse(fav.getFav()) : fav.setFav();
    const productsList = props.products.map((value, index) => {

        // if (index < 8) {
        return <Product
            name={value.name}
            img={value.img}
            description={'bebas'}
            price={Number(value.price).toFixed(2)}
            id={value.id}
            key={index}
            fav={favList.includes(value.id) ? true : false}
            remove={removeFav}
        />
        // }
    })


    return productsList;


};


function ProductBundle(props) {

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")));
    const [filtered, setFiltered] = useState(props.filter)

    const FindResult = props => {
        return (
            <div className="title">
                Você buscou por: <strong>{props.val}</strong>
            </div>
        )
    }
    useEffect(() => {
        setFiltered(props.filter)
    })

    return (
        <div>
            {filtered ? <FindResult find={props.title} val={props.val} /> : ''}
            <div className="productContainer">
                {
                    !products ? <Loading /> : <><h2>Produtos</h2><div className='product'><RenderProducts products={props.products} /></div></>
                }
            </div>
        </div>
    );
}

export default ProductBundle;