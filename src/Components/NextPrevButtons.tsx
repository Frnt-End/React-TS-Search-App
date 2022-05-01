import rightIcon from '../Img/icon_right.svg';
import leftIcon from '../Img/icon_left.svg';
import { ResultsBtns } from "../Styles/ResultsPage.styles";

  
export default function NextPrevButtons({ pageNum, setPageNum }:any) {
    
    
    return (
        <ResultsBtns>
            <button onClick={() => setPageNum(pageNum = pageNum - 1)}
                disabled={pageNum === 1}>
            <img src={leftIcon} alt="left icon" />
            </button>
    
            <p>{pageNum}</p>
    
            <button title="Next Btn" onClick={() => setPageNum(pageNum = pageNum + 1)}
                disabled={pageNum === 100}>
                <img src={rightIcon} alt="right icon" />
            </button>
        </ResultsBtns>
    ) 
}

