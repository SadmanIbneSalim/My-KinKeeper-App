import React from 'react';
import Card from './Card';

import { useLoaderData, useParams } from 'react-router';

import { Archive, BellRing, Delete,  MessageSquareMore, Phone, Video,  } from 'lucide-react';

const CardDetails = () => {
    const friends=useLoaderData();
   
    
    const {id}=useParams();
    const expectedFriend=friends.find(friend=>friend.id==id);
    
    
    
    return (
        <div className='bg-base-200'>
            <div className=' max-w-277.5 h-180 mx-auto grid grid-cols-14 grid-rows-14 y-5 gap-3 py-10 '>


               <div className="bg-white  text-center px-5 py-5  col-span-5 row-span-8 rounded-xl shadow  ">
      <img
        className="w-30 mb-3 h-30 mx-auto rounded-full object-cover"
        src={expectedFriend.picture}
        alt=""
      />
      <h2 className="text-xl font-bold">{expectedFriend.name}</h2>
      
      <p
        className={`w-fit mx-auto rounded-lg px-2 text-white shadow  my-2 ${
          expectedFriend.status === "overdue"
            ? "bg-red-800"
            : expectedFriend.status === "almost due"
              ? "bg-yellow-600"
              : "bg-green-700"
        }`}
      >
        {expectedFriend.status}
      </p>

      <div className="flex justify-center gap-4 ">
        {expectedFriend.tags.map((tag,index) => (
          <p key={index} className="bg-green-200/50 shadow my-2 rounded-2xl px-2">{tag}</p>
        ))}
      </div>
      <p className='text-neutral-600'>{expectedFriend.bio}</p>
      <p className='font-bold my-1'> Email: {expectedFriend.email}</p>
    </div>


                <div className='bg-white col-span-3 row-span-4 rounded-xl shadow p-5 text-center flex items-center  '>
                    <div className='space-y-2' >
                        <h1 className='text-5xl text-neutral-700 font-bold'>{expectedFriend.days_since_contact}</h1>
                    <h3 className='text-xl text-neutral-700'>Days Since Contact</h3>
                    </div>
                </div>



                <div className='bg-white  col-span-3 row-span-4 rounded-xl shadow p-5 flex justify-center items-center '>
                    <div className='space-y-2' >
                        <h1 className='text-5xl text-neutral-700 font-bold text-center'>{expectedFriend.goal}</h1>
                    <h3 className='text-xl text-neutral-700'>Goal(Days)</h3>
                    </div>
                </div>




                <div className='bg-white  col-span-3 row-span-4 rounded-xl shadow p-5 flex justify-center items-center text-center '>
                    <div className='space-y-2' >
                        <h1 className='text-3xl text-neutral-700 font-bold '>{expectedFriend.next_due_date}</h1>
                    <h3 className='text-xl text-neutral-700'>Goal(Days)</h3>
                    </div>
                </div>




                <div className='bg-white flex justify-between items-center col-span-9 row-span-4 rounded-xl shadow p-5 '>
                    <div className='space-y-4'>
                        <h3 className='text-xl text-[#244D3F]'>Relationship Goal</h3>
                        <h3 className='text-xl text-neutral-700'>Connect every <span className='text-black font-semibold'>30 days</span></h3>
                    </div>
                        <button className="btn btn-sm">Edit</button>
                </div>



                <div className='bg-white  col-span-5 row-span-2 rounded-xl shadow p-5 flex justify-center items-center transition-all duration-300 hover:scale-[1.02] hover:ring-2 hover:pointer-coarse: '>
                    <div>
                        <p className='text-xl  text-neutral-700  flex items-center gap-2 '><BellRing size={20} />Snooze 2 weeks</p></div>
                </div>



                <div className='bg-white  col-span-9 row-span-6 rounded-xl shadow p-5 '>
                    <p className='text-xl text-[#244D3F]'>Quick Check-In</p>
                    <div className=' my-10  flex justify-between'>
                        <button className=' border py-6 px-20 bg-neutral-200 rounded-xl transition-all duration-300 hover:scale-[1.02]  hover:pointer-coarse: cursor-grab active:cursor-grabbing'>
                            <Phone></Phone>
                            <h1>Call</h1>
                        </button>

                        <button className=' border py-6 px-20 bg-neutral-200 rounded-xl transition-all duration-300 hover:scale-[1.02]  hover:pointer-coarse: cursor-grab active:cursor-grabbing'>
                            <MessageSquareMore size={20} />
                            <h1>Text</h1>
                        </button>

                        <button className=' border py-6 px-20 bg-neutral-200 rounded-xl transition-all duration-300 hover:scale-[1.02]  hover:pointer-coarse: cursor-grab active:cursor-grabbing'>
                            <Video></Video>
                            <h1>Video</h1>
                        </button>
                    </div>
                </div>



                <div className='bg-white  col-span-5 row-span-2 rounded-xl shadow p-5 flex justify-center items-center transition-all duration-300 hover:scale-[1.02] hover:ring-2 hover:pointer-coarse:'>
                    <div>
                        <p className='text-xl  text-neutral-700  flex items-center gap-2 '><Archive size={20} />Archive</p></div>
                </div>



                <div className='bg-white  col-span-5 row-span-2 rounded-xl shadow p-5 flex justify-center items-center transition-all duration-300 hover:scale-[1.02] hover:ring-red-400 hover:pointer-coarse:'>
                    <div>
                        <p className='text-xl text-red-600  flex items-center gap-2 '><Delete size={20} />Delete</p></div>
                </div>
                
            </div>
            
        </div>
    );
};

export default CardDetails;