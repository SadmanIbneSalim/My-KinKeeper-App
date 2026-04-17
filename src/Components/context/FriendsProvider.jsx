import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

const FriendsProvider = ({ children }) => {
    const [timeline, setTimeline] = useState(() => {
        const savedData = localStorage.getItem('my_timeline');
        return savedData ? JSON.parse(savedData) : [];
    });

    useEffect(() => {
        localStorage.setItem('my_timeline', JSON.stringify(timeline));
    }, [timeline]);

    const addToTimeline = (currentFriend, actionType) => {
        const newEntry = {
            ...currentFriend,
            entryId: Date.now(),
            actionType: actionType,
            actionDate: new Date().toLocaleString()
        };

        setTimeline([newEntry, ...timeline]); 
        toast.success(`${actionType} added to timeline!`);
    };

    const data = {
        timeline,
        handleCall: (friend) => addToTimeline(friend, 'Call'),
        handleText: (friend) => addToTimeline(friend, 'Text'),
        handleVideo: (friend) => addToTimeline(friend, 'Video'),
        setTimeline
    };

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendsProvider;