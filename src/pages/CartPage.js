import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuantity, removeFromCart, removeQuantity } from "../redux/slice/cartSlice";
import { Rating } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import UI from "../constants/ui";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div className="container pt-3">
      <h2 className="text-2xl font-bold mb-4">{UI.SHOPPING_cART}</h2>
      {cart.items.length === 0 ? (
        <p>{UI.CART_EMPTY}</p>
      ) : (
        <>
          <ul>
            {cart.items.map((item) => (
              <li key={item.id} className="mb-2">
                <div className="flex flex-col md:flex-row lg:flex-row card-border px-4 py-2 items-center">
                  <div className="w-20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start w-full mx-2 ">
                    <div className="flex flex-col lg:w-2/4">
                      <h2 className="font-semibold">{item.title}</h2>
                      <Rating
                        name="half-rating-read"
                        defaultValue={item.rating.rate}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row  items-center">
                      <div className="lg:me-6 flex items-center">
                        <div onClick={()=>dispatch(addQuantity(item.id))} className="py-1 px-2 bg-slate-400 rounded cursor-pointer">
                          <AddIcon fontSize="12px"/>
                        </div>
                        <h6 className="p-2">{item.quantity}</h6>
                        <div onClick={()=>dispatch(removeQuantity(item.id))} className="py-1 px-2 bg-slate-400 rounded cursor-pointer">
                          <RemoveIcon fontSize="12px"/>
                        </div>
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="bg-red-600 text-white px-4 py-2 rounded md:ms-1"
                      >
                        {UI.REMOVE}
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-end">
            <div>
              <span className="text-lg">{UI.TOTAL_AMOUNT}</span>:{" "}
              <span className="font-bold text-2xl">{Math.floor(totalAmount)}/-</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
