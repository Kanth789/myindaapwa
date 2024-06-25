import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../helper/products";
import { showSnackBar } from "../redux/slice/snackBar";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const result = await fetchProducts();
        setProducts(result);
      } catch (err) {
        dispatch(
          showSnackBar({
            setopen: true,
            message: err.message || "Failed to fetch products",
            severity: "error",
          })
        );
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {loading
          ? [1, 2, 3, 4, 5].map((key) => (
              <div key={key}>
                <ProductCardSkeleton />
              </div>
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Products;
