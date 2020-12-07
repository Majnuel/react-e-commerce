import React, { useState, useEffect } from "react";
import ItemCard from "./itemCard";
import { DB } from "../tools/firebaseFactory";

export default function MainScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    DB.collection("e-commerce")
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
        result.docs.map((doc) => console.log(doc.data()));
        console.log(productListInDB);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  function getByID() {}
  function getByWhere() {}

  return (
    <div>
      <h1>Your Products</h1>
      <div className="container">
        {loading ? (
          <div>cargandon</div>
        ) : (
          <div className="justify-content-between row productsContainer">
            {products.map((p) => (
              <div key={p.id} className="col-md-4">
                <ItemCard {...p} />
              </div>
            ))}
          </div>
        )}

        <button onClick={getByID}>Get by id</button>
        <button onClick={getByWhere}>Get by where</button>
      </div>
    </div>
  );
}
