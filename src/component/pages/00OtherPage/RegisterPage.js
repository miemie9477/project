import "./css/OtherPage.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Frame from "../../BasicFrame/frame";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IntroductionPic from "./pic/introductionPic.jpg"
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
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

    const { register, handleSubmit, watch, clearErrors, setError, formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });
    
    const [passwordtext, repeatpasswordtext] = watch(["registerPassword","registerRepeatPassword"])
    
    const validatePasswords = () => {
        if (!!passwordtext && !!repeatpasswordtext && (passwordtext !== repeatpasswordtext)) {
            setError("registerRepeatPassword",{type:"manual", message:"兩密碼不相同"})
            return false;
        }
        clearErrors('registerRepeatPassword');
        return true;
    };

    const mAccount = watch("registerAccount");
    const checkAccount = async () => {
        console.log("check :" + mAccount);
        if (typeof mAccount !== 'undefined') {
            const url = "http://localhost:3001/register/account";
            try {
                const response = await axios.post(url, { mAccount });
                if (response.data.result === "mAccount exist") {
                    console.log(mAccount + " " + response.data.result);
                    setError("registerAccount", { type: "custom", message: "帳號已存在" });
                    return false;
                }
                console.log("check : Account");
                clearErrors("registerAccount");
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
        return false;
    }

    const pId = watch('registerPId');
    const checkPId = async () => {
        console.log("check :" + pId);
        if (typeof pId !== 'undefined') {
            const url = "http://localhost:3001/register/pId";
            try {
                const response = await axios.post(url, { pId });
                if (response.data.result === "pId exist") {
                    setError("registerPId", { type: "custom", message: "身分證字號已註冊" });
                    return false;
                }
                console.log("check : PId");
                clearErrors("registerPId");
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
        return false;
    }

    const email = watch('registerEmail');
    const checkEmail = async () => {
        console.log("check :" + email);
        if (typeof email !== 'undefined') {
            const url = "http://localhost:3001/register/email";
            try {
                const response = await axios.post(url, { email });
                if (response.data.result === "email exist") {
                    setError("registerEmail", { type: "custom", message: "電子郵件已註冊" });
                    return false;
                }
                console.log("check : Email");
                clearErrors("registerEmail");
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
        return false;
    }

    const phone = watch('registerPhone');
    const checkPhone = async () => {
        console.log("check :" + phone);
        if (typeof phone !== 'undefined') {
            const url = "http://localhost:3001/register/phone";
            try {
                const response = await axios.post(url, { phone });
                if (response.data.result === "phone exist") {
                    setError("registerPhone", { type: "custom", message: "門號已註冊" });
                    return false;
                }
                console.log("check : phone");
                clearErrors("registerPhone");
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
        return false;
    }

    const onSubmit = async (data) => {

        const passwordsValid = await validatePasswords();
        const accountValid = await checkAccount();
        const pIdValid = await checkPId();
        const emailValid =await checkEmail();
        const phoneValid =await checkPhone();
        console.log(passwordsValid + " " + accountValid + " " + pIdValid + " " + emailValid + " " + phoneValid)
        if (passwordsValid && accountValid && pIdValid && emailValid && phoneValid) {
            console.log("All validations passed");
            const registerInfo ={
                mAccount:  data.registerAccount,
                mPwd: data.registerPassword,
                mName: data.registerName,
                pId: data.registerPId,
                email: data.registerEmail,
                gender: data.registergroup_sex,
                address: data.registerAddress,
                phone: data.registerPhone,
                birthday: data.birthday
            }
            console.log(registerInfo);
            
            const url = "http://localhost:3001/register/check"; 
            axios.post(url, registerInfo)
            .then(
                response =>{
                    if(response.data.result === "驗證成功"){  
                        navigate('/RegisterPage/RegisterSucceedPage');
                        
                    }
                }
            )
            .catch(
                error =>{
                    console.log(error);
                    alert("伺服器崩潰，請重新整理");
                    
                }
            )
        } else {
            console.log("One or more validations failed");
            // Handle the validation failure
        }
        
        // if(validatePasswords()){
        //     console.log("pwd ok");
        // } else{
        //     console.log("pwd not ok")
        // }

        // if(checkAccount()) {
        //     console.log("Account ok");
        // }else{
        //     console.log("Account not ok");
        // }

        // if(checkPId()) {
        //     console.log("pid ok")
        // }else{
        //     console.log("pid not ok")
        // }

        // if(checkEmail()) {
        //     console.log("email ok")
        // }else{
        //     console.log("email not ok")
        // }

        // if(checkPhone()) {
        //     console.log("Phone ok")
        // }else{
        //     console.log("Phone not ok")
        // }
   
    }
    
    

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
                                <input type="account" id="registerAccount" 
                                {...register("registerAccount", {required: true, maxLength: {value: 10, message: "帳號過長"}})} />
                                {!!errors.registerAccount && <p>{errors.registerAccount.message.toString() || "請輸入帳號"}</p> }
        
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
                                        <input name="registergroup_sex" type="radio"  id="male-radio" value="M"  {...register("registergroup_sex", { required: true })} />
                                        <input name="registergroup_sex" type="radio"  id="female-radio" value="F" {...register("registergroup_sex", { required: true })} />
                                    </div>
                                    <div className="registerSexdecoration">
                                        <label htmlFor="male-radio">男性</label>
                                        <label htmlFor="female-radio">女性</label>
                                    </div>
                                </div>
                                {!!errors.registergroup_sex && <p>{errors.registergroup_sex.message.toString() || "請選擇性別"}</p> }

                                <b>電子郵件</b>
                                <input type="email" id="registerEmail" 
                                {...register("registerEmail", {
                                    required: true, 
                                    })} />
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
