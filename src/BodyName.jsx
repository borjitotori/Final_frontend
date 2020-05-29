import React, { useState, useEffect } from "react";
import Character from './Character'

const BodyName = props => {
    return(
        <div>
            {props.filtered.map((ppl) => {
                return(<Character key={ppl.url} results={ppl}/>)
            })}
            {props.filtered2.map((ppl) => {
                return(<Character key={ppl.url} results={ppl}/>)
            })}
        </div>
    )
}

export default BodyName