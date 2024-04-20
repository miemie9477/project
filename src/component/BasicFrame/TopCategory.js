import { NavLink } from "react-router-dom";

import "./css/frame.css"

const Category = () => {
    return(
        <div className="CategoryCss">
            <ul >
                {/* <li><a href="#">琴酒</a></li>
                <li><a href="#">伏特加</a></li>
                <li><a href="#">白蘭地</a></li>
                <li><a href="#">蘭姆酒</a></li>
                <li><a href="#">威士忌</a></li>
                <li><a href="#">龍舌蘭</a></li>
                <li><a href="#">利口酒</a></li>
                <li><a href="#">無酒精</a></li> */}

                <li><NavLink to="/GinPage">琴酒</NavLink></li>
                <li><NavLink to="/VodkaPage">伏特加</NavLink></li>
                <li><NavLink to="/BrandyPage">白蘭地</NavLink></li>
                <li><NavLink to="/RumPage">蘭姆酒</NavLink></li>
                <li><NavLink to="/WhiskeyPage">威士忌</NavLink></li>
                <li><NavLink to="/TequilaPage">龍舌蘭</NavLink></li>
                <li><NavLink to="/LiqueurPage">利口酒</NavLink></li>
                <li><NavLink to="/SoftDrinksPage">無酒精</NavLink></li>
            </ul>
        
        </div>
    );
}
export default Category