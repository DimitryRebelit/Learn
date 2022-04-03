import React, {useState} from "react";
import useFetch from "../hooks/userFetch";
import {Product} from "../models/product";
import Spinner from "../Spinner";
import {Link, useParams} from "react-router-dom"
import PageNotFound from "./PageNotFound";

export default function ProductsPage() {
    const [size, setSize] = useState("");
    const { category } = useParams();
    const {data: products, loading, error} = useFetch<Array<Product>>(`products?category=${category}`);
    const filteredProducts = size ? products.filter((x: Product) => x.skus.find(s => s.size === parseInt(size))) : products

    if (error) throw error;
    if (loading) return <Spinner />
    if (products.length === 0) return <PageNotFound />

    return (
        <>
            <section id="filters">
                <label htmlFor="size">Filter by Size:</label>{" "}
                <select id="size" value={size} onChange={(e) => {
                    setSize(e.target.value);
                }}>
                    <option value="">All sizes</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
                {size && <h2>Found {filteredProducts.length} items</h2>}
            </section>
            <section id="products">
                {filteredProducts.map((p: Product) => {
                    return (
                        <div key={p.id} className="product">
                            <Link to={`/${category}/${p.id}`}>
                                <img src={`/images/${p.image}`} alt={p.name}/>
                                <h3>{p.name}</h3>
                                <p>${p.price}</p>
                            </Link>
                        </div>
                    );
                })}
            </section>
        </>
    );
}
