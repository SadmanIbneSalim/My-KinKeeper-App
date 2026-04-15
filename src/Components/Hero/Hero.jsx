import React from "react";
import { Plus } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-base-200">
      <div className="hero  py-20">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
            <p className="py-6 max-w-xl mx-auto text-neutral/60">
              Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
            </p>
            <button className="btn bg-[#244D3F] text-white rounded-lg hover: shadow-2xl"><Plus size={20}/>Add a Friend</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
