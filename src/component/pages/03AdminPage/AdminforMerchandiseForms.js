import "./css/adminpage.css";
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const AdminforMerchandiseForms = ({member}) =>{
    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });

    const onSubmit = (data) => {
        const pNo = data.Admin_Mer_MerNum;
        const pName = data.Admin_Mer_MerName;
        const specification = data.Admin_Mer_MerSpecification;
        const brand = data.Admin_Mer_MerBrand;
        const category = data.Admin_Mer_MerCategory;
        const unitPrice = data.Admin_Mer_MerUnitprice;
        const pIntroduction = data.Admin_Mer_MerIntro;
        const pAmount = data.Admin_Mer_MerAccount;
        const url = "http://localhost:3001/modifyAdminSide/modifyMerchandise"
        axios.post(url, {pNo, pName, specification, brand, category, unitPrice, pIntroduction, pAmount})
        .then(
            response =>{
                if(response.data.result === "success"){
                    console.log(response.data);
                    alert(`系統訊息:已修改商品資料 ${pNo} ${pName}`);
                }
            }
        )
        console.log("驗證成功",data);
        // 这里可以添加你希望在表单验证成功后执行的代码
        
    }

    return(
        <td colSpan={11} className="Admin_Mer_FormTD">
        <form name="AdminforMerchandiseForm" onSubmit={handleSubmit(onSubmit)}>
            <td className="Admin_Mer_MerNum">
                <textarea name="Admin_Mer_MerNum" id="Admin_Mer_MerNum" {...register("Admin_Mer_MerNum", {required: true})}>{member.pNo}</textarea>
            </td>
            <td className=" Admin_Mer_MerName">
                <textarea name="Admin_Mer_MerName" id="Admin_Mer_MerName" {...register("Admin_Mer_MerName", {required: true})}>{member.pName}</textarea>
            </td>
            <td className="Admin_Mer_MerBrand">
                <textarea name="Admin_Mer_MerBrand" id="Admin_Mer_MerBrand" {...register("Admin_Mer_MerBrand", {required: true})}>{member.brand}</textarea>
            </td>
            <td className="Admin_Mer_MerCategory">
                <textarea name="Admin_Mer_MerCategory" id="Admin_Mer_MerCategory" {...register("Admin_Mer_MerCategory", {required: true})}>{member.category}</textarea>
            </td>
            <td className="Admin_Mer_MerSpecification">
                <textarea name="Admin_Mer_MerSpecification" id="Admin_Mer_MerSpecification" {...register("Admin_Mer_MerSpecification", {required: true})}>{member.specification}</textarea>
            </td>
            <td className="Admin_Mer_MerUnitprice">
                <textarea name="Admin_Mer_MerUnitprice" id="Admin_Mer_MerUnitprice" {...register("Admin_Mer_MerUnitprice", {required: true})}>{member.unitPrice}</textarea>
            </td>
            <td className="Admin_Mer_MerIntro">
                <textarea name="Admin_Mer_MerIntro" id="Admin_Mer_MerIntro" {...register("Admin_Mer_MerIntro", {required: true})}>{member.pIntroduction}</textarea>
            </td>
            <td className="Admin_Mer_MerAccount">
                <textarea name="Admin_Mer_MerAccount" id="Admin_Mer_MerAccount" {...register("Admin_Mer_MerAccount", {required: true})}>{member.pAmount}</textarea>
            </td>
            <td className="Admin_Mer_Modify"><Button variant="info" type="submit">修改</Button></td>
            <td className="Admin_Mer_Delete"><Button variant="danger">刪除</Button></td>
        </form>                    
        </td>
    );
}

export default AdminforMerchandiseForms;