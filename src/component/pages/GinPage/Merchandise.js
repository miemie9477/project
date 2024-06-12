import { NavLink } from "react-router-dom";
import Wine1 from "./pic/GORDON_S.png"
import Wine2 from "./pic/ENgin.png";
import Wine3 from "./pic/Tanqueray.png";
import Wine4 from "./pic/HENDRICK_S.png";
import Wine5 from "./pic/Monkey47.png";
import Wine6 from "./pic/BOTANIST.png";


const Merchandise = () =>{
    return(
        <div className='Merchandise'>
            
            <NavLink to="/GinPage/a10010">
                <div className="winebox">
                    <div className='wine'> <img src={Wine1} alt="酒" /> </div>
                    <div className='countryname'>Gordon's Gin</div>
                    <div className='line'></div>
                    <div className='winename'>高登琴酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 420</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/GinPage/a21001">
                <div className="winebox">
                    <div className='wine'> <img src={Wine2} alt="酒" /> </div>
                    <div className='countryname'>Beefeater</div>
                    <div className='line'></div>
                    <div className='winename'>英人琴酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 540</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/GinPage/a30012">
                <div className="winebox">
                    <div className='wine'> <img src={Wine3} alt="酒" /> </div>
                    <div className='countryname'>Tanqueray</div>
                    <div className='line'></div>
                    <div className='winename'>坦奎瑞琴酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 680</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/GinPage/a41200">
                <div className="winebox">
                    <div className='wine'> <img src={Wine4} alt="酒" /> </div>
                    <div className='countryname'>Hendrick's</div>
                    <div className='line'></div>
                    <div className='winename'>亨利爵士琴酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,250</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/GinPage/a50001">
                <div className="winebox">
                    <div className='wine'> <img src={Wine5} alt="酒" /> </div>
                    <div className='countryname'>Monkey 47</div>
                    <div className='line'></div>
                    <div className='winename'>猴子47琴酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,780</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="/GinPage/a61111">
                <div className="winebox">
                    <div className='wine'> <img src={Wine6} alt="酒" /> </div>
                    <div className='countryname'>The Botanist</div>
                    <div className='line'></div>
                    <div className='winename'>植物學家琴酒</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,390</div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default Merchandise