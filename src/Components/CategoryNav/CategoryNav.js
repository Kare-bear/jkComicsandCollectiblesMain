import React, { Component } from "react";

export default class CategoryNav extends Component{
// List of all available Product categories

  render(){
    return(
      <div>
        <div id="boxGroup">
          <p id="stationaryBox">PreOrders</p>
          <p id="stationaryBox">New Arrivals</p>
          <p id="stationaryBox">Transformers</p>
          <p id="stationaryBox">Pokemon</p>
          <p id="stationaryBox">Marvel</p>
          <p id="stationaryBox">Star Wars</p>
          <p id="stationaryBox">Power Rangers</p>
        </div>      
      </div>
    )
  }
}