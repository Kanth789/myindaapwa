import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToItems } from "../redux/slice/ProductSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { showSnackBar } from "../redux/slice/snackBar";
import { fetchProducts } from "../helper/products";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import UI from "../constants/ui";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const result = await fetchProducts();
        setProducts(result);
        dispatch(addProductToItems(result));
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
  }, [dispatch]);

  const onClickExplore = () => {
    navigate("/products");
  };

 

  return (
    <div>
      <div>
        <div
          className="p-4 h-[50vh] w-full bg-cover bg-[top_25%_right_0] px-20 flex flex-col items-center justify-center leading-none"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/nM5Yqth/Black-and-White-Modern-Grunge-Plastic-Texture-Streetwear-Landscape-Banner-1.png')",
          }}
        >
          <div className="text-center text-lightCream">
            <h4 className=" text-4xl">{UI.TRADEINFAIR}</h4>
            <h2 className=" text-6xl font-semibold">{UI.SUPERVALUEDEALS}</h2>
            <h1 className=" text-2xl">{UI.ONALLPRODUCTS}</h1>
            <p className="text-3xl mb-2">
              {UI.SAVEMOREWITHCOUPONSANDUPTOOFF}
            </p>
            <Button
              className="text-white mt-3"
              style={{ backgroundColor: "rgb(120 53 15)", borderRadius: 10 }}
              variant="contained"
              onClick={onClickExplore}
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
      <div className="container ">
        <h1 className="text-center text-2xl font-semibold my-1">
          {UI.FEATUREDCOLLECTIONS}
        </h1>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((key) => (
              <div key={key}>{<ProductCardSkeleton/>}</div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 my-3">
            {products?.slice(0,5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <div
        className="h-[50vh] w-full bg-cover bg-[top_25%_right_0] px-20 flex flex-col items-start justify-center leading-none"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/TtG001G/Black-and-White-Modern-Grunge-Plastic-Texture-Streetwear-Landscape-Banner.png')",
        }}
      ></div>
    </div>
  );
};

export default HomePage;
