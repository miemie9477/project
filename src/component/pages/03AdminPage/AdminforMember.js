import "./css/adminpage.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import axios from "axios";


const AdminforMember = () =>{
    const [members, setMembers] = useState([]);

    useEffect(() =>{
        const url = "http://localhost:3001/modifyAdminSide/view"
        axios.get(url)
        .then(
            response =>{
                if(response.data.result === "Found no data"){
                    console.log("no data")
                }
                else{
                    console.log(response.data);
                    setMembers(response.data);
                }
            }
        )
        .catch(
            error =>{
                console.log(error)
            }
        )
    }, [])


    return(
        <div className="AdminBodyCss" style={{height:"auto"}}>
            
            <Container className="table">
                <Row>
                    <Col>會員編號</Col>
                    <Col>姓名</Col>
                    <Col>身分證字號</Col>
                    <Col>Email</Col>
                    <Col>性別</Col>
                    <Col>連絡住址</Col>
                    <Col>手機號碼</Col>
                    <Col>生日</Col>
                    <Col>帳號</Col>
                    <Col>密碼</Col>
                </Row>
                {/* <Row>
                    <Col>a0000001</Col>
                    <Col>Member01</Col>
                    <Col>B000000000</Col>
                    <Col>member@gmail.com</Col>
                    <Col>F</Col>
                    <Col>localhost3000</Col>
                    <Col>0900000000</Col>
                    <Col>2024-05-25</Col>
                    <Col>member</Col>
                    <Col>member123456</Col>
                </Row> */}
                {members.map(member => (
                <Row key={member.mId}>
                    <Col>{member.mId}</Col>
                    <Col>{member.mName}</Col>
                    <Col>{member.pId}</Col>
                    <Col>{member.email}</Col>
                    <Col>{member.gender}</Col>
                    <Col>{member.address}</Col>
                    <Col>{member.phone}</Col>
                    <Col>{member.birthday.split('T')[0]}</Col>
                    <Col>{member.mAccount}</Col>
                    <Col>{member.mPwd}</Col>
                </Row>
                ))}
            </Container>
        </div>
    );
}

export default AdminforMember;