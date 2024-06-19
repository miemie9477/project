import "./css/adminstatisticspage.css";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import AdminStatisticsforTotalSales from "./AdminStatisticsforTotalSales"

const Admin_Statis_TotalSales = () =>{
    const [members, setMembers] = useState([]);
    const [transInfo, setTransInfo] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3001/modifyAdminSide/saleTotalChart";
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
                        <div className="Admin_Statis_TotalSalesTitleText">商品銷售額報表</div>
                        <div className='Admin_Statis_TotalSalesline'></div>
                        <table className="Admin_Statis_TotalSalesTable">
                            <tr>
                                <th className="Admin_Statis_TotalSalesMerName">商品名稱</th>
                                <th className="Admin_Statis_TotalSalesAmount">銷售總金額</th>
                                
                            </tr>
                            {transInfo.map(info => (
                            <tr key={info.rId}>
                                <AdminStatisticsforTotalSales info={info} />
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

export default Admin_Statis_TotalSales;