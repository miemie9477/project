import wine from "./pic/GORDON_S.png"
import { useState } from "react";
import { useContext } from 'react';
import { LoginContext } from "../../../../ContextAPI";
import { useNavigate } from 'react-router-dom';

import "./css/Details.css"


const Details = () => {
    const { login, setLogin } = useContext(LoginContext);
    const navigate = useNavigate();

    const [Mer_num, setMer_num] = useState(0);
    const Mer_Minus = () =>{
        if(Mer_num > 1) setMer_num(Mer_num - 1)
        else setMer_num(1)
    }

    const Mer_Add = () =>{
        setMer_num(Mer_num + 1)
    }
    
    const LoginIdentity1 = () =>
    {
        if(login === 0) 
        {
            navigate('/LoginPage');
        }
        // else if(login === 1) 
        // {

        // }
        // else if(login === 2) 
        // {
            
        // }
    }

    return(
        <div className="Mer_background">
            <br/><br/><br/>
            <div className="Mer_wine_background">
                <br/>
                <div className="Mer_winebox">
                    <div className="Mer_wine"><img src={wine} alt="" /></div>
                    <div className="Mer_winedetails">
                        <div className="Mer_details_1">高登琴酒</div>
                        <div className="Mer_details_2">$ 420</div>
                        <div className="Mer_details_3">數量</div>
                        <div className="Mer_details_4">
                            <div className="Mer_dtl4_counter">
                                <div className="Mer_dtl4_ctr_minus"><button onClick={Mer_Minus}>-</button></div>
                                <div className="Mer_dtl4_ctr_num">{Mer_num}</div>
                                <div className="Mer_dtl4_ctr_add"><button onClick={Mer_Add}>+</button ></div>
                            </div>
                            <div className="Mer_dtl4_addtocart"><button onClick={LoginIdentity1}>加入購物車</button></div>
                        </div>
                        <br/>
                        <div className="Mer_details_5">品牌　　　|　Gordon's Gin 高登琴酒</div>
                        <div className="Mer_details_6">類型　　　|　琴酒</div>
                        <div className="Mer_details_7">酒精度數　|　43%</div>
                        <div className="Mer_details_8">規格　　　|　750ml</div>
                    </div>
                </div>
                <div className="Mer_Introduction">
                    <div className="Mer_Intro_title">商品簡介</div>
                    <div className="Mer_Intro_depiction">
                        Gordon’s Gin 高登琴酒主要原料為玉米與大麥，經過一次連續蒸餾後加入來自義大利托斯坎尼的高品質杜松子，胡荽籽與圓當歸根等慎選過後的香料做第二次的共同蒸餾，最後經過第三道蒸餾手續後加以稀釋在裝瓶。<br/>
                        Gordon’s Gin高登琴酒只選用高品質的香料作為加味原料，其原料都必須經過18個月的儲藏存放才可使用。<br/>
                        一直到今天，Gordon’s Gin仍維持當年的風味與香氣，而其香料配方至今仍被嚴密的守護，僅有12人知道完整之香料配方。</div>
                </div>
            </div>
           
        </div>
    );
}
  

export default Details