import React, { useContext } from 'react';
import { FriendContext } from '../context/FriendsProvider';
import { useLoaderData, useParams } from 'react-router';
import { Archive, BellRing, Delete, MessageSquareMore, Phone, Video } from 'lucide-react';

const CardDetails = () => {
    const friends = useLoaderData();
    const { id } = useParams();
    const expectedFriend = friends.find(friend => friend.id == id);
    const { handleCall, handleText, handleVideo } = useContext(FriendContext);

    return (
        <div className='bg-base-200 min-h-screen py-6 px-4'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-14 lg:grid-rows-14 gap-3'>

                <div className="bg-white text-center px-5 py-5 col-span-1 sm:col-span-2 lg:col-span-5 lg:row-span-8 rounded-xl shadow">
                    <img
                        className="w-24 h-24 mb-3 mx-auto rounded-full object-cover"
                        src={expectedFriend.picture}
                        alt=""
                    />
                    <h2 className="text-xl font-bold">{expectedFriend.name}</h2>
                    <p className={`w-fit mx-auto rounded-lg px-2 text-white shadow my-2 ${
                        expectedFriend.status === "overdue" ? "bg-red-800"
                        : expectedFriend.status === "almost due" ? "bg-yellow-600"
                        : "bg-green-700"
                    }`}>
                        {expectedFriend.status}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {expectedFriend.tags.map((tag, index) => (
                            <p key={index} className="bg-green-200/50 shadow my-1 rounded-2xl px-2">{tag}</p>
                        ))}
                    </div>
                    <p className='text-neutral-600 mt-2'>{expectedFriend.bio}</p>
                    <p className='font-bold my-1'>Email: {expectedFriend.email}</p>
                </div>

                <div className='bg-white col-span-1 lg:col-span-3 lg:row-span-4 rounded-xl shadow p-5 flex items-center justify-center'>
                    <div className='space-y-2 text-center'>
                        <h1 className='text-4xl sm:text-5xl text-neutral-700 font-bold'>{expectedFriend.days_since_contact}</h1>
                        <h3 className='text-lg sm:text-xl text-neutral-700'>Days Since Contact</h3>
                    </div>
                </div>



                <div className='bg-white col-span-1 lg:col-span-3 lg:row-span-4 rounded-xl shadow p-5 flex justify-center items-center'>
                    <div className='space-y-2 text-center'>
                        <h1 className='text-4xl sm:text-5xl text-neutral-700 font-bold'>{expectedFriend.goal}</h1>
                        <h3 className='text-lg sm:text-xl text-neutral-700'>Goal (Days)</h3>
                    </div>
                </div>



                <div className='bg-white col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-4 rounded-xl shadow p-5 flex justify-center items-center text-center'>
                    <div className='space-y-2'>
                        <h1 className='text-2xl sm:text-3xl text-neutral-700 font-bold'>{expectedFriend.next_due_date}</h1>
                        <h3 className='text-lg sm:text-xl text-neutral-700'>Next Due Date</h3>
                    </div>
                </div>

                

                <div className='bg-white flex justify-between items-center col-span-1 sm:col-span-2 lg:col-span-9 lg:row-span-4 rounded-xl shadow p-5'>
                    <div className='space-y-2'>
                        <h3 className='text-lg sm:text-xl text-[#244D3F]'>Relationship Goal</h3>
                        <h3 className='text-lg sm:text-xl text-neutral-700'>
                            Connect every <span className='text-black font-semibold'>30 days</span>
                        </h3>
                    </div>
                    <button className="btn btn-sm">Edit</button>
                </div>

                

                <div className='bg-white col-span-1 lg:col-span-5 lg:row-span-2 rounded-xl shadow p-5 flex justify-center items-center transition-all duration-300 hover:scale-[1.02] hover:ring-2 cursor-pointer'>
                    <p className='text-lg sm:text-xl text-neutral-700 flex items-center gap-2'>
                        <BellRing size={20} />Snooze 2 weeks
                    </p>
                </div>

                
                
                <div className='bg-white col-span-1 sm:col-span-2 lg:col-span-9 lg:row-span-6 rounded-xl shadow p-5'>
                    <p className='text-lg sm:text-xl text-[#244D3F] mb-4'>Quick Check-In</p>
                    <div className='flex flex-wrap justify-around gap-4'>
                        <button onClick={() => handleCall(expectedFriend)}
                            className='flex-1 min-w-20 border py-4 px-4 bg-neutral-200 rounded-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center gap-2'>
                            <Phone />
                            <span>Call</span>
                        </button>
                        <button onClick={() => handleText(expectedFriend)}
                            className='flex-1 min-w-20 border py-4 px-4 bg-neutral-200 rounded-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center gap-2'>
                            <MessageSquareMore size={20} />
                            <span>Text</span>
                        </button>
                        <button onClick={() => handleVideo(expectedFriend)}
                            className='flex-1 min-w-20 border py-4 px-4 bg-neutral-200 rounded-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center gap-2'>
                            <Video />
                            <span>Video</span>
                        </button>
                    </div>
                </div>

                
                <div className='bg-white col-span-1 lg:col-span-5 lg:row-span-2 rounded-xl shadow p-5 flex justify-center items-center transition-all duration-300 hover:scale-[1.02] hover:ring-2 cursor-pointer'>
                    <p className='text-lg sm:text-xl text-neutral-700 flex items-center gap-2'>
                        <Archive size={20} />Archive
                    </p>
                </div>

                
                <div className='bg-white col-span-1 lg:col-span-5 lg:row-span-2 rounded-xl shadow p-5 flex justify-center items-center transition-all duration-300 hover:scale-[1.02] hover:ring-red-400 cursor-pointer'>
                    <p className='text-lg sm:text-xl text-red-600 flex items-center gap-2'>
                        <Delete size={20} />Delete
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CardDetails;