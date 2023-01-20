import React from "react";
import { useNavigate } from "react-router-dom";


function LoginTopper(){

let navigate = useNavigate();

    return(
      <div id="homelayout">
         <button id="displayButton" onClick={()=>{navigate("/login-page");}}>Login</button>
         <button id="displayButton" onClick={()=>{navigate("/account-create");}}>Create Account</button>

      </div>
    )
  }
export default LoginTopper;

/* Will contain links for the top of the home page to login to a users page // create an 
account // once logged in should change to Sign Out Link*/