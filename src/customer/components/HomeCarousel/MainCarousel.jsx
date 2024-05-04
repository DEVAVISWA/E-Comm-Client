import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const MainCarousel = () => {
  const items = mainCarouselData.map((items) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={items.image}
      alt=""
    />
  ));
  return (
    <AliceCarousel
      // mouseTracking
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
      // responsive={responsive}
      // controlsStrategy="alternate"
    />
  );
};

export default MainCarousel;
