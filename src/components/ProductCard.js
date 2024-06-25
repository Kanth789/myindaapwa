import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UI from "../constants/ui";

const ProductCard = ({ product }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate();

  const onClickProductDetailPage = () => {
    navigate(`/productDetail/${product.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <div
      className="card-border px-4 py-2 rounded cursor-pointer relative"
      onClick={onClickProductDetailPage}
      key={product.id}
    >
      <div className="float-right" onClick={handleFavoriteClick}>
        {isFavorited ? (
          <FavoriteIcon fontSize="small" color="error" />
        ) : (
          <FavoriteBorderIcon fontSize="small" color="error" />
        )}
      </div>
      {product.rating.count > 200 && <div className="absolute right-2 bottom-2 "> 
        <span className="p-1 rounded text-green-500">{UI.BESTSELLER}</span>
      </div>}

      <div className="flex flex-col h-full justify-between">
        <div>
          <img
            src={product.image}
            alt={product.title || "product"}
            className="mx-auto w-full h-48 object-contain rounded"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">
            {UI.TITLE}: <span className="font-normal">{product.title}</span>
          </h2>
          <p className="mb-2 font-semibold">
            {UI.PRICE}: <span className="font-normal">${product.price}</span>
          </p>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating.rate}
            precision={0.5}
            readOnly
          />
          <div>{UI.STOCK}: {`${product.rating.count}`}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
