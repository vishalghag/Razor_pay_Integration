interface CardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
}

const Card = ({
  image,
  title,
  category,
  description,
  price,
  rating,
}: CardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
            {category}
          </span>

          <span className="font-semibold text-amber-500">⭐ {rating}</span>
        </div>

        <h2 className="mb-2 text-xl font-bold text-slate-800">{title}</h2>
        <div className="w-50">
          <p className="line-clamp-2 text-sm text-slate-500">{description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-green-600">₹{price}</h3>

          <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
