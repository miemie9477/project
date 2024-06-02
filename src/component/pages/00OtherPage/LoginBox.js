import "./css/OtherPage.css";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";


const LoginBox = () =>{

    const navigate = useNavigate();

    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    

    const onSubmit = (data) => {
        
        console.log(data);

        const url = 'http://localhost:3001/login/verify';
        const info = {
            mAccount : data.inputAccount,
            mPwd: data.inputPassword
        }

        axios.post(url, info)
        .then(
            response=>{           
                if(response.data.length > 0){
                    if(info.mAccount === "admin" && info.mPwd === "admin123456"){
                        alert('管理員登入');
                        navigate('/');
                    }
                    else {
                        console.log(response.data);
                        console.log("驗證成功");
                        navigate('/');
                    }
                }
                else if(response.data.result === "Login failed"){
                    setError("inputPassword",{type:"custom", message:"帳號或密碼錯誤"})
                    // alert("登入失敗");
                }
            }
        ).catch(
            error =>{
                console.log(error);
                alert("伺服器崩潰，等待回應");
                throw error;
            }
        )
        
    }

    return(
        <div className="loginBoxCss">
            <div className="loginContent">
                <div style={{fontSize:"18px", margin:"40px"}}>用戶登入<br/></div>
                <form name="login" onSubmit={handleSubmit(onSubmit)}>
                    <div className="loginForm">
                        <b>帳號</b> 
                        <input type="account" id="inputAccount" 
                        {...register("inputAccount", {required: true, maxLength: {value: 10, message: "帳號過長"}})} />
                        {!!errors.inputAccount && <p>{errors.inputAccount.message.toString() || "請輸入帳號"}</p> }

                        <b>密碼</b>
                        <input type="password" id="inputPassword" 
                        {...register("inputPassword", {required: true})} />
                        {!!errors.inputPassword && <p>{errors.inputPassword.message.toString() || "請輸入密碼"}</p> }
                        
                        <Button variant="danger"  type="submit"  >登入</Button>
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