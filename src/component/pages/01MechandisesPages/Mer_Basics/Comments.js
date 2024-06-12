import { useEffect, useState, useRef } from "react";
import "./css/Comments.css"
import axios from "axios";
const Comments = ({pNo}) => {

    var [dataLength, setDataLength] = useState(44);
    var [page, setPage] = useState(1);
    var [boardInfo, setBoardInfo] = useState([{
        date:"",
        mId:""
    }])

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const itemsPerPage = 5;
    const startIndex = (page - 1) * itemsPerPage;
    const selectedData = boardInfo.slice(startIndex, startIndex + itemsPerPage);
    var [totalPages, settotalPages] = useState(1);

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
        .finally(() => {    
            // 在資料傳輸結束後
            console.log("dataLength");
            console.log(dataLength);
            settotalPages(Math.ceil(dataLength / itemsPerPage));
            console.log(totalPages);
        });

    }, [])

    

    

    return (
        <div>
            <div className="Comt_background">
                <div className="Comt_title"><div className="Comt_text">商品評價</div></div>
                {/* 渲染 boardInfo 内容 */}
                {/* {boardInfo.map((info, index) => ( */}
                {selectedData.map((info, index) => (
                    <div key={index}>
                        <div className="Comt_comments">
                            <div className="Comt_text">
                                {new Date(info.date).toLocaleDateString()}　{info.mId}<br/>
                                <br/>
                                {info.content}
                            </div>
                        </div>
                        {/* <br/>   */}
                    </div>
                ))}
            </div>

            {/* <div className="Comt_pagebutton">
                <div className="Comt_current"><button>1</button></div> 
                <div className="Comt_notcurrrent"><button>2</button></div>
                <div className="Comt_notcurrrent"><button>3</button></div>
            </div> */}


            <div className="Comt_pagebutton">
                {[...Array(totalPages)].map((_, i) => (
                    <div 
                        key={i}
                        className={i + 1 === page ? "Comt_current" : "Comt_notcurrrent"}
                    >
                        <button onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                    </div>
                ))}
            </div>
        </div>
    
    );

    
}

export default Comments