import axios from "axios";
import { useState } from "react";
import logo from '../Img/NYTimes-logo.png';
import { useQuery } from 'react-query';import { AboveResults, Container, Loading, Logo, ResultsContainer, ResultsTitle,  WrapResultsBtns,  WrapStyleSearchBar } from "../Styles/ResultsPage.styles"
import NextPrevButtons from "./NextPrevButtons";
import SearchBar from './SearchBar';



const apikey = process.env.REACT_APP_API_KEY;


const getApiData = async (pageNum: number, searchQuery:string) => {
        let rspns = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&fl=headline&fl=pub_date&fl=snippet&fl=web_url&facet_fields=document_type&page=${pageNum}&api-key=${apikey}`)
    return rspns.data.response.docs;
}

export default function Results() {
    
    const [pageNum, setPageNum] = useState(1); 
    const [searchQuery, setSearchQuery] = useState("Tech");
    const { data, status } = useQuery(['results', pageNum, searchQuery], () => getApiData(pageNum, searchQuery), { keepPreviousData: true });

    return (
        <Container>
            <Logo><img src={logo} alt="logo" /></Logo>    

             <WrapStyleSearchBar>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </WrapStyleSearchBar>

            
            <AboveResults>
                <ResultsTitle>Results for {`"${searchQuery}"`}:</ResultsTitle>
                <NextPrevButtons pageNum={pageNum} setPageNum={setPageNum} />
            </AboveResults>
            
            {status === 'loading' && <Loading>Loading..</Loading>}
            {status === 'error' && (<div>Error fetching data</div>)}
            {status === 'success' && (

            <>
                <ResultsContainer>
                    <ul>
                        {data.map((items: any, index: number) => (
                            <li key={index} onClick={() => window.location.href=`${items.web_url}`}>
                                <p> {items.headline.main}</p>  <span>Read More ⇨</span>
                            </li>
                        ))}
                    </ul>
                </ResultsContainer>
                    
                <WrapResultsBtns>
                    <NextPrevButtons pageNum={pageNum} setPageNum={setPageNum} />
                </WrapResultsBtns>
            </>
            )}
        </Container>
    )     
}

