import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCamera, faEnvelope, faPhone, faLocationDot, 
  faShieldHalved, faUserPen, faLock, faCheckDouble,
  faFingerprint, faCircle, faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function AdminProfile() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-6xl mx-auto space-y-8 pb-12"
    >
      {/* 1. HERO IDENTITY SECTION */}
      <div className="relative group overflow-hidden rounded-[3rem] bg-[#0F172A] p-1 shadow-2xl">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[80px] rounded-full -mr-20 -mt-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full -ml-20 -mb-20" />

        <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-[2.8rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-white/5">
          <div className="relative">
            <div className="w-40 h-40 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500 via-indigo-600 to-purple-600 p-1 shadow-2xl transform group-hover:rotate-3 transition-transform duration-500">
              <div className="w-full h-full bg-[#0F172A] rounded-[2.3rem] flex items-center justify-center overflow-hidden">
                <span className="text-6xl font-black italic text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500">K</span>
              </div>
            </div>
            <button className="absolute -bottom-2 -right-2 w-12 h-12 bg-white text-slate-900 rounded-2xl shadow-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all active:scale-90 border-4 border-[#0F172A]">
              <FontAwesomeIcon icon={faCamera} />
            </button>
          </div>

          <div className="text-center md:text-left space-y-3">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <h2 className="text-4xl font-black text-white tracking-tighter">Kapi Admin</h2>
              {/* <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-emerald-500/20 flex items-center gap-2">
                <FontAwesomeIcon icon={faCircle} className="text-[6px] animate-ping" /> Online Now
              </span> */}
            </div>
            <p className="text-slate-400 font-medium max-w-md">Managing global event logistics and high-level security protocols for Kapi Events Pro.</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-slate-300 text-xs font-bold">
                <FontAwesomeIcon icon={faShieldHalved} className="mr-2 text-indigo-400" /> Super Admin
              </div>
              {/* <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-slate-300 text-xs font-bold">
                <FontAwesomeIcon icon={faCheckDouble} className="mr-2 text-emerald-400" /> Level 4 Verified
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* 2. LEFT COLUMN: SECURITY & STATS */}
        <div className="lg:col-span-4 space-y-8">
          {/* Security Health Card */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faFingerprint} size="4x" />
             </div>
             <h3 className="text-xl font-black text-slate-800 mb-6">Security Health</h3>
             <div className="space-y-6">
                <div className="space-y-2">
                   <div className="flex justify-between text-xs font-black uppercase text-slate-500">
                      <span>Account Safety</span>
                      <span className="text-indigo-600">92%</span>
                   </div>
                   <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} animate={{ width: "92%" }} transition={{ delay: 0.5, duration: 1 }}
                        className="h-full bg-indigo-600" 
                      />
                   </div>
                </div>
                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-xs font-black shadow-lg hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2">
                   Run Security Audit <FontAwesomeIcon icon={faArrowRight} />
                </button>
             </div>
          </div>

          {/* Quick Contact Info */}
          <div className="bg-indigo-600 p-8 rounded-[2.5rem] shadow-xl text-white">
            <h3 className="text-lg font-black mb-6">Connect Info</h3>
            <div className="space-y-4">
               {[
                 { icon: faEnvelope, val: "admin@kapievents.com" },
                 { icon: faPhone, val: "+1 (234) 567 890" },
                 { icon: faLocationDot, val: "Global HQ, NY" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                    <FontAwesomeIcon icon={item.icon} className="text-indigo-200" />
                    <span className="text-sm font-bold truncate">{item.val}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* 3. RIGHT COLUMN: SETTINGS FORM */}
        <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">Profile Settings</h3>
              <p className="text-sm text-slate-400 font-medium mt-1">Update your personal information and security credentials.</p>
            </div>
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl text-sm font-black shadow-xl shadow-indigo-200 hover:scale-105 active:scale-95 transition-all">
              Save Changes
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
             {[
               { label: "Display Name", type: "text", placeholder: "Kapi Admin", icon: faUserPen },
               { label: "Admin Username", type: "text", placeholder: "@kapi_master", icon: faFingerprint },
               { label: "New Password", type: "password", placeholder: "••••••••", icon: faLock },
               { label: "Confirm Password", type: "password", placeholder: "••••••••", icon: faLock }
             ].map((field, i) => (
               <div key={i} className="group space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                     <FontAwesomeIcon icon={field.icon} className="text-indigo-500 text-[10px]" /> {field.label}
                  </label>
                  <input 
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-slate-50 border-2 border-slate-50 px-6 py-4 rounded-[1.5rem] outline-none group-focus-within:border-indigo-600/20 group-focus-within:bg-white group-focus-within:shadow-inner transition-all text-sm font-bold text-slate-700"
                  />
               </div>
             ))}
          </div>

          <div className="mt-12 p-8 bg-rose-50 rounded-[2rem] border border-rose-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-black text-rose-800">Critical: Account Access</h4>
              <p className="text-sm text-rose-600 font-medium">Deactivating your account will immediately revoke all administrative privileges.</p>
            </div>
            <button className="px-8 py-3 bg-white text-rose-600 border border-rose-200 rounded-xl text-xs font-black hover:bg-rose-600 hover:text-white transition-all shadow-sm">
              Deactivate
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}