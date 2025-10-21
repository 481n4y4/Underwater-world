const Card = ({ image, title, description, emoji }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <div className="flex items-center mb-3">
          {emoji && <span className="text-2xl mr-3">{emoji}</span>}
          <h3 className="text-xl font-bold text-[#0D3B66]">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Card;
