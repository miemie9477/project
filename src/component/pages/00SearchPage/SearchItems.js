import './css/searchpage.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import a10010 from './pic/a10010.png'


const SearchItems = ({searchdata}) =>{
    var productID = searchdata.pNo
    var productPath = require(`./pic/${productID}.png`);


    const [Search_winetype, setSearch_winetype] = useState('#');
    useEffect(() => {
        if(searchdata.pNo[0] === 'a') setSearch_winetype("/GinPage/")
        else if(searchdata.pNo[0] === 'c') setSearch_winetype("/BrandyPage/")
        else if(searchdata.pNo[0] === 'b') setSearch_winetype("/VodkaPage/")
        else if(searchdata.pNo[0] === 'd') setSearch_winetype("/RumPage/")
        else if(searchdata.pNo[0] === 'e') setSearch_winetype("/WhiskeyPage/")
        else if(searchdata.pNo[0] === 'f') setSearch_winetype("/TequilaPage/")
        else if(searchdata.pNo[0] === 'g') setSearch_winetype("/LiqueurPage/")
        else if(searchdata.pNo[0] === 'h') setSearch_winetype("/SoftDrinksPage/")
    
    }, []);


    return(
        <>
            <NavLink to={Search_winetype+searchdata.pNo}>
                <div className="Search_winebox">
                    <div className='Search_wine'> <img src={productPath} alt="酒" /> </div>
                    <div className='Search_countryname'>{searchdata.brand}</div>
                    <div className='Search_line'></div>
                    <div className='Search_winename'>{searchdata.pName}</div>
                    <div className='Search_pricetag'>
                        <div className='Search_memberprice'>會員價</div>
                        <div className='Search_price'>$ {searchdata.unitPrice}</div>
                    </div>
                </div>
            </NavLink>

        </>
    );
}

export default SearchItems;