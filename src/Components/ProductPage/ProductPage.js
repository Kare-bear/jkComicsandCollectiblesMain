import React from "react";
import "./ProductPage.css"
import TestImage from "../Logos/Pipes1.jpeg";

function ProductPage(){
// Product Page should have Multiple images of product, Price, Option to add to cart. Page should show return policy, product discriptions, Pre-order cutoff date, links to other products and categories. Testing Git


    return(
      <div id="homelayout">
        <div id="cardText1"><h2>Transformers Kingdom WFC-K32 Autobot Pipes</h2></div>
        <img src={TestImage} id="productMainImages" alt="placeholderTESTIMAGE"/>
        <div>
          
        </div>

        {/* 
        main image
        images
        title 
        description
        price
        add to cart

        */}
      </div>
    )
  }
export default ProductPage;
