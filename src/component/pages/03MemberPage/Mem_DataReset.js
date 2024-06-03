import "./css/memberpage.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useContext } from 'react';
import { AccountContext} from "../../../ContextAPI";
import axios from "axios";

const Mem_DataReset = () =>{

    const navigate = useNavigate();
    const { userAccount, setUserAccount} = useContext(AccountContext);
    
    var info ={
        mAccount:  "",
        mPwd: "",
        mName: "",
        pId: "",
        email: "",
        gender: "",
        address: "",
        phone: "",
        birthday: "" 
    };

    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });
    
    useEffect(() =>{
        console.log("get:" + userAccount);
        const url = `http://localhost:3001/modifyMemberSide/getData/${userAccount}`
        axios.get(url)
        .then(
            response =>{
                console.log(response.data);
                info ={
                    mPwd: response.data.mPwd,
                    mName: response.data.mName,
                    pId: response.data.pId,
                    email: response.data.email,
                    gender: response.data.gender,
                    address: response.data.address,
                    phone: response.data.phone,
                    birthday: response.data.birthday
                };
                console.log(
                            info.mPwd + " " +
                            info.mName + " " +
                            info.pId + " " +
                            info.email + " " +
                            info.gender + " " +
                            info.address + " " +
                            info.phone + " " +
                            info.birthday + " "
                )
            }
        )
    }, [])

    const onSubmit = (data) => {
        console.log("驗證成功",data);
        // 这里可以添加你希望在表单验证成功后执行的代码
        
    }
    console.log(errors);

    return(
        <div className="MemberBodyCss" style={{height:"auto"}}>
            <Container>
                <Col>
                    <Row>
                        <form name="MemberDataResetForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="Member_FormBG">
                                <div style={{width: "95%", margin : "auto"}}>
                                    <div className="Member_TitleText">會員基本資料修改</div>
                                    <div className='Member_line'></div>
                                    <b>姓名</b>
                                    <input type="text" name="Member_Name" id="Member_Name" defaultValue={info.mName}
                                    {...register("Member_Name", {required: true})} />
                                    {!!errors.Member_Name && <p>{errors.Member_Name.message.toString() || "請輸入姓名"}</p> }

                                    
                                    <b>性別</b>
                                    <div key={`default-radio`} className="Member_Sex">
                                        <div className="Member_Sexdecoration">
                                            <input name="Member_group_sex[]" type="radio"  id="male-radio" value="男性"  {...register("Member_group_sex", { required: true })} checked={info.sex === 'm'}/>
                                            <input name="Member_group_sex[]" type="radio"  id="female-radio" value="女性" {...register("Member_group_sex", { required: true })} checked={info.sex === 'f'}/>
                                        </div>
                                        <div className="Member_Sexdecoration">
                                            <label htmlFor="male-radio">男性</label>
                                            <label htmlFor="female-radio">女性</label>
                                        </div>
                                    </div>
                                    {!!errors.Member_group_sex && <p>{errors.Member_group_sex.message.toString() || "請選擇性別"}</p> }

                                    <b>身分證字號</b>
                                    <input type="text" name="Member_ID" id="Member_ID" defaultValue={info.pId}
                                    {...register("Member_ID", {required: true})} />
                                    {!!errors.Member_ID && <p>{errors.Member_ID.message.toString() || "請輸入身分證字號"}</p> }

                                    <b>電子郵件</b>
                                    <input type="email" name="Member_Email" id="Member_Email" defaultValue={info.email}
                                    {...register("Member_Email", {required: true})} />
                                    {!!errors.Member_Email && <p>{errors.Member_Email.message.toString() || "請輸入電子郵件"}</p> }
                                    
                                    <b>聯絡住址</b>
                                    <input type="address" name="Member_Address" id="Member_Address" defaultValue={info.address}
                                    {...register("Member_Address", {required: true, })} />
                                    {!!errors.Member_Address && <p>{errors.Member_Address.message.toString() || "請輸入聯絡住址"}</p> }

                                    <b>手機號碼</b>
                                    <input type="phone" name="Member_Phone" id="Member_Phone" defaultValue={info.phone}
                                    {...register("Member_Phone", {required: true, maxLength: {value: 10, message: "手機號碼過長"}, minLength: {value: 10, message: "手機號碼過短"}})} />
                                    {!!errors.Member_Phone && <p>{errors.Member_Phone.message.toString() || "請輸入手機號碼"}</p> }

                                    
                                </div>
                                <Button type="submit" variant="info" className="Member_ConfirmChange">確認修改</Button>
                            </div>
                        </form>
                    </Row>
                </Col>
            </Container>
            

        </div>
    );
}

export default Mem_DataReset;