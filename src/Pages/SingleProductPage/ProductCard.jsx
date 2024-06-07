const ProductCard = ({ image, price, title, description }) => {
  return (
    <div className="h-[250px] w-[300px] mx-auto">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
        <div className="p-4">
          <div className="text-red-500 font-bold text-lg">NRS {price}</div>
          <div className="text-lg font-bold mt-2">{title}</div>
          <div className="text-gray-700 mt-1">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
