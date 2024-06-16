import { useEffect, useState } from "react";
import { useContext } from 'react';
import { LoginContext } from "../../../../ContextAPI";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { AccountContext } from "../../../../ContextAPI";
import "./css/Details.css"
import a10010 from './pic/a10010.png'



const Details = ({pNo,Alcohol}) => {
    
    const { login, setLogin } = useContext(LoginContext);
    const { userAccount, setUserAccount} = useContext(AccountContext);
    const navigate = useNavigate();
    var [productInfo, setProductInfo]= useState({
        pNo:"",
        pName:"",
        specification:"",
        brand: "",
        category:"",
        unitPrice:"",
        pIntroduction:"",
        pAmount:""
    });

    useEffect(() =>{
        
        const url = `http://localhost:3001/pDetail/getDetail/${pNo}`
        axios.get(url)
        .then(
            response =>{
                if(response.data.length > 0){
                    setProductInfo({
                        pNo:response.data[0].pNo,
                        pName:response.data[0].pName,
                        specification:response.data[0].specification,
                        brand: response.data[0].brand,
                        category:response.data[0].category,
                        unitPrice:response.data[0].unitPrice,
                        pIntroduction:response.data[0].pIntroduction,
                        pAmount:response.data[0].pAmount
                    })
                }
                
            }
        ).catch(
            error =>{
                console.log(error);
            }
        )
    }, [])
    
    useEffect(() =>{
        console.log(productInfo);
    },[productInfo]);

    const [Mer_num, setMer_num] = useState(1);
    const Mer_Minus = () =>{
        if(Mer_num > 1) setMer_num(Mer_num - 1)
        else setMer_num(1)
    }

    const Mer_Add = () =>{
        setMer_num(Mer_num + 1)
    }
    
    
    const LoginIdentity1 = async () =>
    {
        if(login === 0) {
            alert("請先登入");
            navigate('/LoginPage');
        }
        else if(login === 1) {
            console.log("userAccount:"+ userAccount)
            
            const url = "http://localhost:3001/cart/checkExist"
            axios.post(url, {userAccount})
            .then(
                response =>{
                    console.log("data:", response.data.tId);
                    
                    if(response.data.result === "ready"){
                        console.log(response.data.tId);
                        var tId = response.data.tId;
                        console.log("tId:", tId);
                        AddCart(tId);
                    }
                    else{
                        console.log("錯誤");
                    }
                }
            ).catch(
                error =>{
                    console.log(error);
                }
            )
        }
        else if(login === 2) {
            alert("若欲下單，請使用一般會員帳號登入")
        }
    }

    
    const AddCart = async (tId) =>{
        const url = "http://localhost:3001/cart/add"
        
        const reqInfo={
            tId: tId,
            pNo: productInfo.pNo,
            amount: Mer_num,
            salePrice: parseInt(productInfo.unitPrice, 10) * Mer_num
        }
            console.log(reqInfo)
            if(reqInfo.amount > productInfo.pAmount){
                alert(`已超出庫存數量。目前庫存數: ${productInfo.pAmount}`);
            }
            else if(reqInfo.amount === 0){
                alert("請新增要加入購物車的數量");
            }
            else{ 
                console.log("Adding");
                await axios.post(url, reqInfo)
                .then(
                    response =>{
                        if(response.data.result === "Add"){
                            console.log(response.data);
                            alert("已新增至購物車");
                        }else{
                            console.log(response.data);
                            alert("Error");
                        }
                    }
                )
                .catch(
                    error =>{
                        console.log(error)
                    }
                )
            }
        }

    var productPath = require(`./pic/${pNo}.png`);
    
    return(
        <div className="Mer_background">
            <br/><br/><br/>
            <div className="Mer_wine_background">
                <br/>
                <div className="Mer_winebox">
                    <div className="Mer_wine"><img src={productPath} alt="" /></div>
                    <div className="Mer_winedetails">
                        <div className="Mer_details_1">{productInfo.pName}</div>
                        <div className="Mer_details_2">$ {productInfo.unitPrice}</div>
                        <div className="Mer_details_3">數量</div>
                        <div className="Mer_details_4">
                            <div className="Mer_dtl4_counter">
                                <div className="Mer_dtl4_ctr_minus"><button onClick={Mer_Minus}>-</button></div>
                                <div className="Mer_dtl4_ctr_num">{Mer_num}</div>
                                <div className="Mer_dtl4_ctr_add"><button onClick={Mer_Add}>+</button ></div>
                            </div>
                            <div className="Mer_dtl4_addtocart"><button onClick={LoginIdentity1}>加入購物車</button></div>
                        </div>
                        <br/>
                        <div className="Mer_details_5">品牌　　　|　{productInfo.brand}</div>
                        <div className="Mer_details_6">類型　　　|　{productInfo.category}</div>
                        <div className="Mer_details_7">酒精度數　|　{Alcohol}%</div>
                        <div className="Mer_details_8">規格　　　|　{productInfo.specification}</div>
                    </div>
                </div>
                <div className="Mer_Introduction">
                    <div className="Mer_Intro_title">商品簡介</div>
                    <div className="Mer_Intro_depiction">{productInfo.pIntroduction}</div>
                </div>
            </div>
           
        </div>
    );
}
  

export default Details