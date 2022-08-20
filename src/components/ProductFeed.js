import React from "react";
import Product from "./Product";
import advaImg from "../assets/advertizement.jpg";
import Image from "next/image";

const ProductFeed = ({ products }) => {
  return (
    <div className="bg-gray-100 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
      <Image src={advaImg} />
    </div>
  );
};

export default ProductFeed;
