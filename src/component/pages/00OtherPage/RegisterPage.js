import "./css/OtherPage.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Frame from "../../BasicFrame/frame";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RegisterPage = () =>{
    return(
        <div style={{position:"relative"}}>
            <Frame/>
            <RegisterForm/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            姓名
            帳號
            密碼
            身份證字號
            Email
            性別
            連絡住址
            手機號碼
            生日
            推薦人
            
        </div>
    );
}

const RegisterForm = () =>{
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                    </Col>

                    <Col>
                        <form name="" action="" method="POST">
                        <div className="">
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
                            />
                        </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Button variant="danger">登入</Button>
        </div>
    );
}

export default RegisterPage;