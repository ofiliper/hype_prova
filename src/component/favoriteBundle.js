import Product from '../component/product';
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import getProducts from "../api/Names";

import EmptyFav from './empty/emptyFav';

import Fav from '../api/Favorites';
let fav = new Fav();

const RenderProducts = (props) => {

    const [favList, setFavList] = useState( fav.getFav() != null ? JSON.parse(fav.getFav()) : fav.setFav())

    const [products, setProducts] = useState(props.products);

    const removeFav = (val) => {
        setFavList(val)
        props.isVisible(val)
    }

    const productsList = products.map((value, index) => {
        if (favList.includes(value.id)) {
            return <Product
                name={value.name}
                img={value.img}
                description={'bebas'}
                price={Number(value.price).toFixed(2)}
                id={value.id}
                key={index}
                fav={true}
                remove={removeFav}
            />
        }
    })

    return productsList;


};

function ProductBundle(props) {

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")));
    const [hasProducts, setHasProducts] = useState(fav.getFav() != null ? JSON.parse(fav.getFav()) : JSON.parse(fav.setFav()));

    useEffect(() => {

        const get = async () => {
            const p = await getProducts();
            setProducts(p);
            // setHasProducts(true)
        }
        if (products == null) {
            get();
        }

    }, [])

    const prod = (val) => {
        setHasProducts(val)
    }


    return (
        <div className="container productContainer">
      
                {
                    !hasProducts.length ? <EmptyFav /> : <div className='product'><RenderProducts isVisible={prod} products={products} /></div>
                }
            
        </div>
    );
}

export default ProductBundle;