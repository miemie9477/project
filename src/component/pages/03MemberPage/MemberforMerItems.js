import "./css/memberpage.css"
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const MemberforMerItems = ({iteminfo}) =>{
    var productID = iteminfo.pNo
    var productPath = require(`./pic/${productID}.png`);

    const [Member_winetype, setMember_winetype] = useState('#');
    useEffect(() => {
        if(iteminfo.pNo[0] === 'a') setMember_winetype("/GinPage/")
        else if(iteminfo.pNo[0] === 'c') setMember_winetype("/BrandyPage/")
        else if(iteminfo.pNo[0] === 'b') setMember_winetype("/VodkaPage/")
        else if(iteminfo.pNo[0] === 'd') setMember_winetype("/RumPage/")
        else if(iteminfo.pNo[0] === 'e') setMember_winetype("/WhiskeyPage/")
        else if(iteminfo.pNo[0] === 'f') setMember_winetype("/TequilaPage/")
        else if(iteminfo.pNo[0] === 'g') setMember_winetype("/LiqueurPage/")
        else if(iteminfo.pNo[0] === 'h') setMember_winetype("/SoftDrinksPage/")
    
    }, []);


    return(
       <>
            <div style={{display:"flex"}}>
                
                <NavLink to={Member_winetype + productID}><img src={productPath} alt=""></img></NavLink>
                <div style={{display:"inline"}}>
                    <NavLink to={Member_winetype + productID}><div style={{fontSize:"18px"}}><b>{iteminfo.pName}</b><br/></div></NavLink>
                    <div style={{fontSize:"14px"}}>
                        
                        <br/>　數量　|　{iteminfo.amount}
                        <br/>　小計　|　${iteminfo.rTotal}
                    </div>  
                </div>
            </div>
            <div className="CartAmountControl">
                

            </div> 
       </>
    );
}

export default MemberforMerItems;