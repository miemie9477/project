import Frame from "../../BasicFrame/frame";

const style={
    position:"relative",
    display:"block",
    paddingTop:"50px",
    paddingLeft:"100px",
    paddingRight:"100px",
    justifyContent:"left",
    height:"1000px"
}

const DeliveryPage = () =>{
    return(
        
        <div style={{position:"relative"}}>
            <Frame/>
            <div style={style}>

                <h1>配送資訊</h1>
                <hr/><br/>
                <h2><b>買酒只在買酒網，全網滿 $2,000 免運費!<br/></b></h2>
                <hr/>
                <h5>未滿$2000:<ul>
                    <li>全台地區，運費$150/箱。</li>
                    <li>外島運費另計</li>
                </ul></h5>


            </div>
            
        </div>
    );
}

export default DeliveryPage;