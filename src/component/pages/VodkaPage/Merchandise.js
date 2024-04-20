import { NavLink } from "react-router-dom";
import Wine1 from "./pic/Absolute.png"
import Wine2 from "./pic/BelvederePure.png";
import Wine3 from "./pic/PolmosSpirytus.png";
import Wine4 from "./pic/Wa.png";
import Wine5 from "./pic/Smirnoff.png";
import Wine6 from "./pic/Grey Goose.png";


const Merchandise = () =>{
    return(
        <div className='Merchandise'>
            
            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine1} alt="酒" /> </div>
                    <div className='countryname'>Absolut Vodka</div>
                    <div className='line'></div>
                    <div className='winename'>絕對伏特加</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 500</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine2} alt="酒" /> </div>
                    <div className='countryname'>Belvedere</div>
                    <div className='line'></div>
                    <div className='winename'>雪樹伏特加</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,100</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine3} alt="酒" /> </div>
                    <div className='countryname'>Spirytus Rektyfikowany</div>
                    <div className='line'></div>
                    <div className='winename'>波蘭生命之水伏特加</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 800</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine4} alt="酒" /> </div>
                    <div className='countryname'>Wa</div>
                    <div className='line'></div>
                    <div className='winename'>和伏特加</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 600</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine5} alt="酒" /> </div>
                    <div className='countryname'>Smirnoff</div>
                    <div className='line'></div>
                    <div className='winename'>思美洛伏特加</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 420</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine6} alt="酒" /> </div>
                    <div className='countryname'>Grey Goose</div>
                    <div className='line'></div>
                    <div className='winename'>灰雁原味伏特加</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 935</div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default Merchandise