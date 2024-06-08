import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";
import { useForm } from 'react-hook-form';
import axios from "axios";
import "./css/frame.css"

const Category = () => {
    const { register, handleSubmit, watch, clearErrors, setError, formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });

    const onSubmit = (data) =>{
        //自己把下面搜尋結果填進 keyword
        const keyword = "o"
        const url = `http://localhost:3001/pDetail/search/${keyword}`
        axios.get(url)
        .then(
            response =>{
                console.log(response.data);
                console.log("get one line of the data:" , response.data[0])
                console.log("get brand Eng part: ", extractEnglish(response.data[0].brand))
            }
        )                                                       
    }

    const extractEnglish = (str) => {
        const match = str.match(/[a-zA-Z,']+/g);
        return match ? match.join(' ') : '';
    };

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
                <li></li>
            </ul>

            <div className="searchCol">
                
                <form name="SelectForm">
                    <InputGroup  className="mb-10">
                        <Form.Control
                            {...register("Search")}
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            className=" mr-sm-2"
                        />
                        <NavLink to="#"><Button className="w-90 p-50" variant="outline-secondary" id="button-addon2"  onClick={onSubmit}><CiSearch /></Button></NavLink>
                    </InputGroup>
                </form>
            </div>
        
        </div>
    );
}
export default Category