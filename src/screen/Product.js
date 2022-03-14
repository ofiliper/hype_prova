import React, { useEffect, useState } from 'react';
import { Link, useLocation, matchPath, Route } from 'react-router-dom';


import Footer from '../component/footer/Footer';
import SingleProduct from '../component/SingleProduct';
import Header from '../component/header/Header';
import ProductBundle from '../component/productBundle';
import Modal from '../component/Modal';
import Order from '../api/Order';


const Product = () => {

  const location = useLocation();

  const products = JSON.parse(localStorage.getItem("products"));

  const [route, setRoute] = useState(location.pathname.split('/')[2]);
  const [product, setProduct] = useState('');

  const [productQnt, setProductQnt] = useState(0);
  const [modal, showModal] = useState(false);

  const order = new Order();
  const [cartQnt, setCartQnt] = useState(order.getOrder().length);

  useEffect(() => {
    products.forEach((index) => {
      if (index.id == route) {
        setProduct(index)
      }

    })
  }, [route])

  const changeRoute = () => {
    setRoute(location.pathname.split('/')[2])
  }

  const updateCart = qnt => {
    setCartQnt(qnt.length)
  }

  const activeModal = () => {
    showModal(!modal)
  }

  return (
    <div className="App">
      <Header cart={cartQnt}/>
      <SingleProduct modal={activeModal} updateCart={updateCart} product={product} />
      <Modal modal={modal} changeModal={activeModal} product={product.name} />
      <Footer />
    </div>
  );
}

export default Product;