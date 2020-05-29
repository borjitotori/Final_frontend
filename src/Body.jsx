import React, { useState, useEffect } from "react";
import Character from './Character'

const Body = props => {
    return(
        <div>
            {props.characters1.map((ppl) => {
                return(<Character key={ppl.url} results={ppl}/>)
            })}
            {props.characters2.map((ppl)=>{
                return(<Character key={ppl.url} results={ppl}/>)
            })}
        </div>
    )
}

export default Body