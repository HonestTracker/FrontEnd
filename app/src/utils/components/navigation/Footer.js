import React from "react";
import { images } from "../../constants/Images";
import CustomLink from "../../CustomLink";

const Footer = () => {
  return (
    <footer className="bg-teal-500 p-5">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <div className="flex items-center">
          <div className="mr-5">
            <img src={images.logoFNBG} alt="Logo" className="h-40 w-40" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-lg">
              Netherlands, Groningen
              <br />
              support@honesttracker.nl
              <br />
              06-33445566
              <br />
              9723BZ
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-white text-lg">
            Terms and conditions
            <br />
            <CustomLink to="/about">About Us</CustomLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
