import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from "./components/CharacterCards/Character";
import Starships from "./components/StarshipCard/Starships";
import Planet from "./components/planet";

const App = () => {
  const [height,setHeight]=useState();
  const [value,setValue]=useState(0);
  const [valueOfShip,setValueOfShip]=useState(0);
  const [home, setHome]=useState();
  const [mass, setMass]=useState();
  const [name,setName]= useState();
  const [gender,setGender]=useState();
  const [shipName,setShip]=useState();
  const [num,setNum]=useState(1);
  const [numShip, setNumShip]=useState(15);
  const [url, setUrl]= useState(`https://starwars-visualguide.com/assets/img/characters/${num}.jpg`);
  const [shipUrl, setShipUrl]= useState(`https://starwars-visualguide.com/assets/img/starships/${numShip}.jpg`);
  


  useEffect(()=>{
    axios
    .get(`https://swapi.co/api/people/`)
    .then(res=>{
      console.log(res);
      setName(res.data.results[value].name);
      setHeight(res.data.results[value].height);
      setMass(res.data.results[value].mass);
      setGender(res.data.results[value].gender)})
      .catch(err=> console.log(err))
      setUrl(`https://starwars-visualguide.com/assets/img/characters/${num}.jpg`);
},[value]);


  useEffect(()=>{
    axios
    .get('https://swapi.co/api/planets/')
    .then(res=> {
      console.log('planet', res);
      setHome(res.data.results[value].name)})
  },[value])

  useEffect(()=>{
    axios
    .get('https://swapi.co/api/starships/')
    .then(res=> {
     setShip(res.data.results[valueOfShip].name);
     setNumShip( res.data.results[valueOfShip].url.slice( 31,-1))})
      
},[valueOfShip])

useEffect(()=>{
setShipUrl(`https://starwars-visualguide.com/assets/img/starships/${numShip}.jpg`);
}, [numShip])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  

  return (
    <div className="App">
       
      <h1 className="Header">Star Wars: The Library</h1>
      <h2 className='instruction'> Instruction: Use the arrow to see all characters, starships, and planets within the Star War universe. </h2>
      <Character setValue={setValue} setUrl={setUrl} value={value} height={height} home={home} name={name} url={url} gender={gender} mass={mass} num={num}  setNum={setNum} />
      <br></br> 
      <Starships url={shipUrl} name={shipName} setValueOfShip={setValueOfShip} valueOfShip={valueOfShip} numShip={numShip} setNumShip={setNumShip} />
      <Planet />
    </div>
  );
}

export default App;
