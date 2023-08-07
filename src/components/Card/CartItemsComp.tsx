import { useShoppingCart } from "@/context/ShoppingCartContext";
import StoreItem from "@/data/items.json";
import { formatCurrency } from "@/utilities/formatCurreny";
import DeleteIcon from "@mui/icons-material/Delete";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItemsComp({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  const item = StoreItem.find((item) => item.id === id);

  if (item == null) {
    return null;
  }

  return (
    <div className="p-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          src={item.imgUrl}
          alt=""
          className="h-[8rem] w-[10rem]"
          style={{ objectFit: "cover" }}
        />
        <div>
          <p className="text-lg capitalize">{item.name}</p>
          <p>{formatCurrency(item.price)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-blue-500">
          x<span className="text-x">{quantity}</span>
        </p>
        <p>{formatCurrency(item.price * quantity)}</p>
        <DeleteIcon
          className="text-red-500 cursor-pointer hover:text-red-400"
          onClick={() => removeFromCart(id)}
        />
      </div>
    </div>
  );
}

export default CartItemsComp;
