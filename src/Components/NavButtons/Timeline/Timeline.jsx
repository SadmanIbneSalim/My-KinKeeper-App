import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendsProvider';
import { Phone, MessageSquareMore, Video, Clock } from 'lucide-react';

const Timeline = () => {
    // আমরা FriendsProvider থেকে timeline অ্যারিটি নেব
    const { timeline } = useContext(FriendContext);

    // আইকন ডিক্লেয়ার করার একটি সহজ ফাংশন
    const getIcon = (type) => {
        switch (type) {
            case 'Call': return <Phone size={18} className="text-blue-500" />;
            case 'Text': return <MessageSquareMore size={18} className="text-green-500" />;
            case 'Video': return <Video size={18} className="text-purple-500" />;
            default: return <Clock size={18} />;
        }
    };

    return (
        <div className="p-6 bg-base-100 rounded-xl shadow-inner min-h-[400px]">
            <h3 className="text-2xl font-bold mb-6 text-[#244D3F]">Activity Timeline</h3>
            
            <div className="space-y-4">
                {timeline.length === 0 ? (
                    <p className="text-neutral-500 text-center py-10">No recent activity yet.</p>
                ) : (
                    timeline.map((entry) => (
                        <div 
                            key={entry.entryId} 
                            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
                        >
                            <div className="flex items-center gap-4">
                                {/* প্রোফাইল পিকচার */}
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

                            {/* সময় দেখানোর অংশ */}
                            <div className="text-right">
                                <p className="text-xs font-medium text-neutral-400 flex items-center gap-1">
                                    <Clock size={12} />
                                    {entry.actionDate.split(',')[1]} {/* শুধু সময়টুকু দেখানোর জন্য */}
                                </p>
                                <p className="text-[10px] text-neutral-300">
                                    {entry.actionDate.split(',')[0]} {/* তারিখটুকু নিচে ছোট করে */}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Timeline;