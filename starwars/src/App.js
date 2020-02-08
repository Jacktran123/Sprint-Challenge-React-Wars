import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from "./components/CharacterCards/Character";
import Starships from "./components/StarshipCard/Starships";

const App = () => {
  const [height,setHeight]=useState();
  const [home, setHome]=useState();
  const [mass, setMass]=useState();
  const [name,setName]= useState();
  const [url, setUrl]= useState('https://starwars-visualguide.com/assets/img/characters/1.jpg');
  const [gender,setGender]=useState();
  const [shipName,setShip]=useState();

  useEffect(()=>{
    axios
    .get('https://swapi.co/api/people/')
    .then(res=>{
      console.log(res);
      setName(res.data.results[0].name);
      setHeight(res.data.results[0].height);
      setMass(res.data.results[0].mass);
      setGender(res.data.results[0].gender)})
    .catch(err=> console.log(err))


  },[]);

  useEffect(()=>{
    axios
    .get('https://swapi.co/api/planets/')
    .then(res=> {
      console.log('planet', res);
      setHome(res.data.results[0].name)})
  },[])

  useEffect(()=>{
    axios
    .get('https://swapi.co/api/starships/')
    .then(res=> 
     setShip(res.data.results[0].name))
  },[])


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
       
      <h1 className="Header">Star Wars: Matching Game</h1>
      <h2 className='instruction'> Instruction: Use the arrow to match characters with their vehicle. If correct, border's color will turn green. </h2>
      <Character height={height} home={home} name={name} url={url} gender={gender} mass={mass} />
      <br></br> 
      <Starships url={'https://starwars-visualguide.com/assets/img/starships/10.jpg'} name={shipName} />
    </div>
  );
}

export default App;
