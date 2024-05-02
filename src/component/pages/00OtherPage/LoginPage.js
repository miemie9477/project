import TopBarText from "../../BasicFrame/TopBar_text";
import Category from "../../BasicFrame/TopCategory";
import BottomBar from "../../BasicFrame/BottomBar";

import LoginBox from "./LoginBox";


const LoginPage = () =>{
    return(
        <div style={{position:"relative"}}>
            <TopBarText />
            <Category />   
            <LoginBox/>
            <BottomBar/>
        </div>
        
    );
}

export default LoginPage;