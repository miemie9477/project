import { useEffect } from "react";
import "./css/QandA.css"

const QandA = ({pNo}) => {

    

    return (
    <div className="QA_background">
        <div className="QA_title">常見訂單與退貨問題</div>
        <div className='QA_line'></div>
        <div className="QA_question">
            Q: 我已經下單了，但是貨還是沒到，怎麼辦?<br/>
            A: 請來電留下您的電話號碼，請專人立即為您查詢訂單狀況。<br/>
            <br/>
            Q: 我是門市客人，下了貨單後需要更改訂單資料。<br/>
            A: 請來電留下您的電話號碼，專人將立即為您服務。<br/>
            <br/>
            Q: 我可以退換貨嗎?<br/>
            A: 很抱歉，買酒網門市不提供退換貨的服務。因為當商品離開門市後，我們無法保證商品品質、商品保存狀態等等。<br/>
        </div>
        <br/><br/>
        <div className="QA_warn">
            因食品安全考量及維護其他顧客之權益，消費者購買酒類商品時，請當場確認品項包裝之完整，一旦離開店家，恕我們無法接受任何形式之退換貨。
        </div>
    </div>
    );
}

export default QandA