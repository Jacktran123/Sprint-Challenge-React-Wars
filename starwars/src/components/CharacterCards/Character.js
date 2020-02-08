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
   &:hover{
       background: lightblue;
   }
   
`;

const Character= (props)=>{
     
   return(
    <Card> 
       <CardBox>
        <Button> &lt; </Button>
        <img width='30%' src={props.url} alt='' />
        <Button> > </Button>
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
