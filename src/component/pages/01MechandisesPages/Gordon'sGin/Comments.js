import { useEffect, useState } from "react";
import "./css/Comments.css"
import axios from "axios";
const Comments = ({pNo}) => {
    var [dataLength, setDataLength] = useState();
    var [page, setPage] = useState();
    var [boardInfo, setBoardInfo] = useState([{
        date:"",
        mId:""
    }])
    useEffect(() =>{
        const url = "http://localhost:3001/pDetail/getBoard"
        console.log()
        axios.post(url, {pNo})
        .then(
            response =>{
                console.log(response.data);
                if(response.data.result === "No result"){
                    console.log("no result");
                }
                else{
                    setDataLength(response.data.length);
                    setBoardInfo(response.data);
                    console.log("data length:", dataLength);
                    console.log(boardInfo);
                }
            }
        )
    }, [])

    return (
        <div>
            {/* 渲染 boardInfo 内容 */}
            {boardInfo.map((info, index) => (
                <div key={index}>
                    <div className="Comt_background">
                        <div className="Comt_title"><div className="Comt_text">商品評價</div></div>
                        <div className="Comt_comments">
                            <div className="Comt_text">
                                {new Date(info.date).toLocaleDateString()}　{info.pNo}<br/>
                                <br/>
                                {info.content}
                            </div>
                        </div>
                        </div>
                        <br/>  
                    </div>
            ))}
            <div className="Comt_pagebutton">
                <div className="Comt_current"><button>1</button></div>
                <div className="Comt_notcurrrent"><button>2</button></div>
                <div className="Comt_notcurrrent"><button>3</button></div>
            </div>
        </div>
    
    );
    // return (
    // <div>
    //     <div className="Comt_background">
    //         <div className="Comt_title"><div className="Comt_text">商品評價</div></div>
    //         <div className="Comt_comments">
    //             <div className="Comt_text">
    //                 2024/04/10　OOO<br/>
    //                 <br/>
    //                 商品包裝完整
    //             </div>
    //         </div>
    //         <div className="Comt_comments">
    //             <div className="Comt_text">
    //                 2024/04/08　Rick Astley<br/>
    //                 <br/>
    //                 Never gonna give you up<br/>
    //                 Never gonna let you down<br/>
    //                 Never gonna run around and desert you<br/>
    //                 Never gonna make you cry<br/>
    //                 Never gonna say goodbye<br/>
    //                 Never gonna tell a lie and hurt you<br/>
    //             </div>
    //         </div>

    //         <div className="Comt_comments">
    //             <div className="Comt_text">
                    
    //             </div>
    //         </div>
    //     </div>
    //     <br/>
    //     <div className="Comt_pagebutton">
    //         <div className="Comt_current"><button>1</button></div>
    //         <div className="Comt_notcurrrent"><button>2</button></div>
    //         <div className="Comt_notcurrrent"><button>3</button></div>
    //     </div>
    // </div>
    
    // );
}

export default Comments