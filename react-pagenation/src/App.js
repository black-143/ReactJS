import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const[items,setItems]=useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30 ])

    const[pageSize,setPageSize]=useState(5);
    const[currentPage,setCurrentPage]=useState(0);
    const[currentItems,setCurretItems]=useState(items.slice(0,pageSize));
    const[pageCount,setPageCount]=useState(Math.ceil(items.length/pageSize))

    const onPageChange=(index)=>{
        setCurrentPage(index);
        let currentItems=items.slice(currentPage*pageSize,pageSize*(currentPage+1))
        setCurretItems(currentItems)
    }

    useEffect(()=>{
        onPageChange(0);
    },[pageSize])
    return(
        <div>

        <h1>React Pagenation</h1>
        <table>
            <tr>
                <th>S.No</th>
                <th>Name</th>
            </tr>
            {currentItems.length >0 && currentItems.map((item,index)=>(
                <tr key={index}>
                    <td>{item}</td>
                    <td> User {item}</td>
                </tr>
            ))}
            {/* Pagenation */}
            
        </table>
        <div>
            <button onClick={()=>onPageChange(0)}>First</button>
                <button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage===0}>Prev</button>
                    {Array(pageCount).fill(null).map((page,index)=>(
                        <button className={`${currentPage === index ?'active-btn':''}`} key={index} onClick={()=>onPageChange(index)}>{index+1}</button>
                    ))}
                <button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage===pageCount-1}>Next</button>
            <button onClick={()=>onPageChange(pageCount-1)}>Next</button>
            <select value={pageSize} onChange={(e)=>
                setPageSize(parseInt(e.target.value),
                setPageCount(Math.ceil(items.length/parseInt(e.target.value))))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                
            </select>
            </div>
        </div>
    )
}
