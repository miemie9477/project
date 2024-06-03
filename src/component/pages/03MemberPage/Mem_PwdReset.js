import "./css/memberpage.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const Mem_PWreset = () =>{

    const navigate = useNavigate();

    const { register, handleSubmit, watch, setError, clearErrors, formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });
    const [passwordtext, repeatpasswordtext] = watch(["Member_NewPassword","Member_RepeatNewPassword"])
    // useEffect(() => {
    //     if(!!passwordtext && !!repeatpasswordtext && (passwordtext !== repeatpasswordtext)){
    //         setError("Member_RepeatNewPassword",{type:"manual", message:"兩密碼不相同"}, { shouldFocus: true })
    //     }

    // },[passwordtext,repeatpasswordtext])

    const validatePasswords = () => {
        if (!!passwordtext && !!repeatpasswordtext && (passwordtext !== repeatpasswordtext)) {
            setError("Member_RepeatNewPassword",{type:"manual", message:"兩密碼不相同"}, { shouldFocus: true })
            return false;
        }
        clearErrors('Member_RepeatNewPassword');
        return true;
      };

    const onSubmit = (data) => {
        if(validatePasswords())
        {
            // 这里可以添加你希望在表单验证成功后执行的代码
            console.log("驗證成功",data);
        }
        else console.log("驗證失敗");
        
        
    }
    console.log(errors);

    return(
        <div className="MemberBodyCss"  style={{height:"600px"}}>
            <Container>
                <Col>
                    <Row>
                        <form name="MemberPasswordResetForm" onSubmit={handleSubmit(onSubmit)}>
                            <div className="Member_FormBG">
                                <div style={{width: "95%", margin : "auto"}}>
                                    <div className="Member_TitleText">會員密碼修改</div>
                                    <div className='Member_line'></div>
                                    <b>新密碼</b>
                                    <input type="password" id="Member_NewPassword"
                                    {...register("Member_NewPassword", {required: true, })} />
                                    {!!errors.Member_NewPassword && <p>{errors.Member_NewPassword.message.toString() || "請輸入密碼"}</p> }

                                    <b>確認新密碼</b>
                                    <input type="password" id="Member_RepeatNewPassword"
                                    {...register("Member_RepeatNewPassword", {required: true, })} />
                                    {!!errors.Member_RepeatNewPassword && <p>{errors.Member_RepeatNewPassword.message.toString() || "請輸入密碼"}</p> }

                                    
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

export default Mem_PWreset;