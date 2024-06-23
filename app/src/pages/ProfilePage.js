import React from "react";
import BackButton from "../utils/BackButton";
import { images } from "../utils/constants/Images"
import {icons} from "../utils/constants/Icons"
import ProductCard from "../utils/components/navigation/ProductCard"
function ProfilePage() {
    return (
      <main class="p-48">
        <div > 
          <BackButton />
          <h1 class="text-3xl font-bold absolute right-48 top-24">Your profile</h1>
        </div>
        <div class="grid grid-cols-3 gap-x-16 gap-y-4 -mt-24">
            <div class="bg-white border-2 mb-10 border-gray-200 flex items-center p-4 shadow-sm rounded-md col-span-3 ">
                <img src={images.footerLogo}  alt="Pikachu" class="h-24 w-24  mr-4" />
                <span class="flex-grow text-3xl font-semibold">Hello, Jur!</span>
                <icons.SettingsGear src={images.footerLogo}  alt="Pikachu" class="h-12 w-12 mr-4 cursor-pointer hover:fill-black transition duration-1000 ease-in-out transform hover:rotate-360"/>
            </div>

            <div class="col-span-2 -mt-8">
                <div class="flex justify-between">
                <h1 class="text-2xl font-semibold">Your recent comments</h1>
                <h1 class="text-xl opacity-55 cursor-pointer underline font-medium">See all</h1>
                </div>
            
                <div class="bg-white border-2 h-36 flex-col   border-gray-200 shadow-sm p-4 rounded-lg">
                    <div class="flex justify-between">
                        <div class="flex items-center gap-4">
                            <img src={images.footerLogo}  class="h-14"/>
                            <h1>Jur</h1>
                        </div>

                        <div class="flex">
                            <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 fill-yellow-400" />
                            <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 fill-yellow-400 border-10 " />
                            <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8  fill-yellow-400 " />
                            <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 fill-yellow-400 " />
                            <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8  " />
                        </div>  
                    </div>
                <p class="pl-24 pt-2 overflow-hidden">  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div class="-mt-6">
                <h1 class="font-semibold text-xl">Your statistics</h1>
                <div class="bg-white border-2 col-span-1  h-36 flex items-center py-8 border-gray-200 shadow-sm p-4 rounded-lg">
                    <div class="mx-auto">
                        <div class="">
                        <h1 class="text-center text-5xl">349</h1>
                        <p class="text-xl">Reviews posted</p>
                    </div>
                </div>
            </div>
            </div>
            

            <div class="bg-white border-2 col-span-2 h-36 border-gray-200 shadow-sm p-4 rounded-lg">
                <div class="flex justify-between">
                    <div class="flex items-center gap-4">
                        <img src={images.footerLogo}  class="h-14"/>
                        <h1>Jur</h1>
                    </div>
                    <div class="flex">
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 fill-yellow-400" />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 fill-yellow-400 border-10 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8  fill-yellow-400 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 fill-yellow-400 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8  " />
                    </div>  
                </div>
                <p class="pl-24 pt-2 overflow-hidden">  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div class="bg-white border-2 col-span-1 mt-10 h-36 flex items-center py-8 border-gray-200 shadow-sm p-4 rounded-lg">
                <div class="mx-auto">
                    <div class="">
                        <h1 class="text-center text-5xl">349</h1>
                        <p class="text-xl">Reviews posted</p>
                    </div>
                </div>
            </div>

            <div class="bg-white border-2 col-span-2 h-36 -mt-10 border-gray-200 shadow-sm p-4 rounded-lg">
                <div class="flex justify-between">
                    <div class="flex items-center gap-4">
                        <img src={images.footerLogo}  class="h-14"/>
                        <h1>Jur</h1>
                    </div>
                    <div class="flex">
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 hover:fill-yellow-400" />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 hover:fill-yellow-400 border-10 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8  hover:fill-yellow-400 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 hover:fill-yellow-400 " />
                        <icons.Star src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 hover:fill-yellow-400 " />
                    </div>  
                </div>
                <p class="pl-24 pt-2 overflow-hidden">Dit is een prima product. werkt zoals hoort </p>
            </div>

            <div></div>
            <div class="mt-2">
                <h1 class="text-2xl font-semibold">Your favourite products</h1>
                <div className="flex items-center col-span-1 border-2  bg-white rounded-lg shadow-md overflow-hidden">
                <img src={images.footerLogo} alt="Pokemon Shoes" className="w-36 h-full" />
                <div className="flex-grow p-4">
                    <div className="flex justify-between items-center">
                <div>
                    <div className="mt-2 mb-2 ml-4 flex items-center">
                    <icons.Amazon src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 fill-blue-400" />
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">amazon.com</a>
                </div>
                <h2 className="text-lg font-bold ml-6 text-gray-800">€423,93</h2>
                <p className="text-red-500 ml-6">-2,73%</p>
                <icons.Link style={{ width: "20px", height: "20px" }} class="ml-32" />
            </div>
        </div>
    </div>
    </div>
</div>

    <ProductCard/>

        
    <div class="mt-4">
    <h1 class="text-xl text-end opacity-55 cursor-pointer underline font-medium">See all</h1>
        <div className="flex items-center col-span-1 border-2  bg-white rounded-lg shadow-md overflow-hidden">
                <img src={images.footerLogo} alt="Pokemon Shoes" className="w-36 h-full" />
                <div className="flex-grow p-4">
                    <div className="flex justify-between items-center">
                    <div>
                        <div className="mt-2 mb-2 ml-4 flex items-center">
                        <icons.Coolblue src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 mr-2 fill-blue-400" />
                        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">amazon.com</a>
                    </div>
                        <h2 className="text-lg font-bold ml-6 text-gray-800">€423,93</h2>
                        <p className="text-red-500 ml-6">-2,73%</p>
                        <icons.Link style={{ width: "20px", height: "20px" }} class="ml-32" />
                    </div>
                </div>
            </div>
        </div>
    </div> 

            <div className="flex items-center col-span-1 border-2 mt-10 bg-white rounded-lg shadow-md overflow-hidden">
                <img src={images.footerLogo} alt="Pokemon Shoes" className="w-36 h-full" />
                <div className="flex-grow p-4">
                    <div className="flex justify-between items-center">
                <div>
                <div className="mt-2 mb-2 ml-4 flex items-center">
                    <icons.Bolcom src={images.footerLogo}  alt="Pikachu" class="h-8 w-8 mr-2 fill-blue-400" />
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">amazon.com</a>
                </div>
                <h2 className="text-lg font-bold ml-6 text-gray-800">€423,93</h2>
                <p className="text-red-500 ml-6">-2,73%</p>
                <icons.Link style={{ width: "20px", height: "20px" }} class="ml-32" />
            </div>
            
        </div>
    </div></div>

    <ProductCard/>
    <ProductCard/>
    <ProductCard/>

            
</div>
      </main>
    );
  }

export default ProfilePage;