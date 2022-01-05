import React from "react";
import ProductCard1 from "../ProductCard/ProductCard"
import ProductCard2 from "../ProductCard/ProductCard1"
import "./Home.css";

const Home = () => {
  return(
    <div id="homelayout">
     
      <main><h1>TOP PICKS</h1>
      <div id ="displayCard"> 
      <ProductCard1/>
      <ProductCard1/>
      <ProductCard1/>
      <ProductCard1/>
      </div>
      <h1>FEATURED PRE-ORDERS</h1>
      <div id ="displayCard"> 
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      <ProductCard2/>
      </div>
      </main>
    </div>
  )
}
export default Home;