import React from "react";
import {ShippingAddress} from "../models/shippingAddress";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function getShippingAddress(userId: number) : Promise<ShippingAddress> {
  return fetch(baseUrl + "shippingAddress/" + userId).then((response) => {
    if (response.ok) return response.json();
    throw response;
  });
}

export async function saveShippingAddress(address: string) : Promise<Response>{
  return fetch(baseUrl + "shippingAddress", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(address),
  });
}
