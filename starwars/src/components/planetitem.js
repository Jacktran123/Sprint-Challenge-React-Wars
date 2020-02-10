import React,{useState, useEffect}  from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledCard = styled.div`
	width: 250px;
	background-color: rgba(255, 255, 255, 0.5);
	border: 1px solid rgba(0, 0, 0, 0.3);
	margin: 1rem;
	display: flex;
    flex-direction: column ;
    flex-wrap: wrap;
	padding: 0 2rem 1rem;
	h2 {
		text-align: start;
	}
	p {
        font-size: 1.2rem;
		margin: 0.2rem 0;
        text-align: start;
        color: black;
        font-weight: bold;
	}
`;
const PlanetItem= ({ post
})=>{
    const [photoArrayImg, setPhotoArrayImg]=useState([]);
  
    useEffect(()=>{
      axios
      .get('https://swapi.co/api/planets/')
      .then(res=>{
          let photoArray= res.data.results;
         let photoArrayOne= photoArray.map(e=>e.url.slice(29,-1));
         console.log('hello1', photoArrayOne)
         setPhotoArrayImg(photoArrayOne);})
    }, []);

	return (
        <StyledCard>
           <h2>{post.name}</h2>
           {photoArrayImg.map(i=> <img src={`https://starwars-visualguide.com/assets/img/planets/${i}.jpg`} alt=''/> )}
		   <p>Terrain: {post.terrain}</p>
		
		</StyledCard>
	);
};

export default PlanetItem;