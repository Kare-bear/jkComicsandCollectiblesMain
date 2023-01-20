import React from "react";
import { useNavigate } from "react-router-dom";


function LoginPage(){

let navigate = useNavigate();

    return(
      <div id="homelayout">
        <div>
        <form>
          <label>
          Username:
          <input type="text" name="name" />
          </label>
          <label>
          Password:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Submit" onClick={()=>{navigate("/user-account");}} />
        </form>
         </div>
        </div>
    )
  }
export default LoginPage;
