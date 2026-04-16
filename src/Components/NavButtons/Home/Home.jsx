import React from 'react';
import Hero from '../../Hero/Hero';
import Cards from '../../Cards/Cards';
import SummaryCards from '../../Cards/SummaryCards';
import CardDetails from '../../Cards/CardDetails';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <SummaryCards></SummaryCards>
            
            <Cards></Cards>
            
        </div>
    );
};

export default Home;