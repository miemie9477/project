import Frame from "../../BasicFrame/frame";
import Wine from "./pic/whiskey.jpg"
import Dropdowns from "./Dropdowns";
import Merchandise from "./Merchandise";
import "./css/WinePage.css"


const TestCss = {
    color: "black",
    fontSize: "20px",
    position: "relative"
}

const BannerCss = {
    backgroundImage: `url(${Wine})`,
}

const WhiskeyPage = () => {
    return(
        <div>
            <div style={TestCss}>
            <Frame/>
            <div className="Banner" style={BannerCss}>
                <span>威士忌 Whiskey</span>
            </div>

            <Dropdowns />
            <Merchandise />


            

            
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    );
}

export default WhiskeyPage