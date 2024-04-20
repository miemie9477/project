import Category from "./TopCategory";
import "./css/frame.css"
import BottomBar from "./BottomBar";
import TopBarText from "./TopBar_text";


const Frame = () =>{
    return(
        <div>
            <TopBarText />
            <Category />   
            <BottomBar/>
        </div>
    );
}

export default Frame