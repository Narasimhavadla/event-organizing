import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft, faChevronRight, faCalendarCheck, faClock, 
  faLocationDot, faPlus, faFilter, faLayerGroup,
  faCircle, faVideo, faMicrophone, faChampagneGlasses
} from "@fortawesome/free-solid-svg-icons";

const AdminCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState("March 2026");

  // Mock schedule data
  const schedule = [
    { day: 4, title: "Tech Summit", type: "Conference", color: "indigo" },
    { day: 12, title: "Gala Night", type: "Social", color: "rose" },
    { day: 12, title: "VIP Dinner", type: "Social", color: "amber" },
    { day: 24, title: "Music Fest", type: "Concert", color: "emerald" },
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-8 p-4 lg:p-10 animate-in fade-in zoom-in-95 duration-700">
      
      {/* ===== LEFT: CALENDAR GRID ===== */}
      <div className="flex-1 bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden">
        {/* CALENDAR HEADER */}
        <div className="p-8 flex items-center justify-between border-b border-slate-50">
          <div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tighter">{currentMonth}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">4 Events Scheduled</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button className="w-10 h-10 rounded-xl hover:bg-white text-slate-400 hover:text-indigo-600 transition-all">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="w-10 h-10 rounded-xl hover:bg-white text-slate-400 hover:text-indigo-600 transition-all">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
            <button className="bg-indigo-600 text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
              <FontAwesomeIcon icon={faPlus} /> New Slot
            </button>
          </div>
        </div>

        {/* DAYS HEADER */}
        <div className="grid grid-cols-7 bg-slate-50/50 border-b border-slate-50">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
            <div key={day} className="py-4 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {day}
            </div>
          ))}
        </div>

        {/* CALENDAR BODY */}
        <div className="grid grid-cols-7 border-r border-b border-slate-50">
          {Array.from({ length: 35 }).map((_, i) => {
            const dayNum = i - 2; // Offset for March 2026 starting on Sunday
            const dayEvents = schedule.filter(e => e.day === dayNum);
            
            return (
              <div key={i} className="min-h-[140px] p-4 border-l border-t border-slate-50 group hover:bg-slate-50/50 transition-all relative">
                <span className={`text-sm font-black ${dayNum > 0 && dayNum <= 31 ? 'text-slate-800' : 'text-slate-200'}`}>
                  {dayNum > 0 && dayNum <= 31 ? dayNum : ""}
                </span>

                <div className="mt-2 space-y-1">
                  {dayEvents.map((event, idx) => (
                    <div key={idx} className={`px-3 py-1.5 rounded-xl bg-${event.color}-50 border border-${event.color}-100 flex flex-col group/item cursor-pointer hover:shadow-lg hover:shadow-${event.color}-500/10 transition-all`}>
                      <span className={`text-[9px] font-black text-${event.color}-600 uppercase tracking-tighter truncate`}>
                        {event.title}
                      </span>
                      <div className="flex items-center gap-1 mt-0.5">
                        <FontAwesomeIcon icon={faCircle} className={`text-[4px] text-${event.color}-400`} />
                        <span className="text-[8px] font-bold text-slate-400">18:00</span>
                      </div>
                    </div>
                  ))}
                </div>

                {dayNum === 4 && (
                   <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== RIGHT: AGENDA SIDEBAR ===== */}
      <div className="w-full xl:w-96 space-y-6">
        <div className="bg-[#0F172A] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <h3 className="text-xl font-black mb-6 flex items-center gap-3">
             <FontAwesomeIcon icon={faClock} className="text-indigo-400" />
             Upcoming Slots
          </h3>
          
          <div className="space-y-6">
            {[
              { time: "Today, 14:00", title: "Speaker Soundcheck", icon: faMicrophone, color: "indigo" },
              { time: "Tomorrow, 09:00", title: "Main Stage Setup", icon: faLayerGroup, color: "emerald" },
              { time: "06 Mar, 10:30", title: "Live Streaming Test", icon: faVideo, color: "amber" }
            ].map((slot, i) => (
              <div key={i} className="flex gap-4 group/slot cursor-pointer">
                <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-${slot.color}-400 group-hover/slot:bg-white group-hover/slot:text-slate-900 transition-all duration-500`}>
                  <FontAwesomeIcon icon={slot.icon} />
                </div>
                <div>
                  <p className="text-xs font-black text-indigo-300 uppercase tracking-widest">{slot.time}</p>
                  <p className="text-sm font-bold text-white group-hover/slot:text-indigo-400 transition-colors">{slot.title}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-10 py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
             View Full Agenda
          </button>
        </div>

        {/* QUICK FILTERS CARD */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
           <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6 flex items-center gap-2">
             <FontAwesomeIcon icon={faFilter} className="text-indigo-600" />
             Categories
           </h4>
           <div className="space-y-3">
              {[
                { label: "Concerts", count: 12, color: "bg-emerald-500" },
                { label: "Corporate", count: 8, color: "bg-indigo-500" },
                { label: "Parties", count: 5, color: "bg-rose-500" }
              ].map((cat, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${cat.color}`}></div>
                    <span className="text-xs font-black text-slate-600">{cat.label}</span>
                  </div>
                  <span className="text-[10px] font-black bg-slate-100 px-2 py-1 rounded-lg text-slate-400 group-hover:bg-white group-hover:shadow-sm transition-all">{cat.count}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCalendar;