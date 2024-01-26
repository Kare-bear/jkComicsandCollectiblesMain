import React from "react";


export const ProductCard = (props) => {
  const {product_id, brand, line, item_name, item_type, item_sku, notes, sale_price, image_url_1, image_url_2 } = props.data;
    return(
      <div id="cardSet">
        <div>
          <img src={image_url_1} id="testImages" alt="placeholderTESTIMAGE"/>
        </div>
        <div id="cardText">
          <h2>{brand} {line} {item_name}</h2>
          <h1>{sale_price}</h1>
          </div>
      </div>
    )
  }
