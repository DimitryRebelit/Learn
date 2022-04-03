import React from "react";
import {useParams,useNavigate} from "react-router-dom";
import useFetch from "../hooks/userFetch";
import {Product} from "../models/product";
import Spinner from "../Spinner";
import PageNotFound from "./PageNotFound";

export default function ProductDetailPage() {
    const {productId} = useParams();
    const navigate = useNavigate();
    const {data: product, error, loading} = useFetch<Product>(`products/${productId}`)

    if (loading) return <Spinner />
    if (!product.name) return <PageNotFound />
    if (error) throw error;

    return (
      <div id="detail">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p id="price">${product?.price}</p>
        <p>
          <button className="btn btn-primary" onClick={() => navigate("/cart")}> Add to cart</button>
        </p>
        <img src={`/images/${product?.image}`} alt={product?.category} />
      </div>
    );
}
