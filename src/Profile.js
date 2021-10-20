
 import React from "react";
import { useState } from "react/cjs/react.development";
function Profile(){
    const [loggedIn, setLoggedIn]= useState(3)
   
    
    return( 
        <div>
            {loggedIn==1?
            <h1>welcome User1</h1>
        :loggedIn==2?<h1>Welcome Narinder</h1>
        :<h1>Welcome Guest</h1>}
        </div>
    )


    
}
export default Profile;
    