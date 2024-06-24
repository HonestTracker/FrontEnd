import React from "react";
import { useNavigate } from 'react-router-dom';
import { icons } from "./constants/Icons";

function BackButton() {
  let navigate = useNavigate();

  function goBack() {
    navigate(-1); 
  }

  return (
    <button className="bg-teal-400 cursor-pointer text-white flex px-4 py-2 rounded hover:bg-teal-300" onClick={goBack} >
      <icons.ArrowLeft style={{ width: "20px", height: "20px", marginRight: "10px", marginTop: "3px"}} />
      Go back
    </button>
  );
}

export default BackButton