import { NavLink } from "react-router-dom";
import Wine1 from "./pic/CHANG.png"
import Wine2 from "./pic/FeverTreeIndia.png";
import Wine3 from "./pic/FeverTreeGiang.png";
import Wine4 from "./pic/SanPellegrino.png";
import Wine5 from "./pic/Perrier.png";
import Wine6 from "./pic/Fiji.png";


const Merchandise = () =>{
    return(
        <div className='Merchandise'>
            
            <NavLink to="/SoftDrinksPage/h15858">
                <div className="winebox">
                    <div className='wine'> <img src={Wine1} alt="酒" /> </div>
                    <div className='countryname'>CHANG</div>
                    <div className='line'></div>
                    <div className='winename'>泰象氣泡水/24瓶</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 650</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/SoftDrinksPage/h29191">
                <div className="winebox">
                    <div className='wine'> <img src={Wine2} alt="酒" /> </div>
                    <div className='countryname'>Fever Tree</div>
                    <div className='line'></div>
                    <div className='winename'>芬味樹 古印度通寧水/24瓶</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,920</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/SoftDrinksPage/h30800">
                <div className="winebox">
                    <div className='wine'> <img src={Wine3} alt="酒" /> </div>
                    <div className='countryname'>Fever Tree</div>
                    <div className='line'></div>
                    <div className='winename'>芬味樹 頂級薑汁汽水/24瓶</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 2,616</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/SoftDrinksPage/h45200">
                <div className="winebox">
                    <div className='wine'> <img src={Wine4} alt="酒" /> </div>
                    <div className='countryname'>San Pellegrino</div>
                    <div className='line'></div>
                    <div className='winename'>聖沛黎洛 葡萄柚氣泡飲/24瓶</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,200</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/SoftDrinksPage/h58520">
                <div className="winebox">
                    <div className='wine'> <img src={Wine5} alt="酒" /> </div>
                    <div className='countryname'>Perrier</div>
                    <div className='line'></div>
                    <div className='winename'>沛綠雅 氣泡礦泉水/12瓶</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 840</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/SoftDrinksPage/h62024">
                <div className="winebox">
                    <div className='wine'> <img src={Wine6} alt="酒" /> </div>
                    <div className='countryname'>Fiji</div>
                    <div className='line'></div>
                    <div className='winename'>斐濟 礦泉水/36瓶</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,460</div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default Merchandise