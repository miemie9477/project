import { NavLink } from "react-router-dom";
import Wine1 from "./pic/Cointreau.png"
import Wine2 from "./pic/Luxardo.png";
import Wine3 from "./pic/Kahlua.png";
import Wine4 from "./pic/Dolin.png";
import Wine5 from "./pic/Campari.png";
import Wine6 from "./pic/Benedictine.png";


const Merchandise = () =>{
    return(
        <div className='Merchandise'>
            
            <NavLink to="/LiqueurPage/g14099">
                <div className="winebox">
                    <div className='wine'> <img src={Wine1} alt="酒" /> </div>
                    <div className='countryname'>Cointreau</div>
                    <div className='line'></div>
                    <div className='winename'>君度橙酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 680</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/LiqueurPage/g29170">
                <div className="winebox">
                    <div className='wine'> <img src={Wine2} alt="酒" /> </div>
                    <div className='countryname'>Luxardo</div>
                    <div className='line'></div>
                    <div className='winename'>樂莎度 黑櫻桃香甜酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,350</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/LiqueurPage/g38000">
                <div className="winebox">
                    <div className='wine'> <img src={Wine3} alt="酒" /> </div>
                    <div className='countryname'>Kahlua</div>
                    <div className='line'></div>
                    <div className='winename'>卡魯哇 咖啡香甜酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 500</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/LiqueurPage/g47474">
                <div className="winebox">
                    <div className='wine'> <img src={Wine4} alt="酒" /> </div>
                    <div className='countryname'>Dolin</div>
                    <div className='line'></div>
                    <div className='winename'>多林純香艾酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 650</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/LiqueurPage/g56020">
                <div className="winebox">
                    <div className='wine'> <img src={Wine5} alt="酒" /> </div>
                    <div className='countryname'>Campari</div>
                    <div className='line'></div>
                    <div className='winename'>金巴利香甜酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 880</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/LiqueurPage/g62550">
                <div className="winebox">
                    <div className='wine'> <img src={Wine6} alt="酒" /> </div>
                    <div className='countryname'>Benedictine</div>
                    <div className='line'></div>
                    <div className='winename'>班尼狄克丁 DOM廊酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 950</div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default Merchandise