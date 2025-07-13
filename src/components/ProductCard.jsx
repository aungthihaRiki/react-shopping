import React from "react";
import RatingSection from "./RatingSection";
import { Link } from "react-router-dom";

function ProductCard({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) {
  return (
    <Link to={`/product-detail/${id}`} className="border px-4 py-2 flex flex-col justify-between items-start gap-2">
      <div className="w-full flex justify-center">
        <img className="h-40" src={image} alt="" />
      </div>
      <p className="font-semibold line-clamp-2">{title}</p>
      <RatingSection currentRate={rate} />
      <div className="flex justify-between w-full items-end">
        <p>{price} $</p>
        <button className="border text-sm px-2 py-1 cursor-pointer hover:bg-gray-200">
          Add Cart
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
