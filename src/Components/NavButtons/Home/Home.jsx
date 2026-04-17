import React, { Suspense } from 'react';
import Hero from '../../Hero/Hero';
import Cards from '../../Cards/Cards';
import SummaryCards from '../../Cards/SummaryCards';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <SummaryCards></SummaryCards>
            
            

            <Suspense fallback={
                <div className="flex justify-center items-center min-h-100">
                    <span className="loading loading-bars loading-xl text-success"></span>
                </div>
            }>
                <Cards />
            </Suspense>
            
        </div>
    );
};

export default Home;