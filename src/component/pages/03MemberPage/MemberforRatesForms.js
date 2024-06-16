import "./css/memberpage.css"
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MemberforMerItems from "./MemberforMerItems";
import { AccountContext} from "../../../ContextAPI";


const MemberforRatesForms = ({info}) =>{
    const { userAccount, setUserAccount} = useContext(AccountContext);

    const { register, handleSubmit, watch, setError, getValues,formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });
    
    const [ItemInfos, setItemInfos] = useState([]);

    useEffect(() => {
        setItemInfos(info.data)
    }, []);

    const getTaiwanTime = () => {
        const now = new Date();
        const options = {
            timeZone: 'Asia/Taipei',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour12: false,
        };
        const formatter = new Intl.DateTimeFormat('zh-TW', options);
        return formatter.format(now);
    };

    var message;    
    const onSubmit = (data) => { 

        console.log("驗證成功",data);
        console.log("驗證成功",data);

        const date = getTaiwanTime();
        message = data.Mem_Trans_Ratings;

        const pNos = info.data.map(item => item.pNo);
        console.log("pNos:", pNos);

        pNos.map(pNo =>{
            console.log("date:", date);
            console.log("pNo:", pNo);
            console.log("message:", message);
            const url = "http://localhost:3001/modifyMemberSide/rating";
            axios.post(url, {userAccount, pNo, date, message})
            .then(
                response =>{
                    if(response.data.result === "success"){
                        
                        console.log(response.data);
                    }
                }
            ).catch(
                error =>{
                    console.log(error);
                }
            )
        })
        alert("已送出評價!");
    }

    const returnMer = () =>{
        const rId = info.rId;
        console.log("rId:", rId);
        const url = "http://localhost:3001/modifyMemberSide/return"
        axios.post(url, {rId})
        .then(
            response =>{
                if(response.data.result === "success"){
                    alert("已申請退貨!");
                }
            }
        )
    }



    return(
       <>
            <div className="Mem_Transaction">
                <div className="Mem_Trans_Title">
                    <div className="Mem_Trans_Num">交易編號：{info.rId}</div>
                    
                    <div className="Mem_Trans_Return"><Button variant="info" onClick={returnMer}>退貨</Button></div>
                </div>
            </div>
            <div className="Mem_Trans_divider"></div>
            <div className="Mem_Trans_Main">
                <div className="Mem_Trans_Items">
                    <div className="Mem_Trans_OrderStatus">
                        <div className="Mem_Trans_OrderStatusDecoration">訂單狀態：{info.tState}</div>
                        <div className="Mem_Trans_OrderStatusDecoration">收件人：{info.recipient}</div>
                        <div className="Mem_Trans_OrderStatusDecoration">收件人電話：{info.reciPhone}</div>
                        <div className="Mem_Trans_OrderStatusDecoration">寄送方式：{info.tDelivery}</div>
                        <div className="Mem_Trans_OrderStatusDecoration">寄件地址：{info.tAddress}</div>
                        <div className="Mem_Trans_OrderStatusDecoration">付款狀態：{info.payState}</div>
                        
                    </div>

                    {ItemInfos.map((iteminfo, index) => (
                        <div key={iteminfo.UUID} className="Mem_Trans_CartItem">
                            <MemberforMerItems iteminfo={iteminfo}/>

                            {/* <div style={{display:"flex"}}>
                                
                                <NavLink to="#"><img src={tanqueray} alt=""></img></NavLink>
                                <div style={{display:"inline"}}>
                                    <NavLink to="#"><div style={{fontSize:"18px"}}><b>{iteminfo.pName}</b><br/></div></NavLink>
                                    <div style={{fontSize:"14px"}}>
                                        
                                        <br/>　數量　|　{iteminfo.amount}
                                        <br/>　小計　|　${iteminfo.rTotal}
                                    </div>  
                                </div>
                            </div>
                            <div className="CartAmountControl">
                                

                            </div> */}
                        </div>
                    ))}

                    {ItemInfos.length === 1 && (
                        <div className="Mem_Trans_CartItem_CSSFIX">
                        
                        </div>
                    )}


                    <div className="Mem_Trans_Totalprice">總計 NT ${info.total}</div>
                </div>
                
                <div className="Mem_Trans_divider2"></div>
                <div className="Mem_Trans_Rating">
                    <div className="Mem_Trans_Rating_Title"><span>商品評價</span></div>
                    <form name="MemberTransationRatingForm" onSubmit={handleSubmit(onSubmit)}>
                        <textarea type="text" name="Mem_Trans_Ratings" id="Mem_Trans_Ratings" placeholder="歡迎留下你的評價"
                        {...register("Mem_Trans_Ratings", {required: true, })} />
                        {!!errors.Mem_Trans_Ratings && <p>{errors.Mem_Trans_Ratings.message.toString() || "請輸入商品評價"}</p> }
                        
                        <div style={{textAlign:"end"}}><Button type="submit" variant="info" className="Mem_Trans_RatingForm_Submit">送出</Button></div>
                    </form>
                    <div className="Mem_Trans_divider3"></div>
                </div>
            </div>
       </>
    );
}

export default MemberforRatesForms;