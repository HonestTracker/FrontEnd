import React from "react";
import { images } from "../utils/constants/Images"
function About() {
  return (
    <main class="p-48" style={{ fontFamily: "Poppins, sans-serif" }}>
        <section class="flex-column justify-between rounded-lg  bg-white border-2 border-gray-200 shadow-md -mt-28">
            <div>
                <img src={images.logoFNBG} alt="Logo" class="h-40 mx-auto"></img>
            </div>
            <div class="content-center">
                <h1 class="text-center mb-6 text-3xl">About HonestTracker</h1>
                <p class="mb-10 pl-6 pr-6 text-xl">We are a young company that stand for fairness for sales of products. We noticed the companies raise the prices as a precursor to black Friday. They then drop the price to when it was previously. We made this application so you can check for fairness in sales.</p>
            </div>
        </section>
        <h2 class="text-center text-3xl font-semibold mt-12 mb-4">Our Statistics</h2>
        <section>
            <div class="grid grid-cols-3 space-x-6 font-bold" >
            <div className="bg-white border-2 border-gray-200 shadow-md rounded-lg py-5  flex flex-col items-center justify-center text-customGray ">
                  <h3 className="text-2xl  ">349,439</h3>
                  <p className="">PRODUCTS TRACKED</p>
                </div>
                <div className="bg-white border-2 border-gray-200 shadow-md rounded-lg  py-5  flex flex-col items-center justify-center text-customGray ">
                  <h3 className="text-2xl">349,439</h3>
                  <p className="">REVIEWS POSTED</p>
                </div>
                <div className="bg-white border-2 border-gray-200 shadow-md rounded-lg py-5 flex flex-col items-center justify-center text-customGray ">
                  <h3 className="text-2xl ">349,439</h3>
                  <p className="">PRODUCTS TRACKED</p>
                </div>
            </div>
        </section>
      </main>
  );
}

export default About;
