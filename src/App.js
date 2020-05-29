import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from './Header'
import Body from './Body'
import BodyName from './BodyName'
import BodyFilm from './BodyFilm'
import Bottom from './Bottom'
import "./App.css";

function App() {
  let type = 0
  const endpoint = "https://swapi.dev/api/people/";
  const [characters1, setCharacters1] = useState([]);
  const [characters2, setCharacters2] = useState([]);
  const [filtered, setFiltered] = useState(null);
  const [filtered2, setFiltered2] = useState([])
  const [upper, setUpper] = useState(1)
  const [page, setPage] = useState(1);
  const [name, setName] = useState(null);
  const [episode, setEpisode] = useState(null);
  let error;
  useEffect (() => {
    axios
      .get(`${endpoint}?page=${page*2}`)
      .then((response) => {
        setCharacters2(response.data.results);
      })
      .catch((error_response) => {
        error = error_response;
        console.log(error);
      });

      axios
      .get(`${endpoint}?page=${(page*2)-1}`)
      .then((response) => {
        setCharacters1(response.data.results);
      })
      .catch((error_response) => {
        error = error_response;
        console.log(error);
      });
    return () => {};
  },[]);

  useEffect (() => {
    if(name===null){
      axios
      .get(`${endpoint}?page=${page*2}`)
      .then((response) => {
        setCharacters2(response.data.results);
      })
      .catch((error_response) => {
        error = error_response;
        console.log(error);
      });

      axios
      .get(`${endpoint}?page=${(page*2)-1}`)
      .then((response) => {
        setCharacters1(response.data.results);
      })
      .catch((error_response) => {
        error = error_response;
        console.log(error);
      });
    }

    return () => {};
  },[page]);

  useEffect (() => {
    if(name){
      axios
      .get(`${endpoint}?search=${name}&page=${page*2}`)
      .then((response) => {
        setFiltered(response.data.results);
      })
      .catch((error_response) => {
        error = error_response;
        console.log(error);
      });
      axios
      .get(`${endpoint}?search=${name}&page=${(page*2)-1}`)
      .then((response) => {
        setFiltered2(response.data.results);
      })
      .catch((error_response) => {
        error = error_response;
        console.log(error);
      });
    return () => {};
    }

  },[name, page]);

  const goBack = () => {
    type = 0
    setPage(1);
    setName(null);
    setFiltered(null);
    setEpisode(null);
  }

  const onSearch = (newName) => {
    type = 1
    setPage(1);
    setName(newName);
    console.log(newName);
    console.log(name);
    console.log(filtered);
  }

  const onEpisode = (episode) =>{
    type = 2
    setEpisode(episode)
  }

  const changePage = (updown) =>{
    if(characters1.length + characters2.length < 20){

      setUpper(0);
    }else if(name){
      if(filtered.length + filtered2.length < 20){
        setUpper(0);
      }else{
        setUpper(1);
      }
    }else{
      setUpper(1);
    }
    if(updown === 1){
      setPage(page+1);
    }else{
      setPage(page-1)
    }
    console.log(page)
  }

  if (characters1.length === 0 || characters2.length === 0) return <div>Loading...</div>
  if (error) {
    console.error(error);
    return <div>Error!!</div>;
  }

  return (
    <div>
      <Header onSearch={onSearch} goBack={goBack}/>
      {filtered === null ? 
      <Body characters1={characters1} characters2={characters2}/> 
      : 
      <BodyName filtered={filtered} filtered2={filtered2}/>
      }
      <Bottom page={page} changePage={changePage} upper={upper}/>
    </div>
  );
}

export default App;
