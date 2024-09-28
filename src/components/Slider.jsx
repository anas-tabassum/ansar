import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
        className="relative overflow-hidden rounded-lg w-[50vw]"
      >
        <div>
          <img
            src="https://images.pexels.com/photos/2830460/pexels-photo-2830460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 1"
          />
          {/* <p className="legend">Hajj Booking</p> */}
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2291789/pexels-photo-2291789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
