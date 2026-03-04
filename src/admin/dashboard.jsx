import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine, faUsers, faHandHoldingHeart, faCalendarDays,
  faMoneyBillWave, faBars, faRightFromBracket, faPhotoFilm,
  faHandshake, faCalendar, faCalendarCheck, faEnvelope, 
  faBell, faSearch, faArrowRight, faTicket, faCheckDouble, faXmark
} from "@fortawesome/free-solid-svg-icons";
import AdminDashboard from "./AdminDashboard";
import AdminLiveEvents from "./AdminLiveEvents"
import AdminTicketSales from "./AdminTicketSales";
import AdminAttendees from "./AdminAttendees";
import AdminGallery from "./AdminGallery";
import AdminSponsors from "./AdminSponser";
import AdminCalendar from "./AdminCalendar";


export default function EventAdminPro() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: faChartLine },
    { name: "Live Events", icon: faCalendarDays },
    { name: "Ticket Sales", icon: faTicket },
    { name: "Attendees", icon: faUsers },
    { name: "Gallery", icon: faPhotoFilm },
    { name: "Sponsors", icon: faHandshake },
    { name: "Calender", icon: faCalendar },
    { name: "Bookings", icon: faCalendarCheck },
    { name: "Notifications", icon: faEnvelope },
  ];

  /* ================= TAB RENDER LOGIC ================= */

const renderActiveTab = () => {
  switch (activeTab) {
    case "Dashboard":
      return <AdminDashboard />;
    case "Live Events":
      return <AdminLiveEvents />;
    case "Ticket Sales":
      return <AdminTicketSales />;
    case "Attendees":
      return <AdminAttendees />;
    case "Gallery":
      return <AdminGallery />;
    case "Sponsors":
      return <AdminSponsors />;
    case "Calender":
      return <AdminCalendar />;
    // case "Bookings":
    //   return <BookingsComponent />;
    // case "Notifications":
    //   return <NotificationsComponent />;
    default:
      return <AdminDashboard />;
  }
};

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex text-slate-900 font-sans ">
      
      {/* ===== MOBILE SIDE DRAWER (Overlay) ===== */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible lg:hidden"}`}
      >
        {/* Backdrop Blur */}
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        
        {/* Drawer Content */}
        <aside className={`absolute top-0 left-0 h-full bg-[#0F172A] w-72 shadow-2xl transition-transform duration-500 ease-out flex flex-col ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-black italic">K</div>
               <span className="text-white font-black tracking-tight text-lg uppercase">Kapi Events <span className="text-indigo-400">Pro</span></span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-1 mt-4">
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => { setActiveTab(item.name); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${
                  activeTab === item.name ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="w-5 text-center" />
                {item.name}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10 ">
            <button onClick={() => setShowLogoutConfirm(true)} className="w-full flex items-center gap-4 px-4 py-3 text-rose-400 font-bold text-sm hover:bg-rose-500/10 rounded-xl transition-all">
                <FontAwesomeIcon icon={faRightFromBracket} /> Logout
            </button>
          </div>
        </aside>
      </div>

      {/* ===== DESKTOP PERMANENT SIDEBAR ===== */}
      <aside className="hidden lg:flex w-72 bg-[#0F172A] flex-col h-screen sticky top-0 shrink-0">
         <div className="p-8">
            <div className="flex items-center gap-3 mb-10">
               <div className="w-10 h-10 bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 italic font-bold">K</div>
               <span className="text-white font-black text-xl tracking-tight">Kapi Events</span>
            </div>
            <nav className="space-y-1">
                {menuItems.map((item, i) => (
                  <button key={i} onClick={() => setActiveTab(item.name)} className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all text-sm font-bold ${activeTab === item.name ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-slate-100"}`}>
                    <FontAwesomeIcon icon={item.icon} className="w-5" /> {item.name}
                  </button>
                ))}
            </nav>
         </div>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 min-w-0 flex flex-col">
        
        {/* TOP BAR */}
        <header className="h-20 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 flex items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 active:scale-95 transition-all">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <h1 className="text-xl font-black text-slate-800 tracking-tight">{activeTab}</h1>
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
             <div className="hidden md:flex bg-slate-100 px-4 py-2 rounded-xl items-center gap-2 border border-slate-200">
                <FontAwesomeIcon icon={faSearch} className="text-slate-400 text-xs" />
                <input type="text" placeholder="Search events..." className="bg-transparent outline-none text-xs w-32 focus:w-48 transition-all" />
             </div>
             <button className="relative w-10 h-10 rounded-xl bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                <FontAwesomeIcon icon={faBell} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
             </button>
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-2 border-white shadow-md cursor-pointer" />
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        {/* DYNAMIC CONTENT AREA */}
        <div className="p-2 lg:p-4 max-w-7xl mx-auto w-full animate-in fade-in duration-500">
        {renderActiveTab()}
        </div>
      </main>

      {/* LOGOUT CONFIRMATION (REFINED) */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
           <div className="bg-white p-8 rounded-[2.5rem] w-full max-w-sm text-center shadow-2xl scale-in-95 animate-in zoom-in-95">
              <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl rotate-12">
                  <FontAwesomeIcon icon={faRightFromBracket} />
              </div>
              <h2 className="text-2xl font-black text-slate-800 mb-2">Ready to Leave?</h2>
              <p className="text-slate-500 text-sm font-medium mb-8">Logging out will clear your session. Make sure your changes are saved!</p>
              <div className="grid grid-cols-2 gap-3">
                 <button onClick={() => window.location.href = "/"} className="py-4 bg-rose-500 text-white rounded-2xl font-black text-sm shadow-lg shadow-rose-200">Logout</button>
                 <button onClick={() => setShowLogoutConfirm(false)} className="py-4 bg-slate-100 text-slate-500 rounded-2xl font-black text-sm">Cancel</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}