import Frame from "../../BasicFrame/frame";
import Wine from "./pic/softdrinks.jpg"
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

const SoftDrinksPage = () => {
    return(
        <div>
            <div style={TestCss}>
            <Frame/>
            <div className="Banner" style={BannerCss}>
                <span>無酒精 Soft Drinks</span>
            </div>

            <Dropdowns />
            <Merchandise />


            

            
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    );
}

export default SoftDrinksPage