import './css/searchpage.css'
import SearchItems from './SearchItems';
import { SearchdataContext } from '../../../ContextAPI';
import { useContext } from 'react';


const SearchBody = () =>{
    const {Searchdata, setSearchdata} = useContext(SearchdataContext);

    return(
        <div className='Search_Merchandise'>
            {Searchdata.map(searchdata => (
                <div key={searchdata.pNo}>
                    <SearchItems searchdata={searchdata}/>
                    
                </div>
            ))}
            {/* <SearchItems/>   */}
        </div>
    );
}

export default SearchBody;