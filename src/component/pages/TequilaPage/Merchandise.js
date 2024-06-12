import { NavLink } from "react-router-dom";
import Wine1 from "./pic/Sierra.png"
import Wine2 from "./pic/JoseCuervo.png";
import Wine3 from "./pic/ElJimador.png";
import Wine4 from "./pic/Orendain.png";
import Wine5 from "./pic/Sombra.png";
import Wine6 from "./pic/PatrnTequila.png";


const Merchandise = () =>{
    return(
        <div className='Merchandise'>
            
            <NavLink to="/TequilaPage/f10332">
                <div className="winebox">
                    <div className='wine'> <img src={Wine1} alt="酒" /> </div>
                    <div className='countryname'>Sierra</div>
                    <div className='line'></div>
                    <div className='winename'>喜澳瑞 白銀龍舌蘭</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 700</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/TequilaPage/f20777">
                <div className="winebox">
                    <div className='wine'> <img src={Wine2} alt="酒" /> </div>
                    <div className='countryname'>Jose Cuervo</div>
                    <div className='line'></div>
                    <div className='winename'>金快活 龍舌蘭</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 590</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/TequilaPage/f34055">
                <div className="winebox">
                    <div className='wine'> <img src={Wine3} alt="酒" /> </div>
                    <div className='countryname'>El Jimador</div>
                    <div className='line'></div>
                    <div className='winename'>希瑪竇 銀龍舌蘭</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 600</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/TequilaPage/f40905">
                <div className="winebox">
                    <div className='wine'> <img src={Wine4} alt="酒" /> </div>
                    <div className='countryname'>Orendain</div>
                    <div className='line'></div>
                    <div className='winename'>歐恩丹 金龍舌蘭</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 470</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/TequilaPage/f57233">
                <div className="winebox">
                    <div className='wine'> <img src={Wine5} alt="酒" /> </div>
                    <div className='countryname'>Sombra</div>
                    <div className='line'></div>
                    <div className='winename'>桑博拉 梅茲卡爾龍舌蘭</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,750</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/TequilaPage/f61108">
                <div className="winebox">
                    <div className='wine'> <img src={Wine6} alt="酒" /> </div>
                    <div className='countryname'>Patrón Tequila</div>
                    <div className='line'></div>
                    <div className='winename'>培恩 巨岩銀樽龍舌蘭</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 2,800</div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default Merchandise