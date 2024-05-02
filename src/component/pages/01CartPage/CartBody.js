import "./css/CartPage.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import tanqueray from './pic/Tanqueray  Gin.png';
import { HiPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";
import { NavLink } from "react-bootstrap";


const CartBody = () =>{

    function handleClick(){

    }

    return(
        <div className="CartBodyCss">
            <Container>
                <Row>
                    <Col sm={8}>
                        <Row>
                            <div className="TotalGoodCss">
                                <input type="checkbox" name="cartCheckAll" className="CartCheckCss" value={1}/><div className="TotalGoodText">所有商品(1)<hr/></div>
                                
                            </div>
                        </Row>
                        <Row>
                            <Item/>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <OrderSummary/>
                    </Col>
                </Row>

            </Container>
            

        </div>
    );
}
const Item = () =>{
    return(
        <div className="CartItem">
            <div style={{display:"flex"}}>
                <input type="checkbox" name="CartItem" className="CartCheckCss" value={1}/>
                <img src={tanqueray} alt=""></img>
                <div style={{display:"inline"}}>
                    <NavLink to="#"><div style={{fontSize:"18px"}}><b>坦奎瑞琴酒</b><br/></div></NavLink>
                    <div style={{fontSize:"14px"}}>
                        <br/>品牌|  Tanqueray 坦奎瑞
                        <br/>規格|  750ml
                    </div>
                </div>
            </div>
            <div className="CartAmountControl">
                <Button variant="link" style={{color:"black"}} className="trash"><CiTrash size={20}/></Button>
                <Button variant="secondary" name="minusBtn" className="minus"><HiMinus size={14} color="black"/></Button>
                <Button variant="outline-secondary" name="amount" disabled style={{color:"black", paddingLeft:"16px",paddingRight:"16px"}}>1</Button>
                <Button variant="secondary" name="plusBtn" className="plus"><HiPlus size={14} color="black"/></Button>

            </div>
        </div>
    );
}

const OrderSummary = () =>{
    return(
        <div className="OrderSummary">
            <div style={{fontSize:"20px",fontWeight:"bold"}}>訂單總結<hr/></div>
            <div style={{position:"relative", fontSize:"20px", display:"flex", justifyContent:"right"}}>NT. 680</div>
            <Button variant="danger">點我結帳(1)</Button>
        </div>
    );
}

export default CartBody;