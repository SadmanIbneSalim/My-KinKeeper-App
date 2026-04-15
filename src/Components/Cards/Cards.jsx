import React, { use } from 'react';
import axios from "axios";
import Card from './Card';

const FriendsPromise = axios.get("/Friends.json");

const Cards = () => {
    const FriendsPromiseData=use(FriendsPromise);
    
    
    return (
        <div className='max-w-277.5 mx-auto bg-base-200'>
            {
                FriendsPromiseData.data.map(FriendsData=> <Card key={FriendsData.id} FriendsData={FriendsData}></Card>)        
                    }
        </div>
    );
};

export default Cards;