import React, { use } from 'react';
import axios from "axios";
import Card from './Card';

const FriendsPromise = axios.get("/Friends.json");

const Cards = () => {
    const FriendsPromiseData=use(FriendsPromise);
    
    
    return (
        
            <div className='bg-base-200 mb-20'>
                <div className='max-w-277.5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 bg-base-200'>
            {
                FriendsPromiseData.data.map(FriendsData=> <Card key={FriendsData.id} FriendsData={FriendsData}></Card>)        
                    }
        </div>
            </div>
        
    );
};

export default Cards;