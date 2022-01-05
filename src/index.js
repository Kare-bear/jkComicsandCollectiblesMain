import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Home from './Components/Home/Home';
import ProductPage from './Components/ProductPage/ProductPage';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route path="home" element={<Home/>}/>
      <Route path="product-page" element={<ProductPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
