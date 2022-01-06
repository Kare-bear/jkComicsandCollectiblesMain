import React from "react";
import { useNavigate } from "react-router-dom";

  function CategoryNav(){
// List of Top Listed Product categories always viewed
    let navigate = useNavigate();
      return(
        <div>
          <div id="boxGroup">
            <button id="categoryNav" onClick={()=>{navigate("/category-page");}}><p id="stationaryBox">PreOrders</p></button>
            <button id="categoryNav" onClick={()=>{navigate("/category-page");}}><p id="stationaryBox">Transformers</p></button>
            <button id="categoryNav" onClick={()=>{navigate("/category-page");}}><p id="stationaryBox">New Arrivals</p></button>
            <button id="categoryNav" onClick={()=>{navigate("/category-page");}}><p id="stationaryBox">Pokemon</p></button>
            <button id="categoryNav" onClick={()=>{navigate("/category-page");}}><p id="stationaryBox">Marvel</p></button>
            <button id="categoryNav" onClick={()=>{navigate("/category-page");}}><p id="stationaryBox">Star Wars</p></button>
            <button id="categoryNav" onClick={()=>{navigate("/category-page");}}><p id="stationaryBox">Power Rangers</p></button>
          </div>      
        </div>
      )
    }

export default CategoryNav;