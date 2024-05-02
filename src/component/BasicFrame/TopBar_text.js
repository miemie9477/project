import "./css/frame.css"
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import logo from "./pic/logo.png"
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

const TopBarText = () => {
    return(
        <>
            <div className="TopBarListCss">
                <div className="TopBarTextLeftCss">
                    <ul >
                        <li><NavLink to="/IntroductionPage">關於</NavLink></li>
                        <li><NavLink to="#">常見問題</NavLink></li>        
                        <li><NavLink to="#">配送資訊</NavLink></li>
                    </ul>
                </div>
                <div className="TopBarTextRightCss">
                    <div className="RightCss">
                        <NavLink to="/LoginPage">登入</NavLink>
                    </div>
                    <div className="CartCss">
                        <NavLink to="/CartPage"><Button variant="outline-light"><CiShoppingCart size={22}/></Button></NavLink>
                    </div>
                </div>
            </div>
            <div className="LogoLocation">
                <NavLink to="/"><img src={logo} alt="logo" className="BottomLogo"/></NavLink>
            </div>

        </>
    );
}
const MemberLog = () =>{
    return(
        <div>
            <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink} >會員專區</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>修改會員資料</Dropdown.Item>
                    <Dropdown.Item>查看訂單</Dropdown.Item>
                    <Dropdown.Item>查看購物車</Dropdown.Item>
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item>登出</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

    );
}


export default TopBarText