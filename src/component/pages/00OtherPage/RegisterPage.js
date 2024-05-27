import "./css/OtherPage.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Frame from "../../BasicFrame/frame";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IntroductionPic from "./pic/introductionPic.jpg"
import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () =>{
    return(
        <div style={{position:"relative"}}>
            <Frame/>
            <RegisterForm/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            
        </div>
    );
}

const RegisterForm = () =>{
    const navigate = useNavigate();

    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });
    const [passwordtext, repeatpasswordtext] = watch(["registerPassword","registerRepeatPassword"])
    useEffect(() => {
        if(!!passwordtext && !!repeatpasswordtext && (passwordtext !== repeatpasswordtext)){
            setError("registerRepeatPassword",{type:"custom", message:"兩密碼不相同"})
        }

    },[passwordtext,repeatpasswordtext])
    
    const onSubmit = (data) => {
        console.log("驗證成功",data);
        navigate('/RegisterPage/RegisterSucceedPage');
    }
    console.log(errors);

    return(
        <div className="registerContent">
            <Container>
                <Row>
                    <Col>
                        <img src={IntroductionPic} alt="IntroductionPic" />
                    </Col>

                    <Col>
                        <form name="RegisterForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="registerForm">
                                <h1><b>註冊會員</b></h1>
                                &emsp;趕快加入買酒網會員，享受更多會員福利!<hr/><br/>
                                
                                <b>真實姓名</b>
                                <input type="name" id="registerName"
                                {...register("registerName", {required: true, maxLength: {value: 10, message: "姓名過長"}})} />
                                {!!errors.registerName && <p>{errors.registerName.message.toString() || "請輸入姓名"}</p> }

                                
                                <b>帳號</b>
                                <input type="account" id="registAccount"
                                {...register("registAccount", {required: true, maxLength: {value: 10, message: "帳號過長"}})} />
                                {!!errors.registAccount && <p>{errors.registAccount.message.toString() || "請輸入帳號"}</p> }
        
                                <b>密碼</b>
                                <input type="password" id="registerPassword"
                                {...register("registerPassword", {required: true, })} />
                                {!!errors.registerPassword && <p>{errors.registerPassword.message.toString() || "請輸入密碼"}</p> }

                                <b>確認密碼</b>
                                <input type="password" id="registerRepeatPassword"
                                {...register("registerRepeatPassword", {required: true, })} />
                                {!!errors.registerRepeatPassword && <p>{errors.registerRepeatPassword.message.toString() || "請輸入密碼"}</p> }
        

                                <b>身分證字號</b>
                                <input type="text" id="registerPId"
                                {...register("registerPId", {required: true, maxLength: {value: 10, message: "身分證字號過長"}, minLength: {value: 10, message: "身分證字號過短"}})} />
                                {!!errors.registerPId && <p>{errors.registerPId.message.toString() || "請輸入身分證字號"}</p> }
        
                                
                                <br/>
                                <b>性別</b>
                                <div key={`default-radio`} className="registerSex">
                                    <div className="registerSexdecoration">
                                        <input name="registergroup_sex[]" type="radio"  id="male-radio" value="男性"  {...register("registergroup_sex", { required: true })} />
                                        <input name="registergroup_sex[]" type="radio"  id="female-radio" value="女性" {...register("registergroup_sex", { required: true })} />
                                        <input name="registergroup_sex[]" type="radio"  id="otherSex-radio" value="其他" {...register("registergroup_sex", { required: true })} />
                                    </div>
                                    <div className="registerSexdecoration">
                                        <label for="male-radio">男性</label>
                                        <label for="female-radio">女性</label>
                                        <label for="otherSex-radio">其他</label>
                                    </div>
                                </div>
                                {!!errors.registergroup_sex && <p>{errors.registergroup_sex.message.toString() || "請選擇性別"}</p> }

                                <b>電子郵件</b>
                                <input type="email" id="registerEmail"
                                {...register("registerEmail", {required: true, })} />
                                {!!errors.registerEmail && <p>{errors.registerEmail.message.toString() || "請輸入電子郵件"}</p> }
        

                                <b>聯絡住址</b>
                                <input type="address" id="registerAddress"
                                {...register("registerAddress", {required: true, })} />
                                {!!errors.registerAddress && <p>{errors.registerAddress.message.toString() || "請輸入聯絡住址"}</p> }
        

                                <b>手機電話</b>
                                <input type="phone" id="registerPhone"
                                {...register("registerPhone", {required: true, maxLength: {value: 10, message: "電話號碼過長"}, minLength: {value: 10, message: "電話號碼過短"}})} />
                                {!!errors.registerPhone && <p>{errors.registerPhone.message.toString() || "請輸入電話號碼"}</p> }
        
                                
                                <b>生日</b>
                                <input type="date" name="birthday" id="birthday"
                                {...register("birthday", {required: true, })} />
                                {!!errors.birthday && <p>{errors.birthday.message.toString() || "請輸入生日"}</p> }
        
                                <br/><br/>
                                <Button variant="danger" name="registerBtn" type="submit">註冊會員</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}

export default RegisterPage;
