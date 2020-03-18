import React from 'react';

import styled from 'styled-components';



const Card= styled.div`
   width: 100%;
   border: 1px solid red;
   display: flex;
   align-items: center;
 `;


 const CardBox=styled.div`
    width: 100%;
    
 `;


 const CardTitle= styled.h1`
  color: white;
  text-align: center;
 `;


 const Button=styled.button`
  width: 10%;
  border-radius: 50%;
  margin-left: 5%;
  margin-right: 3%;
  font-size: 1.5rem;
  color: white;
  -webkit-text-stroke: 5px lightblue;
   &:hover{
       background: lightblue;
   }
   
`;

const Starships= (props)=>{
    function minusIfLessThanZero(){
        if (props.valueOfShip > 0 ){
           
            return props.setValueOfShip(props.valueOfShip - 1 ) ;
        }
    };

    function addIfMoreThanTen(){
       if (props.valueOfShip < 9 ){
           
           return props.setValueOfShip(props.valueOfShip + 1) ;
       }
   };
   return(
    <Card> 
       <CardBox>
       <CardTitle>Starships</CardTitle>
        <Button onClick={ minusIfLessThanZero}> &lt;</Button>
        <img width='40%' src={props.url} alt='' />
        <Button onClick={addIfMoreThanTen}> > </Button>
       </CardBox>
       <CardBox>
        <CardTitle>  Name: {props.name} </CardTitle>
       </CardBox>
    </Card>
   
     
    );
}

export default Starships;