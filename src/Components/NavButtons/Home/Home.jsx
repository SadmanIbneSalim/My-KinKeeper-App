import React from 'react';
import Hero from '../../Hero/Hero';
import Cards from '../../Cards/Cards';
import SummaryCards from '../../Cards/SumaryCards';

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