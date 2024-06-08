import "./css/frame.css"
import logo from "./pic/logo.png"
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useContext } from 'react';
import { LoginContext, AccountContext } from "../../ContextAPI";
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import { useNavigate } from 'react-router-dom';


const TopBarText = () => {
    const { login, setLogin } = useContext(LoginContext);
    const { userAccount, setUserAccount} = useContext(AccountContext);
    const navigate = useNavigate();
    
    const LogOut = () =>{
        setLogin(0);
        setUserAccount("");
        navigate('/');
    }    

    const MemberBackstage = () =>{
        navigate('/MemberPage')
    }

    const AdminBackstage = () =>{
        navigate('/AdminPage')
    }
    
    const LoginIdentity1 = () =>
    {
        if(login === 0) return(
            <NavLink to="/LoginPage">登入</NavLink>
        )
        else if(login === 1) return(
            <div>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>會員專區</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={MemberBackstage}>會員管理</Dropdown.Item>
                        <Dropdown.Divider></Dropdown.Divider>
                        <Dropdown.Item onClick={LogOut}>登出</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        )
        else if(login === 2) return (
            <div>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink} >管理者專區</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={AdminBackstage}>後台管理</Dropdown.Item>
                        <Dropdown.Divider></Dropdown.Divider>
                        <Dropdown.Item onClick={LogOut}>登出</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        )
    }

    const LoginIdentity2 = () =>
    {
        if(login === 0) return(
            <NavLink to="/LoginPage"><Button variant="outline-light"><CiShoppingCart size={22}/></Button></NavLink>
        )
        else if(login === 1) return(
            <NavLink to="/CartPage"><Button variant="outline-light"><CiShoppingCart size={22}/></Button></NavLink>

        )
        // else if(login === 2) return (
            

        // )
    }
    

    return(
        <>
            <div className="TopBarListCss">
                <div className="TopBarTextLeftCss">
                    <ul >
                        <li><NavLink to="/IntroductionPage">關於</NavLink></li>       
                        <li><NavLink to="/DeliveryPage">配送資訊</NavLink></li>
                    </ul>
                </div>
                <div className="TopBarTextRightCss">
                    <div className="RightCss">
                        {LoginIdentity1()}
                        
                    </div>
                    <div className="CartCss">
                        {LoginIdentity2()}
                    </div>
                </div>
            </div>
            <div className="LogoLocation">
                <NavLink to="/"><img src={logo} alt="logo" className="BottomLogo"/></NavLink>
            </div>

        </>
    );
}



export default TopBarText