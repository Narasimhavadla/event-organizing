import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical, faCircle, faLocationDot, faClock, 
  faPlus, faArrowUpRightFromSquare, faPenToSquare, 
  faChartPie, faBolt, faGlobe, faShieldHeart
} from "@fortawesome/free-solid-svg-icons";

const AdminLiveEvents = () => {
  const [filter, setFilter] = useState("All");

  const events = [
    {
      id: 1,
      title: "Summer Music Festival 2026",
      status: "Live",
      category: "Concert",
      location: "Grand Arena, NY",
      time: "18:00 - 23:00",
      sold: 850,
      total: 1000,
      revenue: "₹12,50,000",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      title: "Global Tech Summit",
      status: "Upcoming",
      category: "Conference",
      location: "Silicon Valley Hub",
      time: "09:00 - 17:00",
      sold: 420,
      total: 500,
      revenue: "₹4,20,000",
      image: "https://images.unsplash.com/photo-1540575861501-7ad05823c951?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      title: "Charity Gala Dinner",
      status: "Live",
      category: "Charity",
      location: "The Ritz Carlton",
      time: "19:30 - 22:30",
      sold: 195,
      total: 200,
      revenue: "₹9,75,000",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="p-2 lg:p-4 space-y-8 bg-[#F8FAFC] min-h-screen">
      
      {/* ===== INTERACTIVE GLASS HEADER ===== */}
      <div className="sticky top-20 z-30 backdrop-blur-md bg-white/70 border border-white shadow-xl shadow-slate-200/50 rounded-[2.5rem] p-6 flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-500">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 animate-bounce-slow">
            <FontAwesomeIcon icon={faBolt} className="text-2xl" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Real-time Stream</h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Global Event Monitoring</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 bg-slate-100/50 p-2 rounded-3xl border border-slate-200/50">
          {["All", "Live", "Upcoming","Past"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-3 rounded-2xl text-xs font-black transition-all duration-300 ${
                filter === t 
                ? "bg-white text-indigo-600 shadow-md scale-105" 
                : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {t}
            </button>
          ))}
          <button className="bg-indigo-600 text-white w-12 h-12 rounded-2xl shadow-lg shadow-indigo-200 hover:rotate-90 transition-all duration-500 group">
            <FontAwesomeIcon icon={faPlus} className="group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>

      {/* ===== DYNAMIC EVENT GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 gap-8">
        {events.filter(e => filter === "All" || e.status === filter).map((event) => (
          <div 
            key={event.id} 
            className="group relative bg-white rounded-[3rem] p-4 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* LIVE PULSE EFFECT (Only for Live status) */}
            {event.status === 'Live' && (
              <div className="absolute inset-0 bg-indigo-500/5 rounded-[3rem] animate-pulse-slow -z-10 blur-xl"></div>
            )}

            {/* Media Container */}
            <div className="relative h-64 w-full rounded-[2.5rem] overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Status Floating Badge */}
              <div className="absolute top-6 left-6">
                <div className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl backdrop-blur-xl border border-white/20 text-[10px] font-black uppercase tracking-widest ${
                  event.status === 'Live' ? 'bg-indigo-600/90 text-white' : 'bg-slate-900/90 text-white'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${event.status === 'Live' ? 'bg-white animate-ping' : 'bg-slate-400'}`} />
                  {event.status}
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="text-white">
                  <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-tighter">{event.category}</span>
                  <h3 className="text-lg font-black leading-tight tracking-tight">{event.title}</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl border border-white/20 text-white hover:bg-white hover:text-indigo-600 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between text-slate-400">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
                  <FontAwesomeIcon icon={faLocationDot} className="text-indigo-500 text-xs" />
                  <span className="text-[11px] font-black uppercase">{event.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
                  <FontAwesomeIcon icon={faClock} className="text-indigo-500 text-xs" />
                  <span className="text-[11px] font-black uppercase">{event.time}</span>
                </div>
              </div>

              {/* Advanced Progress Bar */}
              <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 relative group/progress overflow-hidden">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inventory Capacity</span>
                  <span className="text-sm font-black text-slate-800">
                    {Math.round((event.sold/event.total)*100)}%
                  </span>
                </div>
                <div className="h-4 w-full bg-white rounded-full p-1 border border-slate-200">
                  <div 
                    className={`h-full rounded-full transition-all duration-[2000ms] ease-out ${
                      event.status === 'Live' ? 'bg-gradient-to-r from-indigo-500 to-indigo-700' : 'bg-slate-300'
                    }`}
                    style={{ width: `${(event.sold / event.total) * 100}%` }}
                  >
                    <div className="w-full h-full opacity-30 bg-[length:20px_20px] bg-[linear-gradient(45deg,rgba(255,255,255,.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.2)_50%,rgba(255,255,255,.2)_75%,transparent_75%,transparent)] animate-slide" />
                  </div>
                </div>
                <div className="flex justify-between mt-3 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                   <span>{event.sold} Sold</span>
                   <span>{event.total} Total</span>
                </div>
              </div>

              {/* Action Footer */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Total Yield</p>
                  <p className="text-2xl font-black text-slate-800 tracking-tighter italic">{event.revenue}</p>
                </div>
                <div className="flex gap-3">
                  <button className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all duration-300 flex items-center justify-center border border-transparent hover:border-rose-100 active:scale-90">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-black text-[11px] tracking-widest uppercase hover:bg-indigo-700 shadow-lg shadow-indigo-100 hover:shadow-indigo-300 transition-all flex items-center gap-3 group active:scale-95">
                    <FontAwesomeIcon icon={faChartPie} className="group-hover:rotate-180 transition-transform duration-700" />
                    Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide {
          from { background-position: 0 0; }
          to { background-position: 40px 0; }
        }
        .animate-slide {
          animation: slide 2s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.05); opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default AdminLiveEvents;