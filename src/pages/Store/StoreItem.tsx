// utils
import { formatCurrency } from "@/utilities/formatCurreny";
// mui
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

interface StoreItemsProps {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

const StoreItem = ({ id, name, imgUrl, price }: StoreItemsProps) => {
  const quantity = 0;

  return (
    <div
      key={id}
      className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 h-[23rem] shadow-md border rounded-md"
    >
      <div className="h-[70%] w-full">
        <img
          src={imgUrl}
          alt=""
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="h-[15%] px-3 flex justify-between items-center">
        <p className="capitalize text-lg font-semibold text-slate-600">
          {name}
        </p>
        <p>{formatCurrency(price)}</p>
      </div>
      <div className="flex justify-center items-center h-[15%]">
        {quantity === 0 ? (
          <Button variant="contained" startIcon={<AddIcon />}>
            Add to cart
          </Button>
        ) : (
          <div className="flex justify-center items-center gap-2">
            <Button variant="contained">
              <RemoveIcon />
            </Button>
            <p>{quantity} in cart</p>
            <Button variant="contained">
              <AddIcon />
            </Button>
            <DeleteIcon className="text-red-500 cursor-pointer hover:text-red-400" />
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
