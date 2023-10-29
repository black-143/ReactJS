import React, { useState } from "react";
import "./Cells.css"

function Cell({filled,onClick,isDisabled,label}){
    return <button
    type="button"
    disabled={isDisabled}
    aria-label={label}
    onClick={onClick}
    className={filled ?"cell cell-activated":"cell"}/>
}
const Cells=()=>{
    
    const [order,setOrder]=useState();
    const [isDeactivating,setIsDeactivating]=useState();

    const config=[
        [1,1,1],[1,0,1],[1,1,1]
    ]

    const deactivateCells=()=>{
        setIsDeactivating(true)
        const timer=setInterval(()=>{
                setOrder((origOrder)=>{
                    const newOrder = origOrder.slice()
                    newOrder.pop()

                    if(newOrder.length===0){
                        clearInterval(timer)
                    }

                    return newOrder
                })
        },300   )
    }
    const activateCells=(index)=>{
        const newOrder=[...order,index]
        setOrder(newOrder)

        if(order.length === config.flat(1).filter(Boolean).length){
            deactivateCells()
        }
    }
    return(
        <div className="wrapper">
            <div className="grid"
            style={{
                gridTemplateColumns:`repeat(${config[0].length},50px)`
            }}>
                {
                    config.flat(1).map((value,index)=>{
                        return value ? <Cell
                        key={index}
                        label={`Cell ${index}`}
                        filled={order.includes(index)}
                        onClick={()=>activateCells(i)}
                        isDisabled={order.includes(index) || isDeactivating}/>:<span/>
                    })
                }
            </div>
        </div>
    )
}
export default Cells;