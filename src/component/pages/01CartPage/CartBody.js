import "./css/CartPage.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { HiPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { AccountContext} from "../../../ContextAPI";
import { OrdertotalContext } from "../../../ContextAPI";
import axios from "axios";


var tId;

const CartBody = () =>{
    var [productID, setProductID] = useState("a10010");
    var productPath = "./pic/"+productID+".png"

    const { userAccount, setUserAccount} = useContext(AccountContext);
    const [cartdatas, setCartdatas] = useState([]);
    var [dataLength, setDataLength] = useState(1);
    
    function handleClick(){

    }

    useEffect(() =>{
        axios.post("http://localhost:3001/cart/checkExist", {userAccount})
        .then(
            response =>{
                tId = response.data.tId;
                console.log("tId", tId);
            }
        )
        
        const url = `http://localhost:3001/cart/getItem/${userAccount}`
        axios.get(url)
        .then(
            response =>{
                if(response.result === "null"){
                    alert("您尚未新增物品至購物車");
                }
                else{
                    console.log(response.data.data)
                    setCartdatas(response.data.data)
                    setDataLength(response.data.data.length);
                }
            }
        )
        .catch(
            (error) =>{
                console.log(error);
            }
        )
    }, [])
    
    var [totalprice, setTotalprice] = useState(0);
    const updateTotalPrice = (delta) => {
        setTotalprice(prevTotalprice => prevTotalprice + delta);
    };

    const {userOrdertotal, setUserOrdertotal} = useContext(OrdertotalContext);
    
    return(
        <div className="CartBodyCss">
            <Container>
                <Row>
                    <Col sm={8}>
                        <Row>
                            <div className="TotalGoodCss">
                                <input type="checkbox" name="cartCheckAll" className="CartCheckCss"/>
                                <div className="TotalGoodText">所有商品({dataLength})<hr/></div>
                                
                            </div>
                        </Row>
                        
                        {/* {cartdatas.map} */}
                        {cartdatas.map(cartdata => (
                            <Row key={cartdata.UUID} >
                                <Item cartdata={cartdata} updateTotalPrice={updateTotalPrice}/>
                                
                            </Row>
                        ))}
                            
                        {/* <Item/> */}
                    </Col>
                    <Col sm={4}>
                        <OrderSummary dataLength = {dataLength} totalprice={totalprice} setUserOrdertotal={setUserOrdertotal}/>
                    </Col>
                </Row>

            </Container>
            
           

        </div>
    );
}

const Item = ({cartdata, updateTotalPrice}) =>{
    var productID = cartdata.pNo
    var productPath = require(`./pic/${productID}.png`);

    const [Cart_num, setCart_num] = useState(1);
    const Cart_Minus = () =>{
        if(Cart_num>1) 
        {
            setCart_num(Cart_num - 1)
            updateTotalPrice(-cartdata.unitPrice)
            const pName = cartdata.pName;
            const amount = Cart_num
            console.log("pName:", pName)
            console.log("amount:", amount)
            console.log("tId:", tId);

        }
        else setCart_num(1)
    }

    const Cart_Add = () =>{
        setCart_num(Cart_num + 1)
        updateTotalPrice(cartdata.unitPrice)

    }

    useEffect(() => {
        setCart_num(cartdata.amount)
        updateTotalPrice(cartdata.salePrice/2);
        
    }, []);

    const [Cart_winetype, setCart_winetype] = useState('#');
    useEffect(() => {
        if(cartdata.pNo[0] === 'a') setCart_winetype("/GinPage/")
        else if(cartdata.pNo[0] === 'c') setCart_winetype("/BrandyPage/")
        else if(cartdata.pNo[0] === 'b') setCart_winetype("/VodkaPage/")
        else if(cartdata.pNo[0] === 'd') setCart_winetype("/RumPage/")
        else if(cartdata.pNo[0] === 'e') setCart_winetype("/WhiskeyPage/")
        else if(cartdata.pNo[0] === 'f') setCart_winetype("/TequilaPage/")
        else if(cartdata.pNo[0] === 'g') setCart_winetype("/LiqueurPage/")
        else if(cartdata.pNo[0] === 'h') setCart_winetype("/SoftDrinksPage/")
    
    }, []);


    return(
        <div className="CartItem">
            <div style={{display:"flex"}}>
                <input type="checkbox" name="CartItem" className="CartCheckCss"/>
                <NavLink to={Cart_winetype+cartdata.pNo}><img src={productPath} alt=""></img></NavLink>
                <div style={{display:"inline"}}>
                    <NavLink to={Cart_winetype+cartdata.pNo}><div style={{fontSize:"18px"}}><b>{cartdata.pName}</b><br/></div></NavLink>
                    <div style={{fontSize:"14px"}}>
                        <br/>品牌　|　{cartdata.brand}
                        <br/>規格　|　{cartdata.specification}
                    </div>
                </div>
            </div>
            <div className="CartAmountControl">
                <Button variant="link" style={{color:"black"}} className="trash" ><CiTrash size={20}/></Button>
                <Button variant="secondary" name="minusBtn" className="minus" onClick={Cart_Minus}><HiMinus size={14} color="black"/></Button>
                <Button variant="outline-secondary" name="amount" disabled style={{color:"black", paddingLeft:"16px",paddingRight:"16px"}}>{Cart_num}</Button>
                <Button variant="secondary" name="plusBtn" className="plus" onClick={Cart_Add}><HiPlus size={14} color="black"/></Button>
                <div className="CartAmountControl_subtotal">小計 ${cartdata.unitPrice*Cart_num}</div>
            </div>
            
        </div>
    );
}

const OrderSummary = ({dataLength, totalprice, setUserOrdertotal}) =>{
    const Cart_ToCheck = () =>{
        setUserOrdertotal(totalprice)
    }

    return(
        <div className="OrderSummary">
            <div style={{fontSize:"20px",fontWeight:"bold"}}>訂單總結<hr/></div>
            <div style={{position:"relative", fontSize:"20px", display:"flex", justifyContent:"right"}}>NT. {totalprice}</div>
            <NavLink to="/CartPage/CheckPage"><Button variant="danger" onClick={Cart_ToCheck}>點我結帳({dataLength})</Button></NavLink>
        </div>
    );
}

export default CartBody;