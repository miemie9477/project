import "./css/memberpage.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import tanqueray from './pic/Tanqueray  Gin.png';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { AccountContext} from "../../../ContextAPI";
import { useContext, useEffect, useState } from "react";

const Mem_OrderManage = () =>{
    const { userAccount, setUserAccount} = useContext(AccountContext);
    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });
    const [transInfo, setTransInfo] = useState({});
    
    
    
    useEffect(() => {
        const fetchTransInfo = async () => {
            try {
                const url = "http://localhost:3001/modifyMemberSide/viewTrans";
                const response = await axios.post(url, { userAccount });
                console.log(response.data);
                

                const updatedTransInfo = await Promise.all(response.data.map(async item => {
                    const recordUrl = "http://localhost:3001/modifyMemberSide/viewRecord";
                    const rId = item.rId;
                    const recordResponse = await axios.post(recordUrl, { rId });
                    return { ...recordResponse.data, ...item };
                }));

                setTransInfo(updatedTransInfo);
                console.log("new:", updatedTransInfo);
            } catch (error) {
                console.error("Error fetching transaction info:", error);
            }
        };

        fetchTransInfo();
    }, [userAccount]);

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

    const onSubmit = (data) => {
        console.log("驗證成功",data);

        const date = getTaiwanTime();
        const info = data.Mem_Trans_Ratings;
        const pNo = data.pNo;
        const url = "http://localhost:3001/modifyMemberSide/rating";
        axios.post(url, {userAccount, pNo, date, info})
        .then(
            response =>{
                if(response.data.result === "success"){
                    alert("已送出評價!");
                    console.log(response.data);
                }
            }
        )
    }


    return(
        <div className="Mem_OrderManageBG">
            <Container>
                <Col>
                    <Row>
                        <div className="Mem_OrderManageBG">
                            <div className="Mem_OrderManage">
                                <div className="Mem_Transaction">
                                    <div className="Mem_Trans_Title">
                                        <div className="Mem_Trans_Num">交易編號：123456789</div>
                                        
                                        <div className="Mem_Trans_Return"><Button variant="info">退貨</Button></div>
                                    </div>
                                </div>
                                <div className="Mem_Trans_divider"></div>
                                <div className="Mem_Trans_Main">
                                    <div className="Mem_Trans_Items">
                                        <div className="Mem_Trans_OrderStatus">
                                            <div className="Mem_Trans_OrderStatusDecoration">訂單狀態：已送達</div>
                                            <div className="Mem_Trans_OrderStatusDecoration">收件人：大聰明</div>
                                            <div className="Mem_Trans_OrderStatusDecoration">收件人電話：0931415968</div>
                                            <div className="Mem_Trans_OrderStatusDecoration">寄送方式：宅配到府</div>
                                            <div className="Mem_Trans_OrderStatusDecoration">寄件地址：彰化縣彰化市進德路1號</div>
                                            <div className="Mem_Trans_OrderStatusDecoration">付款狀態：已付款</div>
                                            
                                        </div>
                                        <div className="Mem_Trans_CartItem">
                                            <div style={{display:"flex"}}>
                                                
                                                <NavLink to="#"><img src={tanqueray} alt=""></img></NavLink>
                                                <div style={{display:"inline"}}>
                                                    <NavLink to="#"><div style={{fontSize:"18px"}}><b>坦奎瑞琴酒</b><br/></div></NavLink>
                                                    <div style={{fontSize:"14px"}}>
                                                        
                                                        <br/>　數量　|　2
                                                        <br/>　小計　|　$1320
                                                    </div>  
                                                </div>
                                            </div>
                                            <div className="CartAmountControl">
                                                

                                            </div>
                                        </div>
                                        <div className="Mem_Trans_CartItem">
                                            <div style={{display:"flex"}}>
                                                
                                                <NavLink to="#"><img src={tanqueray} alt=""></img></NavLink>
                                                <div style={{display:"inline"}}>
                                                    <NavLink to="#"><div style={{fontSize:"18px"}}><b>坦奎瑞琴酒</b><br/></div></NavLink>
                                                    <div style={{fontSize:"14px"}}>
                                                        
                                                        <br/>　數量　|　2
                                                        <br/>　小計　|　$1320
                                                    </div>  
                                                </div>
                                            </div>
                                            <div className="CartAmountControl">
                                                

                                            </div>
                                        </div>
                                        <div className="Mem_Trans_Totalprice">總計 NT $2,640</div>
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
                            </div>
                        </div>
                    </Row>
                </Col>
            </Container>
        
        </div>
    );
}

export default Mem_OrderManage;