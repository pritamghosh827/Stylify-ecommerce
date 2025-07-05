import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './Hero.css'; // Import the Hero CSS file

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import all images
import hero_image from "../Assets/hero_image.png";
import hero_image2 from "../Assets/hero_image2.png";
import hero_image3 from "../Assets/hero_image3.png";
import hero_image4 from "../Assets/hero_image4.png";
import hero_image5 from "../Assets/hero_image5.png";
import hero_image6 from "../Assets/hero_image6.png";
import hero_image7 from "../Assets/hero_image7.png";

const Hero = () => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    // Countdown Timer Logic
    const endTime = new Date('December 31, 2024 23:59:59').getTime(); // Set the offer end time
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining("Offer Expired!");
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>EXCLUSIVE OFFER</h2>
        <p className="hero-left-description">Hurry Up! Get your favorite collections now at huge discounts.</p>

        <div className="offer-countdown">
          <p>Offer ends in:</p>
          <div id="countdown">{timeRemaining}</div>
        </div>

        <button className="hero-latest-btn">
          Shop Now
        </button>
      </div>

      <div className="hero-right">
        <Swiper
          modules={[Autoplay, Pagination]} // Add modules here
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
          pagination={{ clickable: true }} // Enable pagination
          loop={true} // Enable infinite looping
          className="hero-swiper" // Add class for styling
        >
          <SwiperSlide>
            <img src={hero_image} alt="Hero 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero_image2} alt="Hero 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero_image3} alt="Hero 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero_image4} alt="Hero 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero_image5} alt="Hero 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero_image6} alt="Hero 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero_image7} alt="Hero 7" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
