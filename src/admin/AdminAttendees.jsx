import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFilter, faSearch, faEllipsisVertical, 
   faEnvelope, faIdCard, 
  faStar, faUserSlash, faDownload
} from "@fortawesome/free-solid-svg-icons";

const AdminAttendees = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const attendees = [
    { id: 1, name: "Ishan Sharma", email: "ishan@design.com", type: "VIP", score: 98, status: "Checked-in", lastActive: "2 mins ago", img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Meera Reddy", email: "meera.r@tech.in", type: "Speaker", score: 85, status: "Confirmed", lastActive: "1 hour ago", img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Rohan Varma", email: "rohanv@gmail.com", type: "General", score: 42, status: "Pending", lastActive: "Yesterday", img: "https://i.pravatar.cc/150?u=3" },
    { id: 4, name: "Ananya Goel", email: "ananya@startup.co", type: "VIP", score: 92, status: "Checked-in", lastActive: "Just now", img: "https://i.pravatar.cc/150?u=4" },
  ];

  const toggleSelect = (id) => {
    setSelectedUsers(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="p-4 lg:p-10 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      
      {/* ===== CRM STATS TOP BAR ===== */}
      <div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-center">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Guest Relations</h2>
          <p className="text-slate-500 font-medium">Monitoring {attendees.length} active participants for this cycle.</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="bg-white border border-slate-200 px-6 py-3 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="flex -space-x-3">
              {attendees.slice(0, 3).map(a => (
                <img key={a.id} src={a.img} className="w-8 h-8 rounded-full border-2 border-white" alt="avatar" />
              ))}
              <div className="w-8 h-8 rounded-full bg-indigo-50 border-2 border-white flex items-center justify-center text-[10px] font-black text-indigo-600">+12</div>
            </div>
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Live Check-ins</span>
          </div>
          <button className="bg-[#0F172A] text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-indigo-600 transition-all flex items-center gap-2">
            <FontAwesomeIcon icon={faDownload} /> Export
          </button>
        </div>
      </div>

      {/* ===== SEARCH & FILTER COMMAND BAR ===== */}
      <div className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <FontAwesomeIcon icon={faSearch} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" />
          <input 
            type="text" 
            placeholder="Search by name, email, or badge ID..." 
            className="w-full pl-14 pr-6 py-4 bg-slate-50/50 rounded-2xl outline-none focus:ring-2 ring-indigo-500/10 border border-transparent focus:border-indigo-100 transition-all font-medium text-sm"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-6 py-4 bg-slate-50 text-slate-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all">
            <FontAwesomeIcon icon={faFilter} className="mr-2" /> Filters
          </button>
          <button className="flex-1 md:flex-none px-6 py-4 bg-indigo-50 text-indigo-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all">
            View Map
          </button>
        </div>
      </div>

      {/* ===== ATTENDEE DATA GRID ===== */}
      <div className="grid grid-cols-1 gap-4">
        {attendees.map((person) => (
          <div 
            key={person.id}
            onClick={() => toggleSelect(person.id)}
            className={`group bg-white p-6 rounded-[2rem] border transition-all duration-300 cursor-pointer flex flex-col lg:flex-row items-center gap-8 ${
              selectedUsers.includes(person.id) ? "border-indigo-500 bg-indigo-50/30 ring-4 ring-indigo-500/5" : "border-slate-100 hover:border-indigo-200"
            }`}
          >
            {/* User Profile Info */}
            <div className="flex items-center gap-6 flex-1 min-w-0 w-full">
              <div className="relative shrink-0">
                <img src={person.img} className="w-16 h-16 rounded-2xl object-cover shadow-lg" alt="" />
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-4 border-white ${
                  person.status === 'Checked-in' ? 'bg-emerald-500' : 'bg-slate-300'
                }`} />
              </div>
              <div className="truncate">
                <h4 className="text-lg font-black text-slate-800 tracking-tight leading-tight">{person.name}</h4>
                <p className="text-slate-400 text-xs font-bold truncate">{person.email}</p>
              </div>
            </div>

            {/* Badge & Type */}
            <div className="flex items-center gap-12 w-full lg:w-auto justify-between lg:justify-end">
              <div className="text-center">
                <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.1em] ${
                  person.type === 'VIP' ? 'bg-amber-100 text-amber-600' : 
                  person.type === 'Speaker' ? 'bg-purple-100 text-purple-600' : 'bg-slate-100 text-slate-500'
                }`}>
                  {person.type}
                </span>
                <p className="text-[9px] font-black text-slate-300 mt-2 uppercase">Access Level</p>
              </div>

              {/* Engagement Score */}
              <div className="text-center min-w-[80px]">
                <div className="flex items-center justify-center gap-1 text-indigo-600">
                  <FontAwesomeIcon icon={faStar} className="text-[10px]" />
                  <span className="text-lg font-black italic">{person.score}</span>
                </div>
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-tighter">Engagement</p>
              </div>

              {/* Status & Last Active */}
              <div className="text-right min-w-[120px] hidden sm:block">
                <p className="text-sm font-black text-slate-700">{person.status}</p>
                <p className="text-[10px] font-bold text-slate-400">{person.lastActive}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-white hover:shadow-md hover:text-indigo-600 transition-all">
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
                <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-white hover:shadow-md hover:text-indigo-600 transition-all">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== FLOATING BULK COMMAND BAR ===== */}
      {selectedUsers.length > 0 && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-20 duration-500">
          <div className="bg-[#0F172A] text-white px-8 py-4 rounded-[2rem] shadow-2xl flex items-center gap-8 border border-white/10">
            <p className="text-sm font-black">
              <span className="text-indigo-400">{selectedUsers.length}</span> Guests Selected
            </p>
            <div className="h-6 w-[1px] bg-white/10" />
            <div className="flex gap-4">
              <button className="text-xs font-black uppercase tracking-widest hover:text-indigo-400 transition-all flex items-center gap-2">
                <FontAwesomeIcon icon={faIdCard} /> Print Badges
              </button>
              <button className="text-xs font-black uppercase tracking-widest hover:text-indigo-400 transition-all flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </button>
              <button className="text-xs font-black uppercase tracking-widest hover:text-rose-400 transition-all flex items-center gap-2">
                <FontAwesomeIcon icon={faUserSlash} /> Block
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAttendees;