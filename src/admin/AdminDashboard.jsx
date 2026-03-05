import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faTicket,
  faUsers,
  faCalendarDays,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export default function AdminDashboard() {
  // Keeping your exact mock data and UI structure
  const eventStats = {
    revenue: "₹1,42,800",
    activeEvents: 12,
    attendees: 840,
    ticketsSold: 1250,
    recentActivity: [
      { id: 1, name: "Gala Night 2026", type: "VIP Ticket", amount: "₹5,000", status: "Confirmed", time: "2 mins ago" },
      { id: 2, name: "Tech Summit", type: "Early Bird", amount: "₹1,200", status: "Pending", time: "15 mins ago" },
      { id: 3, name: "Charity Auction", type: "General", amount: "₹2,500", status: "Confirmed", time: "1 hour ago" },
    ]
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-700">
      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: "Total Revenue", val: eventStats.revenue, icon: faMoneyBillWave, trend: "+14%", color: "indigo" },
          { label: "Tickets Sold", val: eventStats.ticketsSold, icon: faTicket, trend: "+8%", color: "emerald" },
          { label: "Attendance", val: eventStats.attendees, icon: faUsers, trend: "92%", color: "amber" },
          { label: "Live Events", val: eventStats.activeEvents, icon: faCalendarDays, trend: "Stable", color: "rose" }
        ].map((s, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 group hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl bg-${s.color}-50 text-${s.color}-600 flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                <FontAwesomeIcon icon={s.icon} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2 py-1 bg-slate-50 rounded-lg">{s.trend}</span>
            </div>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-tight">{s.label}</p>
            <h3 className="text-2xl font-black text-slate-800 tracking-tighter mt-1">{s.val}</h3>
          </div>
        ))}
      </div>

      {/* TABLE / LIST SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
            <h2 className="font-black text-slate-800">Recent Transactions</h2>
            <button className="text-xs font-black text-indigo-600 hover:underline">Download CSV</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-widest text-slate-400 border-b border-slate-50">
                  <th className="px-6 py-4">Event Name</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {eventStats.recentActivity.map((act) => (
                  <tr key={act.id} className="hover:bg-indigo-50/30 transition-colors cursor-pointer group">
                    <td className="px-6 py-5">
                      <p className="font-bold text-slate-800 text-sm">{act.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{act.type} • {act.time}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase ${act.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'}`}>{act.status}</span>
                    </td>
                    <td className="px-6 py-5 font-black text-slate-800 text-sm group-hover:text-indigo-600">{act.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SIDE BANNER / QUICK ACTION */}
        <div className="bg-indigo-600 rounded-[2rem] p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-indigo-500/20">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div>
            <h3 className="text-2xl font-black leading-tight mb-2">Host a new <br /> Event Today?</h3>
            <p className="text-indigo-100 text-sm font-medium">Create and publish your event in minutes and start selling tickets.</p>
          </div>
          <button className="mt-8 bg-white text-indigo-600 py-4 rounded-2xl font-black text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/10">
            Launch Creator UI
          </button>
        </div>
      </div>
    </div>
  );
}