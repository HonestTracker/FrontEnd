import React from "react";
import BackButton from "../utils/BackButton";
import { images } from "../utils/constants/Images"
import {icons} from "../utils/constants/Icons"
import {Chart as ChartJS} from "chart.js/auto";
import {Line} from "react-chartjs-2"
import LineChart from "../utils/components/LineChart"


function ProductDetails() {
    return (
      <main class="p-48" style={{ fontFamily: "Poppins, sans-serif" }}>
        <div > 
          <BackButton />
          <h1 class="text-3xl font-bold absolute right-48 top-24">Product overview</h1>
        </div>
        <div class="grid grid-cols-3 gap-x-16 gap-y-4 -mt-24">
            <div class="bg-white border-2 mb-10 border-gray-200 flex items-center p-4 shadow-sm rounded-md col-span-3 ">
                <img src={images.footerLogo}  alt="Pikachu" class="h-24 w-24  mr-4" />
                <span class="flex-grow text-3xl font-semibold">Hello, Jur!</span>
                <icons.SettingsGear src={images.footerLogo}  alt="Pikachu" class="h-12 w-12 mr-4 cursor-pointer hover:fill-black transition duration-1000 ease-in-out transform hover:rotate-360"/>
            </div>

            <div class="col-span-2 -mt-8">
            <h1 className="text-2xl font-semibold">Price history</h1>
            <div class="bg-white border-2  h-full flex-col   border-gray-200 shadow-sm p-4 rounded-lg">
                <div class="flex justify-between">
                    <div class="flex-col items-center gap-4">
                        <h1 class="">Current cheapest website:</h1>
                        <div class="flex">
                        <icons.Amazon src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-blue-400" />
                        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 hover:text-blue-600 transition duration-300 ease-in-out">amazon.com</a>
                        </div>
                    </div>
                   <div class="flex space-x-4 h-12">
                   <button className="bg-teal-400 cursor-pointer text-white px-4 border-gray-200 rounded"  style={{ fontFamily: "Poppins, sans-serif" }}>1M</button>
                   <button className="bg-white border-2 cursor-pointer text-black px-4 py-2 rounded  "  style={{ fontFamily: "Poppins, sans-serif" }}>1Y</button>
                   <button className="bg-white cursor-pointer text-black px-4 border-2 border-gray-200 rounded "  style={{ fontFamily: "Poppins, sans-serif" }}>All</button>
                   </div>
                </div>
                <LineChart />
                
                <div class="flex justify-around w-full mt-6 -mb-7">
                    <div class="flex-col">
                    <h1 class="text-2xl">Current price:</h1>
                    <h1 class=" text-xl">€423,93</h1>
                    <h1 class="text-green-500 text-lg ">(+2,73%)</h1>
                    </div>
                    <div class="flex-col">
                    <h1 class="text-2xl">Median price:</h1>
                    <h1 class="text-xl">€473,93</h1>
                    </div>
                    <div class="flex-col">
                    <h1 class="text-2xl">Lowest price:</h1>
                    <h1 class="text-xl">€323,93</h1>
                    </div>
                </div>
                
            </div>
            </div>

            <div class="bg-white border-2 col-span-1  h-full flex items-center py-8 border-gray-200 shadow-sm p-4 rounded-lg">
                <div class="mx-auto">
                    <div class="">
                        <h1 class="text-center text-5xl">349</h1>
                        <p class="text-xl">Reviews posted</p>
                    </div>

                </div>
            </div>

            <div class="col-span-2 mt-10">
            <div class="bg-white border-2 h-60 border-gray-200 shadow-sm p-4 rounded-lg">
                <div class="flex justify-between">
                    <div class="flex items-center gap-4">
                        <img src={images.footerLogo}  class="h-14"/>
                        <h1>Jur</h1>
                    </div>
                    <div class="flex">
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10  border-10 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10  " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10  " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10  " />
                    </div>  
                </div>
                <div class="bg-gray-300 mt-4 h-32 p-4 flex rounded-md">
                    <icons.Pencil src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 fill-gray-500 " />
                    <p class="mt-1 ml-4 font-semibold text-gray-500">Write a comment...</p>
                </div>
            </div>

            <div class="bg-white border-2 h-36 mt-4 border-gray-200 shadow-sm p-4 rounded-lg">
                <div class="flex justify-between">
                    <div class="flex items-center gap-4">
                        <img src={images.footerLogo}  class="h-14"/>
                        <h1>Jur</h1>
                    </div>
                    <div class="flex">
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400  border-10 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400  " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400  " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10  " />
                    </div>  
                </div>
                <p class="pl-24 pt-2 overflow-hidden">  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               
            </div>

            <div class="bg-white border-2 h-36 mt-4 border-gray-200 shadow-sm p-4 rounded-lg">
                <div class="flex justify-between">
                    <div class="flex items-center gap-4">
                        <img src={images.footerLogo}  class="h-14"/>
                        <h1>Jur</h1>
                    </div>
                    <div class="flex">
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400  border-10 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400  " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400  " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10  " />
                    </div>  
                </div>
                <p class="pl-24 pt-2 overflow-hidden">  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               
            </div>
            <div class="bg-white border-2 h-36 mt-4 border-gray-200 shadow-sm p-4 rounded-lg">
                <div class="flex justify-between">
                    <div class="flex items-center gap-4">
                        <img src={images.footerLogo}  class="h-14"/>
                        <h1>Jur</h1>
                    </div>
                    <div class="flex">
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400  border-10 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400  " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400  " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10  " />
                    </div>  
                </div>
                <p class="pl-24 pt-2 overflow-hidden">  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               
            </div>
            <div class="bg-white border-2 h-36 mt-4 border-gray-200 shadow-sm p-4 rounded-lg">
                <div class="flex justify-between">
                    <div class="flex items-center gap-4">
                        <img src={images.footerLogo}  class="h-14"/>
                        <h1>Jur</h1>
                    </div>
                    <div class="flex">
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400  border-10 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400  " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-yellow-400  " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-10 w-10  " />
                    </div>  
                </div>
                <p class="pl-24 pt-2 overflow-hidden">  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               
            </div>
            </div>


        
        <div className="flex items-center col-span-1 border-2 h-96 mt-10 bg-white rounded-lg shadow-md overflow-hidden">
                <img src={images.footerLogo} alt="Pokemon Shoes" className="w-36 h-full" />
                <div className="flex-grow p-4">
                    <div className="flex justify-between items-center">
                <div>
                <div className="mt-2 mb-2 ml-4 flex items-center">
                <icons.Bolcom src={images.footerLogo}  alt="Pikachu" class="h-10 w-10 fill-blue-400" />
                <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">amazon.com</a>
                </div>
                <h2 className="text-lg font-bold ml-6 text-gray-800">€423,93</h2>
                <p className="text-red-500 ml-6">-2,73%</p>
                <icons.Link src={images.footerLogo}  alt="Pikachu" class="h-8 ml-56 w-10 cursor-pointer \" />
            </div>
            
        </div>
    </div></div>

            
   


            
</div>
      </main>
    );
  }

export default ProductDetails;