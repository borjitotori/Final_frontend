import React, { useState, useEffect } from "react";

const Header = props => {
    return(
        <div>
            <button onClick={()=>props.goBack()}>⤶</button>
            <div>
                <input id="name" placeholder="Character name" />
                <button onClick={()=>props.onSearch(document.getElementById("name").value)}>Search</button>
            </div>
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </div>
        </div>
    )
}

export default Header