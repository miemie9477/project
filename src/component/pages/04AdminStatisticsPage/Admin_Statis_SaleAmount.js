import "./css/adminstatisticspage.css";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import AdminStatisticsforSaleAmount from "./AdminStatisticsforSaleAmount";

const Admin_Statis_SaleAmount = () =>{
    const [members, setMembers] = useState([]);
    const [transInfo, setTransInfo] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3001/modifyAdminSide/saleAmountChart";
        axios.post(url)
        .then(
            response =>{
                console.log(response.data.data);
                setTransInfo(response.data.data)
            }
        )
        .catch(
            error  =>{
                console.log(error);
            }
        )

    }, []);

    


    return(
    <div className="AdminStatisticsBodyCssBG" style={{height:"1000px"}}>
        <br />
        <div className="AdminStatisticsBodyCss" >
            
            <Container>
                <Row>
                    <Col>
                        <div></div>
                        <div className="Admin_Statis_SaleAmountTitleText">銷售量報表</div>
                        <div className='Admin_Statis_SaleAmountline'></div>
                        <table className="Admin_Statis_SaleAmountTable">
                            <tr>
                                <th className="Admin_Statis_SaleAmountMerName">商品名稱</th>
                                <th className="Admin_Statis_SaleAmountAmount">銷售數量</th>
                                
                            </tr>
                            {transInfo.map(info => (
                            <tr key={info.rId}>
                                <AdminStatisticsforSaleAmount info={info} />
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

export default Admin_Statis_SaleAmount;