import {Route, Routes} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Cart from "./pages/CartPage";
import React from "react";

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<h1> Welcome to Carved Rock Fitness </h1>} />
            <Route path="/:category" element={<ProductsPage />} />
            <Route path="/:category/:productId" element={<ProductDetailPage />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}