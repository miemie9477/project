import "./css/CheckPage.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { OrdertotalContext } from "../../../ContextAPI";
import { Cart_MerContext } from "../../../ContextAPI";
import { AccountContext} from "../../../ContextAPI";
import axios from "axios";


const CheckBody = () =>{

    const {userOrdertotal, setUserOrdertotal} = useContext(OrdertotalContext); //購物車總額 (int)
    const {Cart_Mer, setCart_Mer} = useContext(Cart_MerContext); //購物車商品編號與數量 {pNo: Num} (JSON)
    const { userAccount, setUserAccount} = useContext(AccountContext);
    var tId;
    
    console.log(Cart_Mer);
    const navigate = useNavigate();
    
    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });

    const keys = Object.keys(Cart_Mer);
    if (keys.length > 0) {
        const firstKey = keys[0];
        const firstValue = Cart_Mer[firstKey];
        console.log(`Key: ${firstKey}, Value: ${firstValue}`);
    }

    useEffect(() =>{
        axios.post("http://localhost:3001/cart/checkExist", {userAccount})
        .then(
            response =>{
                console.log("get:", response.data.tId);
                tId = response.data.tId;
            }
        )
    })
    
    const getTaiwanTime = () => {
        const now = new Date();
        const options = {
            timeZone: 'Asia/Taipei',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const formatter = new Intl.DateTimeFormat('zh-TW', options);
        return formatter.format(now);
    };

    const onSubmit = (data) => {
        var rId;
        var time = getTaiwanTime();
        console.log("time:", time);
        const info ={
            tId: tId,
            tMethod: "cart",
            tTime: time,
            mId: userAccount,
            tPay: "credit card",
            bankId: data.Check_BankCode,
            bankName: data.Check_BankName,
            cardId: data.Check_CreditcardNumber,
            security: data.Check_CreditcardCVC,
            dueDate: data.Check_ExpirationDate,
            tDelivery: data.Check_DeliverMethod,
            tAddress: data.Check_Address,
            recipient: data.Check_ReceiverName,
            reciPhone: data.Check_ReceiverPhone

        }
        console.log(info);
        var url = "http://localhost:3001/check/inputTrans"
        axios.post(url, info)
        .then(
            response =>{
                console.log(response.data);
                rId = response.data.rId;
                console.log("get rId:", rId);
                
                // console.log("驗證成功",data);
                // navigate('/CartPage/CheckPage/CheckSucceedPage');
            }
        )

        var url = "http://localhost:3001/check/inputRecord";
        
    }
    console.log(errors);

    return(
        <div className="CheckBodyCss">
            <Container>
                <form name="CheckForm" onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col sm={8}>
                        <Row>
                            <div className="Check_Delivery">
                                <div style={{width: "95%", margin : "auto"}}>
                                    <div className="Check_TitleText">配送</div>
                                    <div className='Check_line'></div>
                                    <b>收件人姓名</b>
                                    <input type="text" name="Check_ReceiverName" id="Check_ReceiverName" 
                                    {...register("Check_ReceiverName", {required: true})} />
                                    {!!errors.Check_ReceiverName && <p>{errors.Check_ReceiverName.message.toString() || "請輸入收件人姓名"}</p> }

                                    <b>寄送方式</b>
                                    <input type="text" name="Check_DeliverMethod" id="Check_DeliverMethod" 
                                    {...register("Check_DeliverMethod", {required: true})} />
                                    {!!errors.Check_DeliverMethod && <p>{errors.Check_DeliverMethod.message.toString() || "請輸入寄送方式"}</p> }

                                    <b>地址</b>
                                    <input type="text" name="Check_Address" id="Check_Address" 
                                    {...register("Check_Address", {required: true})} />
                                    {!!errors.Check_Address && <p>{errors.Check_Address.message.toString() || "請輸入地址"}</p> }

                                    <div style={{display:"flex", justifyContent: "space-between", alignItems :"left"}}><b style={{width : "50%"}}>城市</b><div>　　</div><b style={{width : "50%"}}>郵遞區號</b></div>
                                    <div style={{display:"flex", justifyContent: "space-between"}}>
                                        <input type="text" name="Check_City" id="Check_City" 
                                        {...register("Check_City", {required: true})} />

                                        <div>　　</div> 
                                        <input type="text" name="Check_PostalCode" id="Check_PostalCode" 
                                        {...register("Check_PostalCode", {required: true, maxLength: {value: 6, message: "郵遞區號過長"}, minLength: {value: 5, message: "郵遞區號過短"}})} />

                                    </div>
                                    <div style={{display:"flex", justifyContent: "space-between", alignItems :"left"}}>
                                        {!!errors.Check_City && <p style={{width : "50%"}}>{errors.Check_City.message.toString() || "請輸入城市"}</p> }
                                        <div>　　</div>
                                        {!!errors.Check_PostalCode && <p style={{width : "50%"}}>{errors.Check_PostalCode.message.toString() || "請輸入郵遞區號"}</p> }
                                    </div>
                                    
                                    <b>收件人手機</b>
                                    <input type="phone" name="Check_ReceiverPhone" id="Check_ReceiverPhone"
                                    {...register("Check_ReceiverPhone", {required: true, maxLength: {value: 10, message: "手機號碼過長"}, minLength: {value: 10, message: "手機號碼過短"}})} />
                                    {!!errors.Check_ReceiverPhone && <p>{errors.Check_ReceiverPhone.message.toString() || "請輸入手機號碼"}</p> }

                                </div>
                                
                            </div>
                        </Row>
                        <Row>
                            <div className="Check_Creditcard">
                                <div style={{width: "95%", margin : "auto"}}>
                                    <div className="Check_TitleText">信用卡資料</div>
                                    <div className='Check_line'></div>
                                    <div style={{display:"flex", justifyContent: "space-between", alignItems :"left"}}><b style={{width : "50%"}}>銀行名稱</b><div>　　</div><b style={{width : "50%"}}>銀行代碼</b></div>
                                        <div style={{display:"flex", justifyContent: "space-between"}}>
                                            <input type="text" name="Check_BankName" id="Check_BankName"  
                                            {...register("Check_BankName", {required: true})} />
                                            
                                            <div>　　</div> 
                                            <input type="text" name="Check_BankCode" id="Check_BankCode"  
                                            {...register("Check_BankCode", {required: true, maxLength: {value: 3, message: "銀行代碼過長"}})} />
                                            

                                        </div>
                                    <div style={{display:"flex", justifyContent: "space-between"}}>
                                        {!!errors.Check_BankName && <p style={{width : "50%"}}>{errors.Check_BankName.message.toString() || "請輸入銀行名稱"}</p> }
                                        <div>　　</div> 
                                        {!!errors.Check_BankCode && <p style={{width : "50%"}}>{errors.Check_BankCode.message.toString() || "請輸入銀行代碼"}</p> }
                                    </div>

                                    <b>信用卡號</b>
                                    <input type="text" name="Check_CreditcardNumber" id="Check_CreditcardNumber" 
                                    {...register("Check_CreditcardNumber", {required: true})} />
                                    {!!errors.Check_CreditcardNumber && <p>{errors.Check_CreditcardNumber.message.toString() || "請輸入信用卡號"}</p> }

                                    <b>安全碼</b>
                                    <input type="text" name="Check_CreditcardCVC" id="Check_CreditcardCVC"  
                                    {...register("Check_CreditcardCVC", {required: true, maxLength: {value: 3, message: "安全碼過長"}, minLength: {value: 3, message: "安全碼過短"}})} />
                                    {!!errors.Check_CreditcardCVC && <p>{errors.Check_CreditcardCVC.message.toString() || "請輸入安全碼"}</p> }

                                    <b>到期日 (MM/YY)</b>
                                    <input type="text" name="Check_ExpirationDate" id="Check_ExpirationDate"  
                                    {...register("Check_ExpirationDate", {required: true})} />
                                    {!!errors.Check_ExpirationDate && <p>{errors.Check_ExpirationDate.message.toString() || "請輸入信用卡到期日"}</p> }

                                    
                                </div>
                                    
                            </div>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Check_OrderSummary userOrdertotal = {userOrdertotal}/>
                    </Col>
                </Row>
                </form>
            </Container>
            

        </div>
    );
}

const Check_OrderSummary = ({userOrdertotal}) =>{
    return(
        <div className="Check_OrderSummary">
            <div style={{fontSize:"24px",fontWeight:"bold"}}>結帳明細<hr/></div>
            <div style={{display:"flex", justifyContent: "space-between"}}>
                <div style={{fontSize:"20px"}}>結帳金額</div>
                <div style={{fontSize:"20px"}}>NT. ${userOrdertotal}</div>
            </div>
            <Button variant="danger"  name="checkBtn" type="submit">確認付款</Button>
        </div>
    );
}

export default CheckBody;