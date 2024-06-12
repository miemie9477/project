import "./css/adminpage.css";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import AdminforMerchandiseForms from "./AdminforMerchandiseForms";

const AdminforMerchandise = () =>{
    const [members, setMembers] = useState([]);

    useEffect(() =>{
        const url = "http://localhost:3001/modifyAdminSide/viewMerchandise"
        axios.get(url)
        .then(
            response =>{
                if(response.data.result === "error"){
                    console.log("error")
                }
                else{
                    console.log("test:", response.data[0]);
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
    <div style={{height:"2500px"}} className="AdminBodyCssBG">
        <br />
        <div className="AdminBodyCss" >
            
            <Container>
                <Row>
                    <Col>
                        <div></div>
                        <div className="Admin_Mer_TitleText">商品資料表</div>
                        <div className='Admin_Mer_line'></div>
                        <table className="Admin_Mer_MerTable">
                            <tr>
                                <th className="Admin_Mer_MerNum">商品編號</th>
                                <th className="Admin_Mer_MerName">商品名稱</th>
                                <th className="Admin_Mer_MerBrand">品牌</th>
                                <th className="Admin_Mer_MerCategory">分類</th>
                                <th className="Admin_Mer_MerSpecification">規格</th>
                                <th className="Admin_Mer_MerUnitprice">單價</th>
                                <th className="Admin_Mer_MerIntro">商品簡介</th>
                                <th className="Admin_Mer_MerAccount">存貨數</th>
                                <th className="Admin_Mer_Modify"></th>
                                <th className="Admin_Mer_Delete"></th>

                                
                            </tr>

                            {members.map(member => (
                            <tr key={member.pNo}>
                                {/* <td className="Admin_Mer_MerNum"><textarea type="text" >{member.pNo}</textarea></td>
                                <td className="Admin_Mer_MerName"><textarea type="text" >{member.pName}</textarea></td>
                                <td className="Admin_Mer_MerBrand"><textarea type="text" >{member.brand}</textarea></td>
                                <td className="Admin_Mer_MerCategory"><textarea type="text" >{member.category}</textarea></td>
                                <td className="Admin_Mer_MerSpecification"><textarea type="text" >{member.Specification}</textarea></td>
                                <td className="Admin_Mer_MerUnitprice"><textarea type="text" >{member.unitPrice}</textarea></td>
                                <td className="Admin_Mer_MerIntro"><textarea type="text" >{member.pIntroduction}</textarea></td>
                                <td className="Admin_Mer_MerAccount"><textarea type="text" >{member.pAmount}</textarea></td>
                                <td className="Admin_Mer_Modify"><Button variant="info">修改</Button></td>
                                <td className="Admin_Mer_Delete"><Button variant="danger">刪除</Button></td>  */}
                               <AdminforMerchandiseForms member={member} />
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

export default AdminforMerchandise;