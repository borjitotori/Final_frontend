import React, { useState, useEffect } from "react";

const Bottom = props => {
    return(
        <div>
            {props.page === 1 ? null : <button onClick={()=>props.changePage(0)}>←</button>}
            {props.upper === 0 ? null : <button onClick={()=>props.changePage(1)}>→</button>}
            
        </div>
    )
}

export default Bottom