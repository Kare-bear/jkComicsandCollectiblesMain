import React, {Component} from "react";
import { Link } from "react-router-dom";

import Home from "./Components/Home/Home";
import CategoryHeader from "./Components/CategoryNav/CategoryNav";
import siteLogo from "./Components/Logos/jkComColLOGO.webp"

import './App.css';

class App extends Component{
  render() {
  return <div className="App">
        <Link to ="/">
      <img src={siteLogo} id="siteLogo" alt="sitelogo"/>
      </Link>
      <CategoryHeader/>
      <Home/>
     
    </div>
  }
}

export default App;
