import React from "react";
import BannerImg from "../../../Images/Home/banner.png";

const Banner = () => {
  return (
    <>
      <section className="flex md:flex-row flex-col justify-between items-center py-12">
        <div className="details text-left w-auto md:w-2/3">
          <h1 className="text-4xl font-bold py-2 leading-10">
            Welcome to{" "}
            <span className="text-green-700 italic">WorldLerner</span>
            <br /> Coaching Center
          </h1>
          <p>
            WorldLerner advances lasting solutions to the most pressing
            educational, health, and workforce challenges across the globe. Our
            work is guided by evidence, empathy, and experience.
          </p>
        </div>
        <div>
          <img src={BannerImg} alt="banner" />
        </div>
      </section>
    </>
  );
};

export default Banner;
