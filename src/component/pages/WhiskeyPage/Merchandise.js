import { NavLink } from "react-router-dom";
import Wine1 from "./pic/JimBeam.png"
import Wine2 from "./pic/JOHNNIEWALKERBLACKLABEL.png";
import Wine3 from "./pic/JOHNNIEWALKERREDLABEL.png";
import Wine4 from "./pic/Jameson.png";
import Wine5 from "./pic/MAKER_SMARKBOURBON .png";
import Wine6 from "./pic/Hakushu.png";
import Wine7 from "./pic/KAVALANCLASSIC.png";
// import Wine8 from "./pic/";
// import Wine9 from "./pic/";
// import Wine10 from "./pic/";
// import Wine11 from "./pic/";
// import Wine12 from "./pic/";
// import Wine13 from "./pic/";
// import Wine14 from "./pic/";



const Merchandise = () =>{
    return(
        <div className='Merchandise'>
            
            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine1} alt="酒" /> </div>
                    <div className='countryname'>Jim Beam</div>
                    <div className='line'></div>
                    <div className='winename'>金賓 白牌波本威士忌</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 380</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine2} alt="酒" /> </div>
                    <div className='countryname'>Johnnie Walker</div>
                    <div className='line'></div>
                    <div className='winename'>約翰走路 黑牌12年</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 690</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine3} alt="酒" /> </div>
                    <div className='countryname'>Johnnie Walker</div>
                    <div className='line'></div>
                    <div className='winename'>約翰走路 紅牌1820</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 3,800</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine4} alt="酒" /> </div>
                    <div className='countryname'>Jameson</div>
                    <div className='line'></div>
                    <div className='winename'>尊美醇愛爾蘭威士忌</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 580</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine5} alt="酒" /> </div>
                    <div className='countryname'>Maker's Mark</div>
                    <div className='line'></div>
                    <div className='winename'>美格 波本威士忌</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 930</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine6} alt="酒" /> </div>
                    <div className='countryname'>Hakushu</div>
                    <div className='line'></div>
                    <div className='winename'>白州 12年</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 6,900</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine7} alt="酒" /> </div>
                    <div className='countryname'>Kavalan</div>
                    <div className='line'></div>
                    <div className='winename'>噶瑪蘭經典單一麥芽威士忌</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 2,100</div>
                    </div>
                </div>
            </NavLink>

        </div>
    );
}

export default Merchandise