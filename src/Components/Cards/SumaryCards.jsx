import React from "react";

const SummaryCards = () => {
  return (
    <div className="bg-base-200 pb-10 ">
      <div className="max-w-277.5 mx-auto flex justify-between">
        <div className="bg-white w-60 py-8 shadow rounded-xl text-center flex justify-center items-center">
          <div>
            <h1 className="text-4xl font-bold">10</h1>
            <h3 className="text-xl text-neutral/60">Total Friends</h3>
          </div>
        </div>
        <div className="bg-white w-60 py-8 shadow rounded-xl text-center flex justify-center items-center">
          <div>
            <h1 className="text-4xl font-bold">3</h1>
            <h3 className="text-xl text-neutral/60">On Track</h3>
          </div>
        </div>
        <div className="bg-white w-60 py-8 shadow rounded-xl text-center flex justify-center items-center">
          <div>
            <h1 className="text-4xl font-bold">6</h1>
            <h3 className="text-xl text-neutral/60">Need Attention</h3>
          </div>
        </div>
        <div className="bg-white w-60 py-8 shadow rounded-xl text-center flex justify-center items-center">
          <div>
            <h1 className="text-4xl font-bold">12</h1>
            <h3 className="text-xl text-neutral/60">Interactions This Month</h3>
          </div>
        </div>
       
      </div>
        <hr className="text-neutral/10 shadow max-w-277.5 mx-auto mt-12" />
    </div>
  );
};

export default SummaryCards;
