import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {General, FaqContent} from '../../data/dataStore';
const FAQ = () => (
  <Container>
    <Hero titleText={FaqContent.title} image={General.image} />
    {FaqContent.text}
    
  </Container>
);
export default FAQ;