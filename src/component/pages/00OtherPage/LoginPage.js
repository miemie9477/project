import Frame from "../../BasicFrame/frame";
import LoginBox from "./LoginBox";
import React, { useState } from 'react';

const LoginPage = () =>{
    // const [login, setLogin] = useState(0);

    return(
        <div style={{position:"relative"}}>

            <Frame/>
            <LoginBox/>
            
        </div>
        
    );
}

export default LoginPage;