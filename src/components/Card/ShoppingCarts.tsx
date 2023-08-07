import React from "react";
// comp
import CartItemsComp from "./CartItemsComp";
// context
import { useShoppingCart } from "@/context/ShoppingCartContext";
// mui
import { SwipeableDrawer } from "@mui/material";
import { formatCurrency } from "@/utilities/formatCurreny";
import StoreItem from "@/data/items.json";

type ShoppingCartsProps = {
  anchor?: "right" | "left" | "top" | "bottom" | undefined;
};

const ShoppingCarts = ({ anchor = "right" }: ShoppingCartsProps) => {
  const { isOpen, openCart, closeCart, cartItems } = useShoppingCart();

  return (
    <React.Fragment key={anchor}>
      <SwipeableDrawer
        anchor={anchor}
        open={isOpen}
        onClose={closeCart}
        onOpen={openCart}
      >
        <div className="w-[30rem]">
          <div className="flex justify-between items-center p-2 sticky top-0 z-[100]">
            <p className="text-lg font-semibold text-blue-400">Cart</p>
            <p
              className="cursor-pointer hover:bg-slate-200 p-2 rounded-lg text-sm"
              onClick={closeCart}
            >
              Close
            </p>
          </div>
          <br />
          {cartItems.length > 0 &&
            cartItems?.map((item) => (
              <CartItemsComp
                id={item.id}
                quantity={item.quantity}
                key={item.id}
              />
            ))}
          {cartItems.length > 0 && (
            <p className="float-right px-2">
              <span className="text-xl font-semibold">Total</span>
              <span className="ml-2">
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = StoreItem.find(
                      (idx) => idx.id === cartItem.id
                    );
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </span>
            </p>
          )}
          {cartItems.length === 0 && (
            <div className="w-full h-[70vh] text-2xl flex justify-center items-center">
              {" "}
              Empty Cart{" "}
            </div>
          )}
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default ShoppingCarts;
