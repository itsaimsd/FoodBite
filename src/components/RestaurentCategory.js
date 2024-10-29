import ItemList from "./ItemList";

const RestaurentCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  
  return (
    <div className="my-4">
      <div className="bg-gray-50 shadow-lg p-4 rounded-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl">{showItems ? "🔼" : "🔽"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentCategory;
