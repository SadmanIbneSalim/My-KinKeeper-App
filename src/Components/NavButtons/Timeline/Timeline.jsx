import React, { useContext, useState } from "react"; 
import { FriendContext } from "../../context/FriendsProvider";
import {
  Phone,
  MessageSquareMore,
  Video,
  Clock,
  ChevronDown,
  ListFilter,
} from "lucide-react";

const Timeline = () => {
  const { timeline } = useContext(FriendContext);

  const [filter, setFilter] = useState("All");
  const filteredTimeline = timeline.filter((entry) => {
    if (filter === "All") return true;
    return entry.actionType === filter;
  });

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <Phone size={18} className="text-blue-500" />;
      case "Text":
        return <MessageSquareMore size={18} className="text-green-500" />;
      case "Video":
        return <Video size={18} className="text-purple-500" />;
      default:
        return <Clock size={18} />;
    }
  };

  return (
    <div className="">
      <div className="p-6 max-w-277.5 mx-auto rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-[#244D3F]">Timeline</h3>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm btn-outline border-gray-300 gap-2"
            >
              <ListFilter size={16} />
              {filter === "All" ? "All Activity" : filter}
              <ChevronDown size={14} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-xl border border-gray-100"
            >
              <li>
                <a
                  onClick={() => setFilter("All")}
                  className={filter === "All" ? "active" : ""}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  onClick={() => setFilter("Call")}
                  className={filter === "Call" ? "active" : ""}
                >
                  Call
                </a>
              </li>
              <li>
                <a
                  onClick={() => setFilter("Text")}
                  className={filter === "Text" ? "active" : ""}
                >
                  Text
                </a>
              </li>
              <li>
                <a
                  onClick={() => setFilter("Video")}
                  className={filter === "Video" ? "active" : ""}
                >
                  Video
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          {filteredTimeline.length === 0 ? (
            <p className="text-neutral-500 text-center py-20 text-xl">
              No {filter !== "All" ? filter : ""} activity found yet.
            </p>)
             : 
             (filteredTimeline.map((entry) => (
              <div key={entry.entryId}
                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <img
                    src={entry.picture}
                    alt={entry.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div>
                    <h4 className="font-bold text-neutral-800">{entry.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      {getIcon(entry.actionType)}
                      <span>{entry.actionType} established</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-neutral-400 flex items-center gap-1">
                    <Clock size={12} />
                    {entry.actionDate.split(",")[1]}
                  </p>
                  <p className="text-[10px] text-neutral-300">
                    {entry.actionDate.split(",")[0]}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
