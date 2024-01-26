import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import siteLogo from "./Components/Logos/empressiveLogo.jpeg"
import Home from './Components/Home/Home';
import CategoryHeader from "./Components/CategoryNav/CategoryNav";
import ProductPage from './Components/ProductPage/ProductPage';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import UserPage from "./Components/UserPage/UserPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import LoginTopper from "./Components/Login/LoginTopper";
import LoginPage from "./Components/Login/LoginPage";
import AccountCreate from "./Components/Login/AccountCreate";
import ReturnPolicy from "./Components/ReturnFooter/ReturnPolicy";

import "./App.css";
import axios from "axios";

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      test: null
    };
  }

  componentDidMount(){
    axios
    .get("/api/test")
    .then(response => this.setState({ test: response.data}))
    .catch(console.log);
  }

  


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

              <ReturnPolicy/> 
            </div>
          </Router>
  }
}

export default App;
