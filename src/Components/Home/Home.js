import React from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../Products"; 
import {ProductCard} from "../productCard/productCard"

import "./Home.css";


function Home(){
  let navigate = useNavigate();
  return(
    <div id="homelayout">
     
      <main><h1>TOP PICKS</h1>
        <div id ="displayCard">
          
          {PRODUCTS.map((productCard) =>(
            <button id="displayButton" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard data={productCard}/></button>
          ))} 
        
          {/* <button id="displayButton" onClick={()=>{
            navigate("/product-page");
          }}><ProductCard2/></button>
        
          <button id="displayButton" onClick={()=>{
            navigate("/product-page");
          }}><ProductCard2/></button>

          <button id="displayButton" onClick={()=>{
            navigate("/product-page");
          }}><ProductCard2/></button>

          <button id="displayButton" onClick={()=>{
            navigate("/product-page");
          }}><ProductCard2/></button> */}
        </div>

        <h1>FEATURED PRE-ORDERS</h1>
          <div id ="displayCard"> 

            {/* <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>

            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>
            
            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>
            
            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>
            
            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>
            
            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>
            
            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>
            
            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>
            
            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>
            
            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>

            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>
            
            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>
            
            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>
            
            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button> 

            <button id="displayButton1" onClick={()=>{
              navigate("/product-page");
            }}><ProductCard2/></button>  */}

          </div>
      </main>
    </div>
  )
}
export default Home;