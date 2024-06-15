import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { SearchdataContext } from "../../ContextAPI";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/frame.css"

const Category = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, watch, clearErrors, setError, formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });

    const onSubmit = (data) =>{
        //自己把下面搜尋結果填進 keyword
        const keyword = data.Search;
        console.log(keyword);
        const url = `http://localhost:3001/pDetail/search/${keyword}`
        axios.get(url)
        .then(
            response =>{
                if(response.data.length > 0){
                    console.log(response.data);
                    console.log("get data:" , response.data)
                    console.log("get brand Eng part: ", extractEnglish(response.data[0].brand))

                    setSearchdata(response.data)
                }
            }
        )
        .finally(() => {
            navigate('/SearchPage')
        })                                                   
    }

    const extractEnglish = (str) => {
        const match = str.match(/[a-zA-Z,']+/g);
        return match ? match.join(' ') : '';
    };

    const {Searchdata, setSearchdata} = useContext(SearchdataContext);
    


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
                
            <form name="SelectForm" onSubmit={handleSubmit(onSubmit)}>
                <InputGroup className="mb-10">
                    <Form.Control
                    {...register("Search",{required: true})}
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    className="mr-sm-2"
                    />
                    <Button
                    type="submit"
                    className="w-90 p-50"
                    variant="outline-secondary"
                    id="button-addon2"
                    >
                    <CiSearch />
                    </Button>
                </InputGroup>
            </form>
            </div>
        
        </div>
    );
}
export default Category