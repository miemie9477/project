import Mem_DataReset from "./Mem_DataReset";
import Mem_PwdReset from "./Mem_PwdReset";
import Mem_OrderManage from "./Mem_OrderManage";

import Frame from "../../BasicFrame/frame";



const MemberPage = () =>{
    return(
        <div style={{position:"relative"}}>
            
            <Frame/>
            <Mem_OrderManage/>
            <Mem_DataReset/>
            <Mem_PwdReset/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default MemberPage;