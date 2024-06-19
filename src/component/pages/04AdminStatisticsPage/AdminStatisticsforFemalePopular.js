import "./css/adminstatisticspage.css";
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const AdminStatisticsforFemalePopular = ({info}) =>{

    return(
        <td colSpan={2} className="Admin_Statis_FemalePopularFormTD">
            <td className="Admin_Statis_FemalePopularMerName">
                <textarea name="Admin_Statis_FemalePopularMerName" id="Admin_Statis_FemalePopularMerName" >{info.pName}</textarea>
            </td>
            <td className="Admin_Statis_FemalePopularAmount">
                <textarea name="Admin_Statis_FemalePopularAmount" id="Admin_Statis_FemalePopularAmount">{info.count}</textarea>
            </td>
        </td>
    );
}

export default AdminStatisticsforFemalePopular;