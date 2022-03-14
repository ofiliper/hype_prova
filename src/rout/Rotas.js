import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../screen/Home";
import Product from "../screen/Product";
import Favorite from "../screen/Favorite";
import Cart from "../screen/Cart";
import Checkout from "../screen/Checkout";
import Busca from "../screen/Busca";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Home />} path="/produto/" />
                <Route element={<Favorite />} path="/favoritos" />
                <Route element={<Home />} path="/buscar" />
                <Route element={<Product />} path="/produto/:id" />
                <Route element={<Cart />} path="/carrinho" />
                <Route element={<Checkout />} path="/checkout" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;