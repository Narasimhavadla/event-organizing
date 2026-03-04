import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake, faArrowTrendUp, faGem, faAward, faMedal, 
  faEye, faLink, faFileContract, faCirclePlus, faEnvelope,
  faEllipsisVertical, faChartLine, faDownload
} from "@fortawesome/free-solid-svg-icons";

const AdminSponsors = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const sponsors = [
    { 
      id: 1, 
      name: "RedBull Global", 
      tier: "Platinum", 
      contribution: "₹25,00,000", 
      impressions: "1.2M", 
      status: "Active",
      logo: "https://logo.clearbit.com/redbull.com",
      contractEnds: "Dec 2026",
      color: "from-blue-600 to-indigo-600"
    },
    { 
      id: 2, 
      name: "Spotify India", 
      tier: "Gold", 
      contribution: "₹15,00,000", 
      impressions: "850K", 
      status: "Active",
      logo: "https://logo.clearbit.com/spotify.com",
      contractEnds: "Aug 2026",
      color: "from-emerald-500 to-teal-600"
    },
    { 
      id: 3, 
      name: "Tech Mahindra", 
      tier: "Silver", 
      contribution: "₹8,00,000", 
      impressions: "420K", 
      status: "Pending",
      logo: "https://logo.clearbit.com/techmahindra.com",
      contractEnds: "Oct 2026",
      color: "from-slate-400 to-slate-600"
    }
  ];

  const getTierIcon = (tier) => {
    switch(tier) {
      case 'Platinum': return faGem;
      case 'Gold': return faAward;
      default: return faMedal;
    }
  };

  return (
    <div className="p-4 lg:p-10 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      
      {/* ===== HEADER & PARTNERSHIP KPI ===== */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-indigo-600">
            <FontAwesomeIcon icon={faHandshake} className="text-2xl" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Executive Dashboard</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Sponsorship Pipeline</h2>
        </div>
        
        <div className="flex gap-4 w-full lg:w-auto">
          <div className="bg-white px-6 py-4 rounded-[2rem] border border-slate-100 shadow-sm flex-1 lg:flex-none">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Partner Value</p>
            <p className="text-2xl font-black text-slate-800 tracking-tighter italic">₹48,00,000</p>
          </div>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-[2rem] font-black text-sm shadow-xl shadow-indigo-100 flex items-center gap-3 hover:scale-105 transition-all active:scale-95">
            <FontAwesomeIcon icon={faCirclePlus} />
            Onboard Sponsor
          </button>
        </div>
      </div>

      {/* ===== TIER FILTER BAR ===== */}
      <div className="flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-2xl w-fit">
        {["All", "Active", "Pending", "Expired"].map(t => (
          <button 
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === t ? "bg-white text-indigo-600 shadow-md" : "text-slate-500 hover:text-slate-800"}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ===== SPONSOR CARDS GRID ===== */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="group relative bg-white rounded-[3rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
            
            {/* Header: Logo & Tier */}
            <div className="flex justify-between items-start mb-10">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-[2rem] bg-slate-50 border border-slate-100 p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <img src={sponsor.logo} alt={sponsor.name} className="max-w-full h-auto grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">{sponsor.name}</h3>
                  <div className={`flex items-center gap-2 mt-1 text-[10px] font-black uppercase tracking-widest ${
                    sponsor.tier === 'Platinum' ? 'text-indigo-600' : 'text-amber-500'
                  }`}>
                    <FontAwesomeIcon icon={getTierIcon(sponsor.tier)} />
                    {sponsor.tier} Partner
                  </div>
                </div>
              </div>
              <button className="text-slate-300 hover:text-slate-600 p-2">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-slate-50 p-5 rounded-[2rem] border border-slate-100/50 text-center">
                <FontAwesomeIcon icon={faEye} className="text-slate-400 text-xs mb-2" />
                <p className="text-lg font-black text-slate-800 leading-none">{sponsor.impressions}</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">Impressions</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-[2rem] border border-slate-100/50 text-center">
                <FontAwesomeIcon icon={faChartLine} className="text-emerald-500 text-xs mb-2" />
                <p className="text-lg font-black text-slate-800 leading-none">8.2%</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">CTR Avg</p>
              </div>
              <div className="bg-indigo-50 p-5 rounded-[2rem] border border-indigo-100/50 text-center">
                <FontAwesomeIcon icon={faArrowTrendUp} className="text-indigo-600 text-xs mb-2" />
                <p className="text-lg font-black text-indigo-600 leading-none">{sponsor.contribution.split(',')[0]}K</p>
                <p className="text-[9px] font-bold text-indigo-400 uppercase mt-1">Value</p>
              </div>
            </div>

            {/* Contract Timeline */}
            <div className="space-y-3 mb-8">
               <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <span>Partnership Health</span>
                  <span className="text-slate-800">Ends {sponsor.contractEnds}</span>
               </div>
               <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${sponsor.color} w-3/4 rounded-full shadow-lg shadow-indigo-200/50 animate-pulse`} />
               </div>
            </div>

            {/* Action Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
              <div className="flex -space-x-2">
                 <button className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center border-2 border-white shadow-sm">
                    <FontAwesomeIcon icon={faEnvelope} />
                 </button>
                 <button className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center border-2 border-white shadow-sm">
                    <FontAwesomeIcon icon={faLink} />
                 </button>
                 <button className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center border-2 border-white shadow-sm">
                    <FontAwesomeIcon icon={faFileContract} />
                 </button>
              </div>
              <button className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
                 <FontAwesomeIcon icon={faDownload} />
                 Media Kit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSponsors;