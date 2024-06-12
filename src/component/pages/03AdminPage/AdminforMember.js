import "./css/adminpage.css";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import AdminforMemberForms from "./AdminforMemberForms";

const AdminforMember = () =>{
    const [members, setMembers] = useState([]);

    useEffect(() =>{
        const url = "http://localhost:3001/modifyAdminSide/viewMember"
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
    <div style={{height:"800px"}} className="AdminBodyCssBG">
        <br />
        <div className="AdminBodyCss" >
            
            <Container>
                <Row>
                    <Col>
                        <div></div>
                        <div className="Admin_Mem_TitleText">會員資料表</div>
                        <div className='Admin_Mem_line'></div>
                        <table className="Admin_Mem_MemTable">
                            <tr>
                                <th className="Admin_Mem_MemNum">會員編號</th>
                                <th className="Admin_Mem_MemName">姓名</th>
                                <th className="Admin_Mem_MemID">身分證字號</th>
                                <th className="Admin_Mem_MemEmail">Email</th>
                                <th className="Admin_Mem_MemSex">性別</th>
                                <th className="Admin_Mem_MemPhone">手機號碼</th>
                                <th className="Admin_Mem_MemBirth">生日</th>
                                <th className="Admin_Mem_MemAccount">帳號</th>
                                <th className="Admin_Mem_MemPwd">密碼</th>
                                <th className="Admin_Mem_Modify"></th>
                                <th className="Admin_Mem_Delete"></th>
                                
                            </tr>
                            {/* <tr>
                                <td>a0000001</td>
                                <td>Member01</td>
                                <td>B000000000</td>
                                <td>member@gmail.com</td>
                                <td>F</td>
                                <td>localhost3000</td>
                                <td>0900000000</td>
                                <td>2024-05-25</td>
                                <td>member</td>
                                <td>member123456</td>
                            </tr> */}
                            {members.map(member => (
                            <tr key={member.mId}>
                                {/* <td className="Admin_Mem_MemNum"><textarea type="text" >{member.mId}</textarea></td>
                                <td className="Admin_Mem_MemName"><textarea type="text" >{member.mName}</textarea></td>
                                <td className="Admin_Mem_MemID"><textarea type="text" >{member.pId}</textarea></td>
                                <td className="Admin_Mem_MemEmail"><textarea type="text" >{member.email}</textarea></td>
                                <td className="Admin_Mem_MemSex"><textarea type="text" >{member.gender}</textarea></td>
                                <td className="Admin_Mem_MemPhone"><textarea type="text" >{member.phone}</textarea></td>
                                <td className="Admin_Mem_MemBirth"><textarea type="text" >{member.birthday.split('T')[0]}</textarea></td>
                                <td className="Admin_Mem_MemAccount"><textarea type="text" >{member.mAccount}</textarea></td>
                                <td className="Admin_Mem_MemPwd"><textarea type="text" >{member.mPwd}</textarea></td>
                                <td className="Admin_Mem_Modify"><Button variant="info">修改</Button></td>
                                <td className="Admin_Mem_Delete"><Button variant="danger">刪除</Button></td> */}
                                <AdminforMemberForms member={member} />
                            </tr>
                            ))}
                        </table>
                    </Col>
                </Row>
            </Container>
            
        </div>
    </div>
        
    );
}

export default AdminforMember;