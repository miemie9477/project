import { NavLink } from "react-router-dom";
import Wine1 from "./pic/St-Remy.png"
import Wine2 from "./pic/Hennessy.png";
import Wine3 from "./pic/Martell.png";
import Wine4 from "./pic/RemyMartin.png";
import Wine5 from "./pic/CognacPrunier.png";



const Merchandise = () =>{
    return(
        <div className='Merchandise'>
            
            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine1} alt="酒" /> </div>
                    <div className='countryname'>St-Remy</div>
                    <div className='line'></div>
                    <div className='winename'>聖雷米VSOP</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 550</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine2} alt="酒" /> </div>
                    <div className='countryname'>Hennessy</div>
                    <div className='line'></div>
                    <div className='winename'>軒尼詩 VSOP 干邑白蘭地</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,680</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine3} alt="酒" /> </div>
                    <div className='countryname'>Martell</div>
                    <div className='line'></div>
                    <div className='winename'>馬爹利 名仕干邑</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 2,150</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine4} alt="酒" /> </div>
                    <div className='countryname'>Remy Martin</div>
                    <div className='line'></div>
                    <div className='winename'>人頭馬 VSOP</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,360</div>
                    </div>
                </div>
            </NavLink>

            <NavLink to="#">
                <div className="winebox">
                    <div className='wine'> <img src={Wine5} alt="酒" /> </div>
                    <div className='countryname'>Cognac Prunier</div>
                    <div className='line'></div>
                    <div className='winename'>普諾尼 大香檳區VSOP</div>
                    <div className='pricetag'>
                        <div className='memberprice'>會員價</div>
                        <div className='price'>$ 1,850</div>
                    </div>
                </div>
            </NavLink>

        </div>
    );
}

export default Merchandise