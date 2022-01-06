import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import CategoryHeader from "./Components/CategoryNav/CategoryNav";
import siteLogo from "./Components/Logos/jkComColLOGO.webp"
import Home from './Components/Home/Home';
import ProductPage from './Components/ProductPage/ProductPage';
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import "./App.css";

class App extends Component{
  render() {
  return <Router>
            <div className="App">
                <Link to ="/"><img src={siteLogo} id="siteLogo" alt="sitelogo"/></Link>
              <CategoryHeader/>
            
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="product-page" element={<ProductPage/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            </div>
          </Router>
  }
}

export default App;
