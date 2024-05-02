import "./css/OtherPage.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";


const LoginBox = () =>{
    return(
        <div className="loginBoxCss">
            <div className="loginContent">
                <div style={{fontSize:"18px", margin:"40px"}}>用戶登入<br/></div>
                <form name="login" action="" method="POST">
                    <div className="loginForm">
                        <Form.Label htmlFor="inputAccount"><b>帳號</b></Form.Label>
                        <Form.Control
                            size={10}
                            type="account"
                            id="inputAccount"
                        />
                        <Form.Label htmlFor="inputPassword"><b>密碼</b></Form.Label>
                        <Form.Control
                            size={10}
                            type="password"
                            id="inputPassword"
                        />
                        <Button variant="danger">登入</Button>
                        <div className="registerLink">
                            沒有帳號?<NavLink to="/RegisterPage">點我註冊</NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginBox;