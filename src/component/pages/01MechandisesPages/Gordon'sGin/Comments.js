import "./css/Comments.css"

const Comments = () => {
    return (
    <div>
        <div className="Comt_background">
            <div className="Comt_title"><div className="Comt_text">商品評價</div></div>
            <div className="Comt_comments">
                <div className="Comt_text">
                    2024/04/10　OOO<br/>
                    <br/>
                    商品包裝完整
                </div>
            </div>
            <div className="Comt_comments">
                <div className="Comt_text">
                    2024/04/08　Rick Astley<br/>
                    <br/>
                    Never gonna give you up<br/>
                    Never gonna let you down<br/>
                    Never gonna run around and desert you<br/>
                    Never gonna make you cry<br/>
                    Never gonna say goodbye<br/>
                    Never gonna tell a lie and hurt you<br/>
                </div>
            </div>

            <div className="Comt_comments">
                <div className="Comt_text">
                    
                </div>
            </div>
        </div>
        <br/>
        <div className="Comt_pagebutton">
            <div className="Comt_current"><button>1</button></div>
            <div className="Comt_notcurrrent"><button>2</button></div>
            <div className="Comt_notcurrrent"><button>3</button></div>
        </div>
    </div>
    
    );
}

export default Comments