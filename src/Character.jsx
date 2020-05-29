import React, { useState, useEffect } from "react";
import axios from "axios";
import Film from './Film'

const Character = props => {
    let error;
    const [homeworld, setHomeworld] = useState(null);
    const [films, setFilms] = useState([])


    if(homeworld === null){return(<div>Loading Characters ...</div>)}
    return(
        <div>
            <p>Nombre:{props.results.name}</p>
            <p>Altura:{props.results.heigt}</p>
            <p>Peso:{props.results.mass}</p>
            <p>Año de nacimiento:{props.results.birth_year}</p>
            <p>Genero:{props.results.gender}</p>
            <p>Planeta de origen{props.results.homeworld}</p>
            <p>Peliculas{props.results.films}</p>
        </div>
    )
}

export default Character