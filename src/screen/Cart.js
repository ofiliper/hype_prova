import { useState } from 'react';

import Footer from '../component/footer/Footer';
import Header from '../component/header/Header';

import EmptyBag from '../component/empty/emptyBag';

import Order from '../api/Order';
import Title from '../component/title';
import CartTable from '../component/CartTable';

function Cart() {

  const order = new Order();
  const [cartQnt, setCartQnt] = useState(order.getOrder().length);

  const updateCart = qnt => {
    setCartQnt(qnt.length)
  }

  return (
    <div className="cart_page">
      <Header cart={cartQnt} />
      <Title title="Carrinho" path="Carrinho" />
      <div className='cart_section'>
        {cartQnt > 0 ? <CartTable updateCart={updateCart} /> : < EmptyBag />}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
