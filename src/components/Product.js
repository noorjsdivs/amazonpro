import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import hasPrimeImg from "../assets/hasPrime.png";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 border border-white hover:border-gray-300 hover:drop-shadow-md duration-300 ">
      <div>
        <p className="absolute font-titleFont top-2 right-2 text-xs italic text-gray-600">
          {category}
        </p>
        <div className="w-full flex justify-center items-center">
          <Image src={image} height={200} width={200} objectFit="contain" />
        </div>
        <h4 className="font-bodyFont my-3 line-clamp-2">{title}</h4>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 font-bodyFont line-clamp-2">{description}</p>
        <div className="mb-5 font-titleFont font-bold">
          <Currency quantity={price} currency="USD" />
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <Image width={60} height={60} src={hasPrimeImg} />
            <p className="text-xs text-gray-500">FREE international Delivery</p>
          </div>
        )}
        <button className="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
