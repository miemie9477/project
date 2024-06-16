import "./css/adminpage.css";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import AdminforOrderForms from "./AdminforOrderForms";

const AdminforOrder = () =>{
    const [members, setMembers] = useState([]);
    const [transInfo, setTransInfo] = useState([]);

    useEffect(() => {
        const fetchTransInfo = async () => {
            
            const url = "http://localhost:3001/modifyAdminSide/viewTrans";
            const response = await axios.post(url);
            console.log(response.data);
            

            const updatedTransInfo = await Promise.all(response.data.map(async item => {
                const recordUrl = "http://localhost:3001/modifyMemberSide/viewRecord";
                const rId = item.rId;
                const recordResponse = await axios.post(recordUrl, { rId });
                return { ...item, ...recordResponse.data};
            }));

            setTransInfo(updatedTransInfo);
            console.log("new:", updatedTransInfo);
            //點開terminal，商品在data裡
        };

        fetchTransInfo();
        console.log("trans:", transInfo);
    }, []);

    


    return(
    <div className="AdminBodyCssBG" style={{height:"1000px"}}>
        <br />
        <div className="AdminBodyCss" >
            
            <Container>
                <Row>
                    <Col>
                        <div></div>
                        <div className="Admin_Order_TitleText">訂單資料表</div>
                        <div className='Admin_Order_line'></div>
                        <table className="Admin_Order_OrderTable">
                            <tr>
                                <th className="Admin_Order_TransNum">訂單編號</th>
                                <th className="Admin_Order_MemNum">會員編號</th>
                                <th className="Admin_Order_Receiver">收件人</th>
                                <th className="Admin_Order_Shipping">寄送方式</th>
                                <th className="Admin_Order_Address">收件地址</th>
                                <th className="Admin_Order_ShipState">訂單狀態</th>
                                <th className="Admin_Order_PayState">付款狀態</th>
                                <th className="Admin_Order_OrderTotal">訂單總金額</th>
                                <th className="Admin_Order_Modify"></th>
                                <th className="Admin_Order_Delete"></th>
                                
                            </tr>
                            {transInfo.map(info => (
                            <tr key={info.rId}>
                                <AdminforOrderForms info={info} />
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

export default AdminforOrder;