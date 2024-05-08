import "./css/OtherPage.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Frame from "../../BasicFrame/frame";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IntroductionPic from "./pic/introductionPic.jpg"

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
    return(
        <div className="registerContent">
            <Container>
                <Row>
                    <Col>
                        <img src={IntroductionPic} alt="IntroductionPic" />
                    </Col>

                    <Col>
                        <form name="" action="" method="POST">
                            <div className="registerForm">
                                <h1><b>註冊會員</b></h1>
                                &emsp;趕快加入買酒網會員，享受更多會員福利!<hr/><br/>
                                <Form.Label htmlFor="inputName"><b>真實姓名</b></Form.Label>
                                <Form.Control
                                    size={10}
                                    type="name"
                                    id="registerName"
                                />
                                
                                <Form.Label htmlFor="registAccount"><b>帳號</b></Form.Label>
                                <Form.Control
                                    size={10}
                                    type="account"
                                    id="registAccount"
                                />
                                <Form.Label htmlFor="registerPassword"><b>密碼</b></Form.Label>
                                <Form.Control
                                    size={10}
                                    type="password"
                                    id="registerPassword"
                                />
                                <Form.Label htmlFor="registerPId"><b>身分證字號</b></Form.Label>
                                <Form.Control
                                    size={10}
                                    type="text"
                                    id="registerPId"
                                />
                                <br/>
                                <div key={`default-radio`} className="mb-3">
                                    <Form.Label htmlFor="male-radio"><b>性別</b></Form.Label>
                                    <Form.Check // prettier-ignore
                                        inline
                                        name="group_sex"
                                        type="radio"
                                        id={`male-radio`}
                                        label={`男性`}
                                    />
                                    <Form.Check // prettier-ignore
                                        inline
                                        name="group_sex"
                                        type="radio"
                                        id={`female-radio`}
                                        label={`女性`}
                                    />
                                    <Form.Check // prettier-ignore
                                        inline
                                        name="group_sex"
                                        type="radio"
                                        id={`otherSex-radio`}
                                        label={`其他`}
                                    />
                                </div>
                                <Form.Label htmlFor="registerEmail"><b>電子郵件</b></Form.Label>
                                <Form.Control
                                    size={10}
                                    type="text"
                                    id="registerEmail"
                                />
                                <Form.Label htmlFor="registerAddress"><b>聯絡住址</b></Form.Label>
                                <Form.Control
                                    size={10}
                                    type="text"
                                    id="registerAddress"
                                />
                                <Form.Label htmlFor="registerPhone"><b>手機電話</b></Form.Label>
                                <Form.Control
                                    size={10}
                                    type="text"
                                    id="registerPhone"
                                /><br/>
                                <Form.Label htmlFor="birthday"><b>生日</b></Form.Label>
                                <input type="date" name="birthday" id="birthday"/><br/><br/>
                                <Button variant="danger" name="registerBtn">註冊會員</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}

export default RegisterPage;