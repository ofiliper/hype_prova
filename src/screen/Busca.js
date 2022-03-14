import { useState, useEffect } from 'react';
import ProductBundle from '../component/productBundle';
import { Link, useSearchParams } from 'react-router-dom';

import Footer from '../component/footer/Footer';
import Header from '../component/header/Header';

import Empty from '../component/empty/notFound';


import Order from '../api/Order';
import getProducts from '../api/Names';

function App() {


    const order = new Order();

    const [cartQnt, setCartQnt] = useState(order.getOrder().length);
    const [inputVal, setInputVal] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.getAll('p'))
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")));
    const [filtered, setFiltered] = useState(false);
    const [productFiltered, setProductFiltered] = useState('');

    useEffect(()=>{
        
    })
    const filterProduct = e => {

        let PATTERN = search[0]
        setInputVal(PATTERN)

        var filteredData = products.filter(function (obj) {
            let current = obj['name'].substr(0, PATTERN.length)
            let inputEl = PATTERN.substr(0, PATTERN.length);
            return current.toLowerCase() === inputEl.toLowerCase();
        });

        if (filteredData.length > 0) {
            setProductFiltered(filteredData);
            setFiltered(true)
        } else {
            setFiltered(false)
        }


    }

    return (
        <div className="App">
            <Header val={inputVal} formAction={filterProduct} cart={cartQnt} />
            {
                filtered ? <ProductBundle val={inputVal} products={productFiltered} /> : <Empty />
            }
            <Footer />
        </div>
    )
}

export default App;
