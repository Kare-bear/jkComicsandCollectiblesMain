import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import siteLogo from "./Components/Logos/jkComColLOGO.webp"
import Home from './Components/Home/Home';
import CategoryHeader from "./Components/CategoryNav/CategoryNav";
import ProductPage from './Components/ProductPage/ProductPage';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import UserPage from "./Components/UserPage/UserPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import LoginTopper from "./Components/Login/LoginTopper";
import LoginPage from "./Components/Login/LoginPage";
import AccountCreate from "./Components/Login/AccountCreate";

import "./App.css";
class App extends Component{
  render() {
  return <Router>
            <div className="App">
                <LoginTopper/>
                <Link to ="/"><img src={siteLogo} id="siteLogo" alt="sitelogo"/></Link>
              <CategoryHeader/>
            
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="product-page" element={<ProductPage/>}/>
              <Route path="category-page" element={<CategoryPage/>}/>
              <Route path="user-account" element={<UserPage/>}/>
              <Route path="login-page" element={<LoginPage/>}/>
              <Route path="account-create" element={<AccountCreate/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
            </div>
            <div id ="returnFoot">
              This is where we will place the Return Policy!! 
            </div>
          </Router>
  }
}

export default App;
