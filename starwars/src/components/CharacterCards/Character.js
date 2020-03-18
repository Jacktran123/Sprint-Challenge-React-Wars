import React from 'react';
import styled from 'styled-components';

const Card= styled.div`
   width: 100%;
   border: 1px solid red;
   display: flex;
 `;


 const CardBox=styled.div`
    width: 100%;
  `;


 const CardTitle= styled.h1`
  color: white;
   `;

 const CardText= styled.p`
   color: white;
   display:block;
   font-size: 2rem;
   
 `;

const Button=styled.button`
  width: 10%;
  border-radius: 50px;
  font-size: 2rem;
  margin-left: 3%;
  margin-right: 3%;
  color: white;
  -webkit-text-stroke: 5px lightblue;
   &:hover{
       background: lightblue;
   }
`;

const Character= (props)=>{
     function minusIfLessThanZero(){
         if (props.value > 0 && props.num > 0){
             props.setNum(props.num- 1 );
              props.setValue(props.value -1 ) ;
         }
     };

     function addIfMoreThanTen(){
        if (props.value < 9 && props.num <= 9 ){
           props.setNum(props.num + 1 );
         props.setValue(props.value + 1) ;
    }
  };
   return(
    <Card> 
       <CardBox>
         <CardTitle>Characters</CardTitle>
        <Button onClick={minusIfLessThanZero} > &lt; </Button>
        <img width='30%' src={props.url} alt='' />
        <Button onClick={addIfMoreThanTen}> > </Button>
       </CardBox>
       <CardBox>
        <CardTitle> {props.name} </CardTitle>
        <CardText> <span style={{color: "yellow"}}> Gender : </span> {props.gender} </CardText>
        <CardText> <span style={{color: "yellow"}}>  Height: </span> {props.height} </CardText>
        <CardText> <span style={{color: "yellow"}}>  Mass: </span> {props.mass} </CardText>
        <CardText> <span style={{color: "yellow"}}> Homeworld : </span> {props.home} </CardText>
   
       </CardBox>
    </Card>
    );
   }

export default Character;