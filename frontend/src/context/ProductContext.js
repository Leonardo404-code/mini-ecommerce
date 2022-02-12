import React, { useEffect, useState, createContext, useMemo } from "react";
import { NotificationManager } from "react-notifications";

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
        .then((res) => {
          if (!res.ok) {
            const { status } = res;

            if (status !== 500) {
              NotificationManager.error(
                "Error desconhecido, por favor entre em contato ou crie um pull request"
              );
              return;
            } else {
              NotificationManager.error("Error ao processar os produtos");
              return;
            }
          }

          return res.json();
        })
        .then((productsJson) => {
          const { data, total } = productsJson;
          setProducts(data);
          setPageCount(total);
        });
    })();
  }, [page]);

  const filterProducts = useMemo(() => {
    const lowerSearch = search.toLowerCase();

    return products.filter((product) =>
      product.name.toLowerCase().includes(lowerSearch)
    );
  }, [search, products]);

  const handleAddNewProduct = (data) => {
    let copyProducts = [...products];

    copyProducts.push(data);

    setProducts(copyProducts);
  };

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
        handleAddNewProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
