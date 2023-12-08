import { useEffect, useState } from "react";
import '../App.css';


const getNextPageArray = (arrayLength , startNum) => {
    return [...Array(10)].map((item , idx) => {
       return startNum+idx+1;
    })
}
const Pagination = ({totalPages , fetchData}) =>{
    const totalPageButtons = 10;
    const pageArray = getNextPageArray(totalPageButtons , 0);

    const[pages , setPages] = useState(pageArray);

    const[activePage , setActivePage] = useState(1);


    useEffect(()=>{
       fetchData(activePage);
       if(activePage > pages[pages.length-1]){
        const startNum = activePage - 1;
        const newArray = getNextPageArray(totalPageButtons , startNum);
        setPages(newArray);
       }
       if(activePage < pages[0]){
        const startNum = activePage-totalPageButtons;
        const newArray = getNextPageArray(totalPageButtons , startNum);
        setPages(newArray);
       }
    } , [activePage]);
    
    return(
        <div className="pagination-container">
            <button onClick={()=>{setActivePage(activePage-1)}} disabled={activePage===1}>Prev</button>
            {
                pages?.map((pageNumber) => {
                    return (<button className={activePage === pageNumber ? 'selected' : ''} onClick={() => setActivePage(pageNumber)}>{pageNumber}</button>
)
                })
            }
            <button onClick={()=>{setActivePage(activePage+1)}} >Next</button>
        </div>
    )
}

export default Pagination;