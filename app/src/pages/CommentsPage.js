import React from "react";
import { images } from "../utils/constants/images/Images";
import BackButton from "../utils/BackButton";

//placeholder
function CommentsPage() {
  return (
    <main class="p-48 h-screen">
      <div class="flex flex-col items-center justify-center -mt-28 ">
        <img src={images.logoFNBG} class="h-64 mx-auto" />
        <h1 class="text-7xl mx-auto -mt-4">404</h1>
        <p class="text-2xl mt-6 ">This page could not be found</p>
        <div class="mt-6">
          <BackButton />
        </div>
      </div>
    </main>
  );
}

export default CommentsPage;
