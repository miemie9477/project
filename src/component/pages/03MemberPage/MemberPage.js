import Mem_DataReset from "./Mem_DataReset";
import Mem_PwdReset from "./Mem_PwdReset";
import Mem_OrderManage from "./Mem_OrderManage";
import { useEffect, useState } from "react";

import Frame from "../../BasicFrame/frame";



const MemberPage = () =>{
    var [defaultInfo, setDefaultInfo] = useState({});

    return(
        <div style={{position:"relative"}}>
            
            <Frame/>
            <Mem_OrderManage/>
            <Mem_DataReset defaultInfo={defaultInfo} setDefaultInfo={setDefaultInfo} />
            <Mem_PwdReset defaultInfo={defaultInfo}/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default MemberPage;