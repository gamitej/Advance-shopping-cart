import React from "react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Box, SwipeableDrawer } from "@mui/material";

type ShoppingCartsProps = {
  anchor?: "right" | "left" | "top" | "bottom" | undefined;
};

const ShoppingCarts = ({ anchor = "right" }: ShoppingCartsProps) => {
  const { isOpen, openCart, closeCart } = useShoppingCart();

  return (
    <React.Fragment key={anchor}>
      <SwipeableDrawer
        anchor={anchor}
        open={isOpen}
        onClose={closeCart}
        onOpen={openCart}
      >
        <div className="w-[15rem]">
          <div className="flex justify-between items-center p-2">
            <p className="text-lg font-semibold text-blue-400">Cart</p>
            <p
              className="cursor-pointer hover:bg-slate-200 p-2 rounded-lg text-sm"
              onClick={closeCart}
            >
              Close
            </p>
          </div>
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default ShoppingCarts;
