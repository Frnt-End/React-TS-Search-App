import searchIcon from '../Img/search_icon.svg';
import { StyleSearchBar } from "../Styles/ResultsPage.styles"



export default function SearchBar({ searchQuery, setSearchQuery }: any) {

    const maxlength = 40;
    let searchVal = "";


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchVal = e.target.value;
        e.preventDefault()
    }


    return (
        <StyleSearchBar>
                <input
                    type="search"
                    onChange={handleChange}
                    maxLength={maxlength}
                    placeholder="Search Articles" />
            <button onClick={() => setSearchQuery(searchVal)}>
                <img src={searchIcon} alt="search icon" /> Find
            </button>
            </StyleSearchBar>

    ) 
}

