import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicket, faArrowTrendUp, faUsersLine, faCircleDollarToSlot,
  faFilter, faDownload, faMagnifyingGlass, faEllipsis,
  faBolt, faArrowRight, faCrown, faStar, faUserPlus
} from "@fortawesome/free-solid-svg-icons";

const AdminTicketSales = () => {
  const [activeTier, setActiveTier] = useState("All");

  const tiers = [
    { name: "VIP Experience", sold: 120, total: 150, price: "₹5,000", color: "from-amber-400 to-orange-500", icon: faCrown },
    { name: "Early Bird", sold: 300, total: 300, price: "₹1,200", color: "from-indigo-500 to-purple-600", icon: faBolt },
    { name: "General Admission", sold: 450, total: 800, price: "₹2,500", color: "from-emerald-400 to-teal-500", icon: faStar },
  ];

  const recentSales = [
    { id: "TXN-9921", user: "Arjun Mehta", tier: "VIP", status: "Paid", time: "Just now", amount: "₹5,000" },
    { id: "TXN-9920", user: "Sara Khan", tier: "General", status: "Paid", time: "5 mins ago", amount: "₹2,500" },
    { id: "TXN-9919", user: "Rahul Dev", tier: "Early Bird", status: "Refunded", time: "12 mins ago", amount: "₹1,200" },
  ];

  return (
    <div className="p-4 lg:p-10 space-y-10 animate-in fade-in zoom-in-95 duration-700">
      
      {/* ===== HEADER & ANALYTICS SUMMARY ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">Ticket Command</h2>
          <p className="text-slate-500 font-medium">Real-time revenue stream and inventory control.</p>
        </div>
        <div className="flex gap-4 justify-end">
           <button className="bg-white border border-slate-200 p-4 rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
              <FontAwesomeIcon icon={faDownload} className="text-slate-600" />
           </button>
           <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-indigo-200 flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
              <FontAwesomeIcon icon={faUserPlus} />
              Manual Booking
           </button>
        </div>
      </div>

      {/* ===== TIER PERFORMANCE CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, i) => (
          <div key={i} className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tier.color} opacity-5 -mr-10 -mt-10 rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
            
            <div className="flex justify-between items-start mb-8">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tier.color} text-white flex items-center justify-center text-xl shadow-lg`}>
                <FontAwesomeIcon icon={tier.icon} />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Price Point</p>
                <p className="text-xl font-black text-slate-800">{tier.price}</p>
              </div>
            </div>

            <h4 className="text-lg font-black text-slate-800 mb-1">{tier.name}</h4>
            <div className="flex justify-between items-end mb-3">
               <p className="text-xs font-bold text-slate-500">{tier.sold} of {tier.total} Sold</p>
               <p className="text-xs font-black text-indigo-600">{Math.round((tier.sold/tier.total)*100)}%</p>
            </div>
            
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
               <div 
                className={`h-full rounded-full bg-gradient-to-r ${tier.color} transition-all duration-1000 ease-out`}
                style={{ width: `${(tier.sold/tier.total)*100}%` }}
               />
            </div>
          </div>
        ))}
      </div>

      {/* ===== TRANSACTION HUB ===== */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        
        {/* RECENT SALES TICKER */}
        <div className="xl:col-span-3 bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
             <div className="relative flex-1 max-w-md">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                <input type="text" placeholder="Search by Order ID or Name..." className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:ring-2 ring-indigo-500/20 outline-none transition-all" />
             </div>
             <div className="flex items-center gap-2">
                <button className="px-4 py-2 text-xs font-black text-slate-500 hover:bg-slate-100 rounded-xl transition-all">Today</button>
                <button className="px-4 py-2 text-xs font-black text-slate-500 hover:bg-slate-100 rounded-xl transition-all"><FontAwesomeIcon icon={faFilter} className="mr-2"/>Filters</button>
             </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50/50">
                  <th className="px-8 py-5 text-left">Customer</th>
                  <th className="px-8 py-5 text-left">Tier</th>
                  <th className="px-8 py-5 text-left">Status</th>
                  <th className="px-8 py-5 text-left">Total</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {recentSales.map((sale) => (
                  <tr key={sale.id} className="group hover:bg-slate-50/80 transition-all cursor-pointer">
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center font-black text-slate-500 text-xs">
                             {sale.user.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                             <p className="font-black text-slate-800 text-sm">{sale.user}</p>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{sale.id} • {sale.time}</p>
                          </div>
                       </div>
                    </td>
                    <td className="px-8 py-6">
                       <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                         sale.tier === 'VIP' ? 'bg-amber-50 text-amber-600' : 
                         sale.tier === 'Early Bird' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-600'
                       }`}>
                         {sale.tier}
                       </span>
                    </td>
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${sale.status === 'Paid' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                          <span className="text-xs font-black text-slate-700">{sale.status}</span>
                       </div>
                    </td>
                    <td className="px-8 py-6 font-black text-slate-800">{sale.amount}</td>
                    <td className="px-8 py-6 text-right">
                       <button className="w-10 h-10 rounded-xl hover:bg-white hover:shadow-md text-slate-400 hover:text-indigo-600 transition-all">
                          <FontAwesomeIcon icon={faEllipsis} />
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SIDE CONVERSION WIDGET */}
        <div className="space-y-6">
           <div className="bg-[#0F172A] rounded-[2.5rem] p-8 text-white shadow-2xl shadow-slate-300 relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-all duration-700"></div>
              <p className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em] mb-4">Total Revenue</p>
              <h3 className="text-4xl font-black tracking-tighter mb-1">₹18,42,000</h3>
              <p className="text-xs font-bold text-emerald-400 mb-8"><FontAwesomeIcon icon={faArrowTrendUp} className="mr-2"/> 12.5% vs last week</p>
              
              <div className="space-y-4">
                 <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Projected Goal</span>
                    <span className="font-black italic">₹25,00,000</span>
                 </div>
                 <div className="h-1.5 w-full bg-white/10 rounded-full">
                    <div className="h-full w-[74%] bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                 </div>
              </div>
           </div>

           <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
              <h5 className="font-black text-slate-800 text-sm mb-6 flex items-center gap-2">
                 <FontAwesomeIcon icon={faUsersLine} className="text-indigo-600" />
                 Attendee Mix
              </h5>
              <div className="space-y-6">
                 {[
                    { label: "New Buyers", val: "65%", color: "bg-indigo-500" },
                    { label: "Returning", val: "35%", color: "bg-emerald-500" }
                 ].map((stat, i) => (
                    <div key={i}>
                       <div className="flex justify-between text-[10px] font-black uppercase text-slate-400 mb-2">
                          <span>{stat.label}</span>
                          <span className="text-slate-800">{stat.val}</span>
                       </div>
                       <div className="h-1.5 w-full bg-slate-50 rounded-full">
                          <div className={`h-full ${stat.color} rounded-full`} style={{ width: stat.val }}></div>
                       </div>
                    </div>
                 ))}
              </div>
              <button className="w-full mt-8 py-3 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 font-black text-[10px] uppercase hover:border-indigo-500 hover:text-indigo-600 transition-all">
                 View Detailed Analytics
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTicketSales;