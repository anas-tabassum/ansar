import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div className="w-full px-4 sm:px-10 lg:px-40 flex justify-center">
      <Carousel
        autoPlay // Enables auto-play
        interval={3000} // Interval between slides in milliseconds
        infiniteLoop // Allows the carousel to loop infinitely
        showThumbs={false} // Hides the thumbnail images
        stopOnHover={false} // Pauses auto-play on hover
        showStatus={false} // Hides the slide number status
        showIndicators={false} // Shows the slide indicators
        className="relative overflow-hidden rounded-lg w-[90vw] sm:w-[100vw]" // Adjust the width for responsiveness
      >
        <div className="h-auto md:h-[30rem]">
          <img
            src="https://images.pexels.com/photos/2830460/pexels-photo-2830460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 1"
            className="h-auto md:h-[110%]"
          />
          {/* <p className="legend">Hajj Booking</p> */}
        </div>
        <div className="h-auto md:h-[30rem]">
          <img
            src="https://images.pexels.com/photos/2291789/pexels-photo-2291789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 2"
            className="h-auto md:h-[120%]" // Ensures the entire image fits within the container
          />
        </div>
        <div className="h-auto md:h-[30rem]">
          <img
            src="https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 3"
            className="h-auto md:h-[120%]" // Ensures the entire image fits within the container
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
