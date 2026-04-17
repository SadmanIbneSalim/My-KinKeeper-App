import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { FriendContext } from '../../context/FriendsProvider';

const Stats = () => {
    const { timeline } = useContext(FriendContext);


    const dataCounts = timeline.reduce((acc, entry) => {
        acc[entry.actionType] = (acc[entry.actionType] || 0) + 1;
        return acc;
    }, { Call: 0, Text: 0, Video: 0 });

   
    const data = [
        { name: 'Call', value: dataCounts.Call, color: '#3b82f6' }, 
        { name: 'Text', value: dataCounts.Text, color: '#22c55e' },  
        { name: 'Video', value: dataCounts.Video, color: '#a855f7' } 
    ];

    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10 text-[#244D3F]'>Friendship Analytics</h1>
            <div className="p-6 bg-white rounded-xl shadow-sm max-w-277.5 mx-auto ">
            
            <h2 className="text-2xl  mb-6 text-[#244D3F]">By Interaction Type</h2>
            
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius="60%"  
                            outerRadius="80%"
                            paddingAngle={5}    
                            cornerRadius={10}   
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36}/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
        </div>
    );
};

export default Stats;