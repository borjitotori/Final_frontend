import React, { useState, useEffect } from "react";
import Character from './Character'

const BodyFilm = props => {
    return(
        <div>
            {props.filtered.map((ppl) => {
                return(<Character key={ppl.url} results={ppl}/>)
            })}
        </div>
    )
}

export default BodyFilm