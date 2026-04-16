import React, { createContext, useState } from 'react';

export const FriendContext = createContext();

const FriendsProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);

    // কমন ফাংশন: এটি কল, টেক্সট বা ভিডিও সব রেকর্ড রাখবে
    const addToTimeline = (currentFriend, actionType) => {
        const newEntry = {
            ...currentFriend,
            entryId: Date.now(), // ইউনিক আইডি যাতে টাইমলাইনে বারবার একই বন্ধুকে অ্যাড করা যায়
            actionType: actionType, // 'Call', 'Text', অথবা 'Video'
            actionDate: new Date().toLocaleString() // কখন করা হলো তার রেকর্ড
        };

        setTimeline([newEntry, ...timeline]); // নতুন এন্ট্রি সবার আগে থাকবে
        alert(`${actionType} added to timeline!`);
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