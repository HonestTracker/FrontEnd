import React, {useEffect} from "react";
import { images } from "../../utils/constants/images/Images";
import {getAboutData} from "../../backend/get_aboutdata.js"
/**
 * Renders the About page component.
 * @returns {JSX.Element} The About page component.
 */
function About() {
  const [loading, setLoading] = React.useState(true);
  const [productCount, setProductCount] = React.useState({});  
  const [commentCount, setCommentCount] = React.useState([]);
  const [userCount, setUserCount] = React.useState([]);
  const [error, setError] = React.useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAboutData();
        console.log(data);
        setProductCount(data.product_count || {});
        setCommentCount(data.comment_count || []);
        setUserCount(data.user_count || []);
      } catch (error) {
        console.error("Error fetching about data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <main class="p-48 flex flex-col justify-center h-screen">
      <section class="flex-column justify-between rounded-lg  bg-white border-2 border-gray-200 shadow-md -mt-28">
        <div>
          <img src={images.logoFNBG} alt="Logo" class="h-40 mx-auto"></img>
        </div>
        <div class="content-center">
          <h1 class="text-center mb-6 text-3xl">About HonestTracker</h1>
          <p class="mb-10 pl-6 pr-6 text-xl text-center">
            We are a young company that stand for fairness for sales of
            products. We noticed the companies raise the prices as a precursor
            to black Friday. They then drop the price to when it was previously.
            We made this application so you can check for fairness in sales.
          </p>
        </div>
      </section>
      <h2 class="text-center text-3xl font-semibold mt-12 mb-4">
        Our Statistics
      </h2>
      <section>
        <div class="grid grid-cols-3 space-x-6 font-bold">
          <div className="bg-white border-2 border-gray-200 shadow-md rounded-lg py-5  flex flex-col items-center justify-center text-customGray ">
            <h3 className="text-2xl  ">{productCount}</h3>
            <p className="">PRODUCTS TRACKED</p>
          </div>
          <div className="bg-white border-2 border-gray-200 shadow-md rounded-lg  py-5  flex flex-col items-center justify-center text-customGray ">
            <h3 className="text-2xl">{commentCount}</h3>
            <p className="">REVIEWS POSTED</p>
          </div>
          <div className="bg-white border-2 border-gray-200 shadow-md rounded-lg py-5 flex flex-col items-center justify-center text-customGray ">
            <h3 className="text-2xl ">{userCount}</h3>
            <p className="">USERS REGISTERED</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
