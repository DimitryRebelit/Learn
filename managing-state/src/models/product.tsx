import {Sku} from "./sku";

export interface Product{
    id: number,
    category: string,
    image: string,
    name: string,
    price: number,
    skus : Sku[],
    description: string
}