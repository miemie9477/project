import "./css/checksucceed.css"
import checkpng from "./pic/checked.png"
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";


const Succceed = () =>{
    return(
        <div className="CheckSucceed">
            <div className="CheckSucceed_Title"><img src={checkpng} alt="" /><span>交易成功</span></div>
            <div className='CheckSucceed_line'></div>
            <div className="CheckSucceed_detail"><span>已完成付款，若對商品或交易內容有任何問題，歡迎來電諮詢</span></div>
            <Button className="CheckSucceed_ReturnHome" variant="dark"><NavLink to="/"><span>繼續購物</span></NavLink></Button>
            
        </div>
    );
}

export default Succceed;