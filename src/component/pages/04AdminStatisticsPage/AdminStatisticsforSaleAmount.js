import "./css/adminstatisticspage.css";
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const AdminStatisticsforSaleAmount = ({info}) =>{
    

    const onSubmit = (data) => { 
        // const rId = data.Admin_Statis_SaleAmountMerName;
        // const mId = data.Admin_Statis_SaleAmountAmount;
        // const recipient = data.Admin_Order_Receiver;
        // const tDelivery = data.Admin_Order_Shipping;
        // const tAddress = data.Admin_Order_Address;
        // const tState = data.Admin_Order_ShipState;
        // const payState = data.Admin_Order_PayState;
        // const total = data.Admin_Order_OrderTotal;
        // const url = "http://localhost:3001/modifyAdminSide/modifyTrans";
        // axios.post(url, {rId, mId, recipient, tDelivery, tAddress, tState, payState, total})
        // .then(
        //     response =>{
        //         if(response.data.result === "success"){
        //             console.log(response.data);
        //             alert(`系統訊息:已修改交易資料 ${rId}`);
        //         }
        //     }
        // )
        console.log("驗證成功",data);
        
        
    }

    return(
        <td colSpan={2} className="Admin_Statis_SaleAmountFormTD">
            <td className="Admin_Statis_SaleAmountMerName">
                <textarea name="Admin_Statis_SaleAmountMerName" id="Admin_Statis_SaleAmountMerName" >{info.pName}</textarea>
            </td>
            <td className="Admin_Statis_SaleAmountAmount">
                <textarea name="Admin_Statis_SaleAmountAmount" id="Admin_Statis_SaleAmountAmount">{info.total_sold}</textarea>
            </td>
        </td>
    );
}

export default AdminStatisticsforSaleAmount;