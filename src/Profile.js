
 import React from "react";
import { useState } from "react/cjs/react.development";
function Profile(){
    const [loggedIn, setLoggedIn]= useState(true)
   
    
    return( 
        <div>
        {loggedIn?<h1>Welcome Narinder</h1>:<h2>Welcome Guest</h2>}
        </div>
    )


    
}
export default Profile;
    