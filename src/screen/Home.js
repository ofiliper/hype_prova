import { useState, useEffect } from 'react';
import ProductBundle from '../component/productBundle';
import { Link, useSearchParams } from 'react-router-dom';

import Footer from '../component/footer/Footer';
import Header from '../component/header/Header';

import Empty from '../component/empty/notFound';

import Order from '../api/Order';
import getProducts from '../api/Names';

function App() {


  const [filter, setFilter] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [flag, setFlag] = useState(true);

  const order = new Order();
  const [cartQnt, setCartQnt] = useState(order.getOrder().length);
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")));

  const [filtered, setFiltered] = useState('');
  const [hasFilter, setHasFilter] = useState(false);


  useEffect(() => {

    async function get() {
      const p = await getProducts();
      setProducts(p);
      window.location.reload(true);
    }
    if (products == null) {
      get();
    }

  }, [products])

  const filterProduct = (e) => {
    setInputVal(e.target.value)

    let PATTERN = e.target.value

    var filteredData = products.filter(function (obj) {
      let current = obj['name'].substr(0, e.target.value.length)
      let inputEl = PATTERN.substr(0, e.target.value.length);
      return current.toLowerCase() === inputEl.toLowerCase();
    });

    if (e.target.value.length > 0 && filteredData.length > 0) {
      setFiltered(filteredData)
      setHasFilter(true)
      setFlag(true)

    } else if (e.target.value.length > 0 && filteredData.length == 0) {
      setFlag(false)

    } else if (e.target.value.length == 0) {
      setHasFilter(false)
      setFlag(true)
    }

  }

  return (
    <div className="App">
      <Header val={inputVal} formAction={filterProduct} cart={cartQnt} />
      {
        flag ? <ProductBundle val={inputVal} filter={hasFilter} products={hasFilter ? filtered : products} /> : <Empty />
      }
      <Footer />
    </div>
  );
}

export default App;
