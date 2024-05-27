import "./css/Registersucceed.css"
import Registerpng from "./pic/checked.png"
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";


const Succceed = () =>{
    return(
        <div className="RegisterSucceed">
            <div className="RegisterSucceed_Title"><img src={Registerpng} alt="" /><span>會員註冊成功</span></div>
            <div className='RegisterSucceed_line'></div>
            <div className="RegisterSucceed_detail"><span>已完成會員註冊，請返回登入頁面進行登入</span></div>
            <Button className="RegisterSucceed_ReturnHome" variant="dark"><NavLink to="/LoginPage"><span>返回登入頁面</span></NavLink></Button>
            
        </div>
    );
}

export default Succceed;