import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImgOne from "../assets/banner/img1.jpg";
import ImgTwo from "../assets/banner/img2.jpg";
import ImgThree from "../assets/banner/img3.jpg";
import ImgFour from "../assets/banner/img4.jpg";
import ImgFive from "../assets/banner/img5.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image src={ImgOne} />
        </div>
        <div>
          <Image src={ImgTwo} />
        </div>
        <div>
          <Image src={ImgThree} />
        </div>
        <div>
          <Image src={ImgFour} />
        </div>
        <div>
          <Image src={ImgFive} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
