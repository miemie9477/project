import DrunkDrive from "./pic/drunk_driving.png"
import "./css/frame.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./pic/logo_white.png"
import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie';

const visier = () => {
    // Cookies.set('visiter_counter', 0, { path: '/' })
    var allowed;
    // 检测某个 cookie 是否存在
    if (Cookies.get('visiter_counter')) 
    {
        if(allowed === true){
            let currentValue = parseFloat(Cookies.get('visiter_counter'))
            Cookies.set('visiter_counter', currentValue + 0.5, {path: '/'})
            allowed = false
        }
    } 
    else 
    {
        Cookies.set('visiter_counter', 1, {path: '/'})
        allowed = true;
    }

    return Cookies.get('visiter_counter')
}

const visiter_style={
    fontWeight : "bold",
    borderColor : "white",
    borderStyle : "solid",
    borderWidth : "1px",
    padding : "5px",
    margin: "0 auto"

}

const BottomBar = () =>{
    return(
        <>
            <div className="BottomBarLogoCss">
                <img src={DrunkDrive} alt="DrunkDrive"></img>
            </div>
            <div className="BottomBarAreaCss">
                

                <Container className="BottomText">
                    <Row>
                        <Col>
                            <br/><NavLink to="/"><img src={logo} alt="logo" className="BottomLogo"/></NavLink>
                            <br/><br/>MY9買酒網在2007年正式設立網路平台，並於2011年後在台北陸續成立銷售門市，提供酒類與相關產品資訊和透明化的價格，長期以來以產品來歷可靠且品質保證作為經營宗旨。</Col>
                        <Col>
                            <br/><b>產品類別</b>
                            <ul>
                                <li><NavLink to="/GinPage">琴酒</NavLink></li>
                                <li><NavLink to="/VodkaPage">伏特加</NavLink></li>
                                <li><NavLink to="/BrandyPage">白蘭地</NavLink></li>
                                <li><NavLink to="/RumPage">蘭姆酒</NavLink></li>
                                <li><NavLink to="/WhiskeyPage">威士忌</NavLink></li>
                                <li><NavLink to="/TequilaPage">龍舌蘭</NavLink></li>
                                <li><NavLink to="/LiqueurPage">利口酒</NavLink></li>
                                <li><NavLink to="/SoftDrinksPage">無酒精</NavLink></li>
                            </ul>
                        </Col>
                        <Col>
                            <br/><b>客戶服務</b><br/>
                            <ul>
                                <li><NavLink to="/IntroductionPage">關於</NavLink></li>     
                                <li><NavLink to="/DeliveryPage">配送資訊</NavLink></li>

                            </ul>
                            
                        </Col>
                        <Col>
                            <br/><b>聯絡我們</b><br/><br/>客服專線：(02)8792-5186<br/>週一-週四：09:00～18:00<br/>週五：09:30～18:00<br/>週日：10:30～18:00<br/>(國定例假日公休)<br/><br/><br/><br/><br/><span style={visiter_style}>網站瀏覽人數 {visier()} 人次</span>
                        </Col>
                    </Row>
                    <Row>
                        <br/><hr/>  
                    </Row>
                </Container>    
                
            </div>
        </>
    );
}
// 468 70
export default BottomBar