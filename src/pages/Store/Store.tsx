import StoreItem from "./StoreItem";
import storeItems from "@/data/items.json";

const Store = () => {
  return (
    <div className="p-4">
      <h3 className="h-[5rem] text-4xl flex justify-center items-center mb-2">
        Store
      </h3>
      <div className="grid grid-cols-12 gap-4">
        {storeItems.map(({ id, name, imgUrl, price }) => (
          <StoreItem id={id} name={name} imgUrl={imgUrl} price={price} />
        ))}
      </div>
    </div>
  );
};

export default Store;
