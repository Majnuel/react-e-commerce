import React, { useState, useEffect } from "react";
import "./spinner.css";
import ItemCard from "./item-card/itemCard";
import { DB } from "../tools/firebaseFactory";

export default function MainScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    DB.collection("e-commerce")
      .orderBy("name", "asc")
      .get()
      .then((result) => {
        if (result.size === 0) {
          console.log("sin resultados");
        }
        const productListInDB = result.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productListInDB);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Your Products</h1>
      <div className="container">
        {loading ? (
          <div className="d-flex flex-row justify-content-center align-items-center mt-">
            <div class="sk-chase">
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
            </div>
          </div>
        ) : (
          <div className="card-columns productsContainer">
            {products.map((p) => (
              <ItemCard key={p.id} {...p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
