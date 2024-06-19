import "./css/adminstatisticspage.css";
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const AdminStatisticsforSaleAmount = ({info}) =>{

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