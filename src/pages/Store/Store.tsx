import storeItems from "@/data/items.json";

const Store = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-12 gap-4">
        {storeItems.map(({ id, name, imgUrl, price }) => (
          <div
            key={id}
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 h-[21rem] shadow-md border rounded-md hover:bg-red-100 cursor-pointer"
          >
            <div className="h-[80%] w-full">
              <img
                src={imgUrl}
                alt=""
                className="w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="h-[20%] px-3 flex justify-between items-center">
              <p className="capitalize text-lg font-semibold text-slate-600">
                {name}
              </p>
              <p>{price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
