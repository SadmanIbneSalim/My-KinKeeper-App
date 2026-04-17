import React from "react";
import { Link } from "react-router";


const Card = ({ FriendsData }) => {
  return (
    <Link to={`/home/cardDetails/${FriendsData.id}`} className="bg-white gap-3 shadow-xl text-center px-5 py-10 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:ring-1 hover:pointer-coarse:">
      <img
        className="w-20 mb-3 h-20 mx-auto rounded-full object-cover"
        src={FriendsData.picture}
        alt=""
      />
      <h2 className="text-lg font-bold">{FriendsData.name}</h2>
      <p className="text-neutral/60">{FriendsData.days_since_contact}d ago</p>

      <div className="md:flex w-fit mx-auto justify-between ">
        {FriendsData.tags.map((tag,index) => (
          <p key={index} className="bg-green-200/50 shadow  my-2 rounded-2xl px-2">{tag}</p>
        ))}
      </div>
      <p
        className={`w-fit mx-auto rounded-lg px-2 text-white shadow  mt-4 ${
          FriendsData.status === "overdue"
            ? "bg-red-800"
            : FriendsData.status === "almost due"
              ? "bg-yellow-600"
              : "bg-green-700"
        }`}
      >
        {FriendsData.status}
      </p>
    </Link>
  );
};

export default Card;
