import "./css/adminpage.css";
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';


const AdminforMemberForms = ({member}) =>{
    const { register, handleSubmit, watch, setError, formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });

    const onSubmit = (data) => {
        console.log("驗證成功",data);
        // 这里可以添加你希望在表单验证成功后执行的代码
        
    }
    console.log(errors);

    return(
        <td colSpan={11} className="Admin_Mem_FormTD">
        <form name="AdminforMemberForm" onSubmit={handleSubmit(onSubmit)}>
            <td className="Admin_Mem_MemNum">
                <textarea name="Admin_Mem_MemNum" id="Admin_Mem_MemNum" {...register("Admin_Mem_MemNum", {required: true})}>{member.mId}</textarea>
            </td>
            <td className="Admin_Mem_MemName">
                <textarea name="Admin_Mem_MemName" id="Admin_Mem_MemName" {...register("Admin_Mem_MemName", {required: true})}>{member.mName}</textarea>
            </td>
            <td className="Admin_Mem_MemID">
                <textarea name="Admin_Mem_MemID" id="Admin_Mem_MemID" {...register("Admin_Mem_MemID", {required: true})}>{member.pId}</textarea>
            </td>
            <td className="Admin_Mem_MemEmail">
                <textarea name="Admin_Mem_MemEmail" id="Admin_Mem_MemEmail" {...register("Admin_Mem_MemEmail", {required: true})}>{member.email}</textarea>
            </td>
            <td className="Admin_Mem_MemSex">
                <textarea name="Admin_Mem_MemSex" id="Admin_Mem_MemSex" {...register("Admin_Mem_MemSex", {required: true})}>{member.gender}</textarea>
            </td>
            <td className="Admin_Mem_MemPhone">
                <textarea name="Admin_Mem_MemPhone" id="Admin_Mem_MemPhone" {...register("Admin_Mem_MemPhone", {required: true})}>{member.phone}</textarea>
            </td>
            <td className="Admin_Mem_MemBirth">
                <textarea name="Admin_Mem_MemBirth" id="Admin_Mem_MemBirth" {...register("Admin_Mem_MemBirth", {required: true})}>{member.birthday.split('T')[0]}</textarea>
            </td>
            <td className="Admin_Mem_MemAccount">
                <textarea name="Admin_Mem_MemAccount" id="Admin_Mem_MemAccount" {...register("Admin_Mem_MemAccount", {required: true})}>{member.mAccount}</textarea>
            </td>
            <td className="Admin_Mem_MemPwd">
                <textarea name="Admin_Mem_MemPwd" id="Admin_Mem_MemPwd" {...register("Admin_Mem_MemPwd", {required: true})}>{member.mPwd}</textarea>
            </td>
            <td className="Admin_Mem_Modify"><Button variant="info" type="submit">修改</Button></td>
            <td className="Admin_Mem_Delete"><Button variant="danger">刪除</Button></td>
        </form>                    
        </td>
    );
}

export default AdminforMemberForms;