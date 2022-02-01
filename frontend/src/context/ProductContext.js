import React, { useEffect, useState, createContext, useMemo } from "react";

export const ProductContext = createContext([]);

export function ProductProvider({ children }) {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      await fetch(`http://localhost:8080/products?page=${page}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => res.json())
        .then((productsJson) => {
          const { data, total } = productsJson;
          setProducts(data);
          setPageCount(total);
        })
        .catch((err) => {});
    })();
  }, [page]);

  const filterProducts = useMemo(() => {
    const lowerSearch = search.toLowerCase();

    return products.filter((product) =>
      product.name.toLowerCase().includes(lowerSearch)
    );
  }, [search, products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        search,
        setSearch,
        filterProducts,
        page,
        setPage,
        pageCount,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
