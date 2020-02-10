import React, {useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


 const PlanetCardBox= styled.div`
width: 100%;
border: 1px solid red;
margin-top:3%;
  
`;

const PlanetCardBoxOne=styled(PlanetCardBox)`
 border: none;
 width: 100%;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
  img{
      margin-top: 2%;
      margin-left: 5%;
      margin-bottom: 2%;
  }
`;

const PlanetCardContainer=styled.div`
    width: 250px;
    margin: 1rem;
	display: flex;
    flex-direction: row ;
    flex-wrap: wrap;
	padding: 0 2rem 1rem;
`;

const PlanetTitle=styled.h1`
color: white;
text-align: center;
`;



const Planet=()=> {
 
   const photoArrayImg=[2,3,4,5,6,7,8,9,10,11];
 

  

    return(
        <PlanetCardBox>
        
        <PlanetTitle> Planets </PlanetTitle>
        
        <PlanetCardBoxOne>
         
        {photoArrayImg.map((i,id)=> (
           <img src={`https://starwars-visualguide.com/assets/img/planets/${i}.jpg`} key={id} alt=''/> ))}
         
         
        </PlanetCardBoxOne>
        </PlanetCardBox>
        
       );
}

export default Planet;