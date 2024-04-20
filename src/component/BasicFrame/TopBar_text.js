import "./css/frame.css"
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import logo from "./pic/logo.png"
import { NavLink } from "react-router-dom";

const TopBarText = () => {
    return(
        <>
            <div className="TopBarListCss">
                <div className="TopBarTextLeftCss">
                    <ul >
                        <li><NavLink to="#">關於</NavLink></li>
                        <li><NavLink to="#">常見問題</NavLink></li>        
                        <li><NavLink to="#">配送資訊</NavLink></li>
                    </ul>
                </div>
                <div className="TopBarTextRightCss">
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink} style={{textDecoration:"none"}}>會員專區</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>修改會員資料</Dropdown.Item>
                            <Dropdown.Item>查看訂單</Dropdown.Item>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Item>登出</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="LogoLocation">
                <NavLink to="/"><img src={logo} alt="logo" className="BottomLogo"/></NavLink>
            </div>

        </>
    );
}



export default TopBarText