import "./css/adminstatisticspage.css";
import Frame from "../../BasicFrame/frame";
import Admin_Statis_SaleAmount from "./Admin_Statis_SaleAmount";
import Admin_Statis_MalePopular from "./Admin_Statis_MalePopular";
import Admin_Statis_FemalePopular from "./Admin_Statis_FemalePopular";
import Admin_Statis_TotalSales from "./Admin_Statis_TotalSales";




const AdminStatisticsPage = () =>{
    return(
        <div style={{position:"relative"}}>
            
            <Frame/>
            <Admin_Statis_SaleAmount />
            <Admin_Statis_MalePopular />
            <Admin_Statis_FemalePopular />
            <Admin_Statis_TotalSales />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
    );
}

export default AdminStatisticsPage;