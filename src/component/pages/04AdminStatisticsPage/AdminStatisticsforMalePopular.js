import "./css/adminstatisticspage.css";
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const AdminStatisticsforMalePopular = ({info}) =>{

    return(
        <td colSpan={2} className="Admin_Statis_MalePopularFormTD">
            <td className="Admin_Statis_MalePopularMerName">
                <textarea name="Admin_Statis_MalePopularMerName" id="Admin_Statis_MalePopularMerName" >{info.pName}</textarea>
            </td>
            <td className="Admin_Statis_MalePopularAmount">
                <textarea name="Admin_Statis_MalePopularAmount" id="Admin_Statis_MalePopularAmount">{info.count}</textarea>
            </td>
        </td>
    );
}

export default AdminStatisticsforMalePopular;