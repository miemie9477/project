import { NavLink } from "react-router-dom";
import Wine1 from "./pic/BacardiLight.png"
import Wine2 from "./pic/BacardiDark.png";
import Wine3 from "./pic/BacardiGold.png";
import Wine4 from "./pic/HavanaClub.png";
import Wine5 from "./pic/BAYOUSPICED.png";
import Wine6 from "./pic/CaptainMorgan.png";
import Wine7 from "./pic/FlordeCa.png";
import Wine8 from "./pic/MountGay.png";



const Merchandise = () =>{
    return(
        <div className='Merchandise'>
            
            <NavLink to="/RumPage/d16230">
                <div className="winebox">
                    <div className='wine'> <img src={Wine1} alt="酒" /> </div>
                    <div className='countryname'>Bacardi</div>
                    <div className='line'></div>
                    <div className='winename'>百家得LIGHT蘭姆酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 500</div>
                    </div>
                </div>
            </NavLink>

            {/* <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine2} alt="酒" /> </div>
                    <div className='countryname'>Bacardi</div>
                    <div className='line'></div>
                    <div className='winename'>百家得Dark蘭姆酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 600</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine3} alt="酒" /> </div>
                    <div className='countryname'>Bacardi</div>
                    <div className='line'></div>
                    <div className='winename'>百家得Gold蘭姆酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,100</div>
                    </div>
                </div>
            </NavLink> */}

            <NavLink to="/RumPage/d27788">
                <div className="winebox">
                    <div className='wine'> <img src={Wine4} alt="酒" /> </div>
                    <div className='countryname'>Havana Club</div>
                    <div className='line'></div>
                    <div className='winename'>哈瓦那 古巴窖藏三年蘭姆酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 580</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/RumPage/d35566">
                <div className="winebox">
                    <div className='wine'> <img src={Wine5} alt="酒" /> </div>
                    <div className='countryname'>Bayou</div>
                    <div className='line'></div>
                    <div className='winename'>路易斯安那鱷魚 香料蘭姆酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,000</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/RumPage/d42211">
                <div className="winebox">
                    <div className='wine'> <img src={Wine6} alt="酒" /> </div>
                    <div className='countryname'>CAPTAIN MORGAN</div>
                    <div className='line'></div>
                    <div className='winename'>摩根船長蘭姆酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 650</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/RumPage/d57400">
                <div className="winebox">
                    <div className='wine'> <img src={Wine7} alt="酒" /> </div>
                    <div className='countryname'>Flor De Cana</div>
                    <div className='line'></div>
                    <div className='winename'>甘蔗之花 4年蘭姆酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 650</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/RumPage/d62020">
                <div className="winebox">
                    <div className='wine'> <img src={Wine8} alt="酒" /> </div>
                    <div className='countryname'>Mount Gay Rum</div>
                    <div className='line'></div>
                    <div className='winename'>奇峰 精釀蘭姆酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,800</div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default Merchandise