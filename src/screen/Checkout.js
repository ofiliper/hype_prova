import { useState } from 'react';
import Footer from '../component/footer/Footer';
import Header from '../component/header/Header';
import Empty from '../component/empty/notFound';
import Order from '../api/Order';
import Title from '../component/title';
import CheckoutForm from '../component/checkout/CheckoutForm';
import CheckoutOrder from '../component/checkout/CheckoutOrder';


function Checkout() {

  const order = new Order();
  const [cartQnt, setCartQnt] = useState(order.getOrder().length);
  const [delivery, setDelivery] = useState(false)


  const deliveryMethod = (res) => {
    setDelivery(res);
  }

  const Info = () => {
    return (
      <div className='checkout_section'>
        <div className="container">
          <CheckoutForm method={delivery} delivery={deliveryMethod} />
          <CheckoutOrder method={delivery} />
        </div>
        <div className='container'>
          <button className='btn_checkout'>
            Confirmar pedido
          </button>
        </div>
      </div>
    )
  }

  const updateCart = qnt => {
    setCartQnt(qnt.length)
  }

  return (
    <div className="checkout_page">
      <Header cart={cartQnt} />
      <Title title="Checkout" lastPath="Carrinho" path="/ Checkout" />
      {cartQnt ? <Info /> : <Empty />}
      <Footer />
    </div>
  );
}

export default Checkout;
