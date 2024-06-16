import "./css/adminpage.css";
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const AdminforOrderForms = ({info}) =>{
    const { register, handleSubmit, watch, setError, getValues, formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });
    

    const onSubmit = (data) => { 
        const rId = data.Admin_Order_TransNum;
        const mId = data.Admin_Order_MemNum;
        const recipient = data.Admin_Order_Receiver;
        const tDelivery = data.Admin_Order_Shipping;
        const tAddress = data.Admin_Order_Address;
        const tState = data.Admin_Order_ShipState;
        const payState = data.Admin_Order_PayState;
        const total = data.Admin_Order_OrderTotal;
        const url = "http://localhost:3001/modifyAdminSide/modifyTrans";
        axios.post(url, {rId, mId, recipient, tDelivery, tAddress, tState, payState, total})
        .then(
            response =>{
                if(response.data.result === "success"){
                    console.log(response.data);
                    alert(`系統訊息:已修改交易資料 ${rId}`);
                }
            }
        )
        console.log("驗證成功",data);
        
        
    }
    const deleteTrans = () =>{ 
        const values = getValues();
        const rId = values.Admin_Order_TransNum;
        console.log(rId);
        const url = "http://localhost:3001/modifyAdminSide/deleteTrans";
        axios.post(url, {rId})
        .then(
            response =>{
                if(response.data.result === "success"){
                    console.log(response.data);
                    alert("系統訊息:已刪除交易資料");
                    
                }
            }
        )
    }

    return(
        <td colSpan={11} className="Admin_Order_FormTD">
        <form name="AdminforOrderForm" onSubmit={handleSubmit(onSubmit)}>
            <td className="Admin_Order_TransNum">
                <textarea name="Admin_Order_TransNum" id="Admin_Order_TransNum" {...register("Admin_Order_TransNum", {required: true})}>{info.rId}</textarea>
            </td>
            <td className="Admin_Order_MemNum">
                <textarea name="Admin_Order_MemNum" id="Admin_Order_MemNum" {...register("Admin_Order_MemNum", {required: true})}>{info.mId}</textarea>
            </td>
            <td className="Admin_Order_Receiver">
                <textarea name="Admin_Order_Receiver" id="Admin_Order_Receiver" {...register("Admin_Order_Receiver", {required: true})}>{info.recipient}</textarea>
            </td>
            <td className="Admin_Order_Shipping">
                <textarea name="Admin_Order_Shipping" id="Admin_Order_Shipping" {...register("Admin_Order_Shipping", {required: true})}>{info.tDelivery}</textarea>
            </td>
            <td className="Admin_Order_Address">
                <textarea name="Admin_Order_Address" id="Admin_Order_Address" {...register("Admin_Order_Address", {required: true})}>{info.tAddress}</textarea>
            </td>
            <td className="Admin_Order_ShipState">
                <textarea name="Admin_Order_ShipState" id="Admin_Order_ShipState" {...register("Admin_Order_ShipState", {required: true})}>{info.tState}</textarea>
            </td>
            <td className="Admin_Order_PayState">
                <textarea name="Admin_Order_PayState" id="Admin_Order_PayState" {...register("Admin_Order_PayState", {required: true})}>{info.payState}</textarea>
            </td>
            <td className="Admin_Order_OrderTotal">
                <textarea name="Admin_Order_OrderTotal" id="Admin_Order_OrderTotal" {...register("Admin_Order_OrderTotal", {required: true})}>{info.total}</textarea>
            </td>
            <td className="Admin_Order_Modify"><Button variant="info" type="submit">修改</Button></td>
            <td className="Admin_Order_Delete"><Button variant="danger" onClick={deleteTrans} >刪除</Button></td>
        </form>                    
        </td>
    );
}

export default AdminforOrderForms;