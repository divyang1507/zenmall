"use client";
import React from "react";
import { useRef, useEffect } from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import ProductsCard from "./ProductsCard";
// register Swiper custom elements
register();
const Cardswiper = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="4"
        speed="500"
        loop="true"
        spaceBetween={30}
        css-mode="true"
        // pagination= "true"
        navigation="true"
      >
        <swiper-slide>
          <ProductsCard />
        </swiper-slide>
        <swiper-slide>
          <ProductsCard />
        </swiper-slide>
        <swiper-slide>
          <ProductsCard />
        </swiper-slide>
        <swiper-slide>
          <ProductsCard />
        </swiper-slide>
        <swiper-slide>
          <ProductsCard />
        </swiper-slide>
        <swiper-slide>
          <ProductsCard />
        </swiper-slide>
        <swiper-slide>
          <ProductsCard />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Cardswiper;
