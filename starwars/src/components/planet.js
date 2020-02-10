import React, {useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlanetItem from './planetitem';

 const PlanetCardBox= styled.div`
width: 100%;
border: 1px solid red;
margin-top: 3%;

`;

const PlanetCardBoxOne=styled(PlanetCardBox)`
 border: none;
 width: 100%;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
`;

const PlanetTitle=styled.h1`
color: white;
text-align: center;
`;

const Planet=()=> {
   const [planet, setPlanet]=useState([]);
  const [photoArray, setPhotoArray]=useState([]);

   useEffect(()=>{
     axios
     .get('https://swapi.co/api/planets/')
     .then(res=>{
         const planetData= res.data.results;
         let photoArray= res.data.results;
        let photoArrayOne= photoArray.map(e=>e.url.slice(29,-1));
        setPhotoArray(photoArrayOne);
         setPlanet(planetData)});
   }, []);

    return(
        <PlanetCardBox>
        
        <PlanetTitle> Planets </PlanetTitle>
        
        <PlanetCardBoxOne>
         {planet.map((post,index)=>(
          <PlanetItem post={post}  key={index}/>))};
        
        </PlanetCardBoxOne>
        </PlanetCardBox>
        
       );
}

export default Planet;