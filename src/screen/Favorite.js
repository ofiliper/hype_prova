import { useState } from 'react';
import FavoriteBundle from '../component/favoriteBundle';
import { Link, useSearchParams } from 'react-router-dom';

import Footer from '../component/footer/Footer';
import Header from '../component/header/Header';

import Title from '../component/title';

import EmptyFav from '../component/empty/emptyFav';

import Order from '../api/Order';

function App() {

  const [filter, setFilter] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [flag, setFlag] = useState(true);

  const order = new Order();
  const [cartQnt, setCartQnt] = useState(order.getOrder().length);

  const filterProduct = (e) => {
    setInputVal(e.target.value)
    if (e.target.value.length >= 4) {
      setFlag(false)
    } else {
      setFlag(true)
    }
  }

  return (
    <div className="App">
      <Header val={inputVal} formAction={filterProduct} cart={cartQnt} />
      <Title title="Meus favoritos" path="Favoritos" />
      {
        flag ? <FavoriteBundle /> : <EmptyFav />
      }
      <Footer />
    </div>
  );
}

export default App;
