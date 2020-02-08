import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [name,setName]= useState();
  const [url, setUrl]= useState('https://starwars-visualguide.com/assets/img/characters/1.jpg');
  const [gender,setGender]=useState();

  useEffect(()=>{
    axios
    .get('https://swapi.co/api/people/')
    .then(res=>{
      console.log(res);
      setName(res.data.results[0].name);
      setGender(res.data.results[0].gender)})
    .catch()
  },[]);


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars: Characters Guide</h1>
      <h1> {name} </h1> 
      <img  src={url}  alt='just an img'/>
      <h2> {gender} </h2>
    </div>
  );
}

export default App;
