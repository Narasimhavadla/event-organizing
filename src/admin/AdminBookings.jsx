import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSearch, faFilter, faDownload, faTicket, 
  faCircleCheck, faClock, faCircleXmark, faEllipsisVertical,
  faArrowUpRightFromSquare, faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const bookingData = [
  { id: "BK-9901", customer: "Liam Neeson", event: "Tech Summit 2026", date: "Mar 05, 2026", amount: "$250.00", status: "Confirmed", type: "VIP" },
  { id: "BK-9902", customer: "Emma Watson", event: "Jazz Night", date: "Mar 04, 2026", amount: "$45.00", status: "Pending", type: "General" },
  { id: "BK-9903", customer: "Noah Centineo", event: "Art Expo", date: "Mar 04, 2026", amount: "$120.00", status: "Confirmed", type: "Premium" },
  { id: "BK-9904", customer: "Sophia Lillis", event: "Tech Summit 2026", date: "Mar 03, 2026", amount: "$250.00", status: "Cancelled", type: "VIP" },
  { id: "BK-9905", customer: "Oscar Isaac", event: "Music Fest", date: "Mar 03, 2026", amount: "$85.00", status: "Confirmed", type: "General" },
];

export default function AdminBookings() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusStyle = (status) => {
    switch (status) {
      case "Confirmed": return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "Pending": return "bg-amber-50 text-amber-600 border-amber-100";
      case "Cancelled": return "bg-rose-50 text-rose-600 border-rose-100";
      default: return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* 1. TOP STATS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Bookings", value: "1,284", icon: faTicket, color: "text-indigo-600", bg: "bg-indigo-50" },
          { label: "Pending Approval", value: "14", icon: faClock, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Revenue Growth", value: "+22.5%", icon: faCircleCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5">
            <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center text-xl`}>
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <h4 className="text-2xl font-black text-slate-800">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* 2. TABLE ACTIONS */}
      <div className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input 
            type="text" 
            placeholder="Search by ID, customer or event..." 
            className="w-full bg-slate-50 border border-slate-100 pl-11 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/10 focus:bg-white transition-all text-sm font-medium"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          {/* <button className="flex-1 md:flex-none px-4 py-3 bg-slate-50 text-slate-600 rounded-xl text-sm font-bold border border-slate-100 hover:bg-slate-100 transition-colors">
            <FontAwesomeIcon icon={faFilter} className="mr-2" /> Filter
          </button> */}
          <button className="flex-1 md:flex-none px-4 py-3 bg-green-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-green-100 hover:bg-green-700 transition-all">
            <FontAwesomeIcon icon={faDownload} className="mr-2" /> Export Excel
          </button>
        </div>
      </div>

      {/* 3. BOOKINGS TABLE */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Order ID</th>
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Customer</th>
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Event</th>
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {bookingData.map((booking) => (
                <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">{booking.id}</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-700">{booking.customer}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-slate-800">{booking.event}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{booking.date}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-black text-slate-800">{booking.amount}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{booking.type}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black border ${getStatusStyle(booking.status)} uppercase tracking-tighter`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                       <button className="w-8 h-8 rounded-lg bg-slate-100 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                          <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                       </button>
                       <button className="w-8 h-8 rounded-lg bg-slate-100 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Placeholder */}
        <div className="p-6 border-t border-slate-50 flex items-center justify-between">
           <p className="text-xs font-bold text-slate-400 text-center">Showing 5 of 1,284 bookings</p>
           <div className="flex gap-2">
              <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-black">Prev</button>
              <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-black">Next</button>
           </div>
        </div>
      </div>
    </motion.div>
  );
}