import React from 'react';
// import reactstrap, { Card,CardImg, CardBody,Row, Col, CardTitle, CardText} from 'reactstrap';
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

 const CardText= styled(CardTitle)`
   color: #FFE300 ;
   float: left;
 `;

 const Button=styled.button`
  width: 10%;
  border-radius: 50%;
  font-size: 2rem;
  margin-left: 5%;
  margin-right: 3%;
   &:hover{
       background: lightblue;
   }
   
`;

const Starships= (props)=>{
     
   return(
    <Card> 
       <CardBox>
        <Button> &lt;</Button>
        <img width='40%' src={props.url} alt='' />
        <Button> > </Button>
       </CardBox>
       <CardBox>
        <CardTitle>  Name: {props.name} </CardTitle>
       </CardBox>
    </Card>
   
     
    );
}

export default Starships;