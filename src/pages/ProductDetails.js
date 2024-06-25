import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import {  useParams } from "react-router-dom";
import { addProductToItems } from "../redux/slice/ProductSlice";
import { Button, Rating } from "@mui/material";
import Loader from "../components/Loader";
import UI from "../constants/ui";

const ProductDetailsPage = () => {
  const [productDetail, setProductDetail] = useState(null);
  const similarProductsFromStore = useSelector((state) => state.product.items);
  const [addedtoCart,setAddedtoCart] = useState(false) 
  const [similarProducts, setSimilarProducts] = useState(
    similarProductsFromStore || []
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  const [productId,setProductId] = useState(id)
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setAddedtoCart(false)
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (similarProductsFromStore.length === 0) {
      const fetchProducts = async () => {
        try {
          const response = await fetch(
            "https://fakestoreapi.com/products?limit=5"
          );
          const data = await response.json();
          setSimilarProducts(data.slice(0,5));
          dispatch(addProductToItems(data));
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };

      fetchProducts();
    } else {
      setSimilarProducts(similarProductsFromStore.slice(2,7));
    }
  }, [dispatch, similarProductsFromStore]);

  const handleAddToCart = () => {
    dispatch(addToCart(productDetail));
    setAddedtoCart(true)
  };

  const onClickProductDetailPage = (id) => {
    setProductId(id);
  };

  const isProductInCart = cart?.items?.some((item) => item.id === productDetail?.id);

  return productDetail ? (
    <div className="container p-2">
      <div className="flex lg:flex-row md:flex-col flex-col gap-2">
        <div className="card-border p-4 rounded object-cover w-full">
          <img
            src={productDetail.image}
            alt={productDetail.title || "productDetail"}
            className="mx-auto w-100 h-80 object-contain rounded"
          />
        </div>
        <div className="lg:ms-2 ms-0 card-border p-4 rounded flex flex-col justify-evenly items-start">
          <h2 className="text-lg font-bold">
            {UI.TITLE}: <span className="font-normal">{productDetail.title}</span>
          </h2>
          <p className="mb-2 font-semibold">
            {UI.DESCRIPTION}:
            <span className="font-normal"> {productDetail.description}</span>
          </p>
          <p className="mb-2 font-semibold">
            {UI.PRICE}: <span className="font-normal">${productDetail.price}</span>
          </p>
          <div>
            <Rating
              name="half-rating-read"
              defaultValue={productDetail.rating.rate}
              precision={0.5}
              readOnly
            />
          </div>
          <Button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded"
            variant={addedtoCart ? 'outlined':'contained'}
          >
            {addedtoCart || isProductInCart ? 'Added to Cart' :'Add to Cart'}
          </Button>
        </div>
      </div>
      <h2 className="text-xl font-semibold py-2">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {similarProducts.map((eachItem) => (
          <div
            key={eachItem.id}
            className="card-border p-4 rounded  cursor-pointer"
            onClick={() => onClickProductDetailPage(eachItem.id)}
          >
            <div className="flex flex-col h-full justify-between">
            <div>
              <img
                src={eachItem.image}
                alt={eachItem.title || "eachItem"}
                className="mx-auto w-full h-48 object-contain rounded"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">
                {UI.TITLE}: <span className="font-normal">{eachItem.title}</span>
              </h2>
              <p className="mb-2 font-semibold">
                {UI.PRICE}: <span className="font-normal">${eachItem.price}</span>
              </p>
              <Rating
                name="half-rating-read"
                defaultValue={eachItem.rating.rate}
                precision={0.5}
                readOnly
              />
              <div>{UI.STOCK}: {`${eachItem.rating.count}`}</div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default ProductDetailsPage;
