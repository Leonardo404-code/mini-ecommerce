import { useEffect, useState, createContext, useMemo } from "react";

export const ProductContext = createContext([]);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      await fetch(`http://localhost:8080/products?page=1&product_name=`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => res.json())
        .then((productsJson) => {
          const { data } = productsJson;
          setProducts(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  const filterProducts = useMemo(() => {
    const lowerSearch = search.toLowerCase();

    return products.filter((product) =>
      product.name.toLowerCase().includes(lowerSearch)
    );
  }, [search, products]);

  return (
    <ProductContext.Provider
      value={{ products, search, setSearch, filterProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}
