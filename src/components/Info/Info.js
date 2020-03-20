import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {General, InfoContent} from '../../data/dataStore';


const Info = () => (
  <Container> 
    <Hero titleText={InfoContent.title} image={General.image} />
    {InfoContent.text}
  
  </Container>
);

export default Info;