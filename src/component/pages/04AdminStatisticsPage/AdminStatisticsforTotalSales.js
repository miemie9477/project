import "./css/adminstatisticspage.css";
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const AdminStatisticsforTotalSales = ({info}) =>{

    return(
        <td colSpan={2} className="Admin_Statis_TotalSalesFormTD">
            <td className="Admin_Statis_TotalSalesMerName">
                <textarea name="Admin_Statis_TotalSalesMerName" id="Admin_Statis_TotalSalesMerName" >{info.pName}</textarea>
            </td>
            <td className="Admin_Statis_TotalSalesAmount">
                <textarea name="Admin_Statis_TotalSalesAmount" id="Admin_Statis_TotalSalesAmount">{info.total_sales_amount}</textarea>
            </td>
        </td>
    );
}

export default AdminStatisticsforTotalSales;