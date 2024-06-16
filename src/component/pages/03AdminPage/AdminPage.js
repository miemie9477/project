import "./css/adminpage.css";
import Frame from "../../BasicFrame/frame";
import AdminforMember from "./AdminforMember";
import AdminforMerchandise from "./AdminforMerchandise";
import AdminforOrder from "./AdminforOrder";



const AdminPage = () =>{
    return(
        <div style={{position:"relative"}}>
            
            <Frame/>
            <AdminforMember />
            
            <AdminforOrder />
            <AdminforMerchandise />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
    );
}

export default AdminPage;