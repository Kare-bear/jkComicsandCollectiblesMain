import React from "react";
import { useNavigate } from "react-router-dom";


function CreateAccount(){

let navigate = useNavigate();

    return(
      <div id="homelayout">
        <div>
        <form>
          <label>
          Name:
          <input type="text" name="name" />
          </label>
          <label>
          Email Address
            <input type="text" name="email address" />
          </label>
          <label>
          Shipping Address
            <input type="text" name="email address" />
          </label>
          <input type="submit" value="Submit" onClick={()=>{navigate("/user-account");}} />
        </form>
         </div>
        </div>
    )
  }
export default CreateAccount;