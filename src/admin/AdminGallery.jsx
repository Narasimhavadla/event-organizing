import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowUp, faFilter, faImages, faTrash, 
  faDownload, faExpand, faTag, faFolderPlus,
  faCircleCheck, faLayerGroup, faHardDrive, faFileImage
} from "@fortawesome/free-solid-svg-icons";

const AdminGallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [view, setView] = useState("Grid");

  const mediaAssets = [
    { id: 1, url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600", size: "2.4 MB", dimensions: "4000x3000", tags: ["Stage", "Lights"] },
    { id: 2, url: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=600", size: "1.8 MB", dimensions: "3500x2400", tags: ["Crowd", "Outdoor"] },
    { id: 3, url: "https://images.unsplash.com/photo-1514525253361-bee8a48790c3?auto=format&fit=crop&q=80&w=600", size: "3.1 MB", dimensions: "5000x3500", tags: ["VIP", "Music"] },
    { id: 4, url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600", size: "2.9 MB", dimensions: "4200x2800", tags: ["Stage", "Crowd"] },
    { id: 5, url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=600", size: "4.2 MB", dimensions: "6000x4000", tags: ["Night", "EDM"] },
    { id: 6, url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600", size: "1.5 MB", dimensions: "3000x2000", tags: ["DJ", "Lights"] },
  ];

  const toggleSelect = (id) => {
    setSelectedImages(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="p-4 lg:p-10 space-y-10 animate-in fade-in zoom-in-95 duration-700">
      
      {/* ===== MEDIA ANALYTICS & UPLOAD ===== */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3 bg-[#0F172A] rounded-[3rem] p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10 space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-black tracking-tighter">Media Assets Manager</h2>
            <div className="flex gap-6 justify-center md:justify-start">
               <div className="flex items-center gap-2 text-indigo-300">
                  <FontAwesomeIcon icon={faHardDrive} className="text-xs" />
                  <span className="text-xs font-black uppercase tracking-widest">12.4 GB / 50 GB Used</span>
               </div>
               <div className="flex items-center gap-2 text-emerald-400">
                  <FontAwesomeIcon icon={faFileImage} className="text-xs" />
                  <span className="text-xs font-black uppercase tracking-widest">1,240 Total Files</span>
               </div>
            </div>
          </div>
          <button className="group relative bg-indigo-600 hover:bg-white hover:text-indigo-600 px-10 py-5 rounded-[2rem] font-black text-sm transition-all duration-500 flex items-center gap-3 active:scale-95">
             <FontAwesomeIcon icon={faCloudArrowUp} className="group-hover:bounce" />
             Upload New Media
          </button>
        </div>

        <div className="bg-white rounded-[3rem] border border-slate-100 p-8 flex flex-col justify-center items-center gap-2 shadow-sm">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Smart Albums</p>
           <h3 className="text-4xl font-black text-indigo-600 tracking-tighter">24</h3>
           <button className="mt-2 text-xs font-black text-slate-800 hover:underline flex items-center gap-2">
              <FontAwesomeIcon icon={faFolderPlus} /> Create New
           </button>
        </div>
      </div>

      {/* ===== TOOLBAR ===== */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/50 backdrop-blur-sm p-4 rounded-[2.5rem] border border-slate-100">
        <div className="flex bg-slate-100 p-1.5 rounded-2xl">
           {["Grid", "Compact", "Folders"].map(t => (
             <button 
              key={t}
              onClick={() => setView(t)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === t ? "bg-white text-indigo-600 shadow-sm" : "text-slate-400"}`}
             >
               {t}
             </button>
           ))}
        </div>
        <div className="flex items-center gap-3">
           <div className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-black text-slate-500 cursor-pointer hover:border-indigo-500 transition-all">
              <FontAwesomeIcon icon={faFilter} />
              <span>All Events</span>
           </div>
           <button className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 transition-all">
              <FontAwesomeIcon icon={faLayerGroup} />
           </button>
        </div>
      </div>

      {/* ===== MASONRY GALLERY GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mediaAssets.map((asset) => (
          <div 
            key={asset.id}
            onClick={() => toggleSelect(asset.id)}
            className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 ${
              selectedImages.includes(asset.id) ? "ring-8 ring-indigo-500/20 scale-[0.98]" : "hover:shadow-2xl hover:-translate-y-2"
            }`}
          >
            <img src={asset.url} alt="" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
            
            {/* OVERLAY INDICATORS */}
            <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent transition-opacity duration-500 ${selectedImages.includes(asset.id) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
               <div className="absolute top-6 left-6">
                  {selectedImages.includes(asset.id) ? (
                    <FontAwesomeIcon icon={faCircleCheck} className="text-2xl text-indigo-400 drop-shadow-md" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-white/50" />
                  )}
               </div>

               <div className="absolute top-6 right-6 flex gap-2">
                  <button className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md text-white text-[10px] hover:bg-white hover:text-indigo-600 transition-all">
                    <FontAwesomeIcon icon={faExpand} />
                  </button>
               </div>

               <div className="absolute bottom-6 left-6 right-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {asset.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[9px] font-black text-white uppercase tracking-widest border border-white/10 flex items-center gap-1">
                        <FontAwesomeIcon icon={faTag} className="text-[8px]" /> {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-end border-t border-white/10 pt-3">
                     <div>
                        <p className="text-white font-black text-xs italic">{asset.size}</p>
                        <p className="text-white/50 text-[9px] font-bold uppercase">{asset.dimensions}</p>
                     </div>
                     <button className="text-white/40 hover:text-rose-400 transition-colors">
                        <FontAwesomeIcon icon={faTrash} />
                     </button>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== FLOATING ACTION DOCK ===== */}
      {selectedImages.length > 0 && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-20 duration-500">
           <div className="bg-[#0F172A] border border-white/10 shadow-2xl rounded-[2.5rem] px-8 py-5 flex items-center gap-8">
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none">Selection</span>
                 <span className="text-white font-black text-lg leading-tight">{selectedImages.length} Files</span>
              </div>
              
              <div className="h-10 w-[1px] bg-white/10" />

              <div className="flex items-center gap-6">
                 <button className="flex items-center gap-3 text-white text-xs font-black uppercase tracking-widest hover:text-indigo-400 transition-all">
                    <FontAwesomeIcon icon={faDownload} /> Download
                 </button>
                 <button className="flex items-center gap-3 text-white text-xs font-black uppercase tracking-widest hover:text-indigo-400 transition-all">
                    <FontAwesomeIcon icon={faTag} /> Batch Tag
                 </button>
                 <button className="flex items-center gap-3 text-rose-400 text-xs font-black uppercase tracking-widest hover:text-rose-300 transition-all">
                    <FontAwesomeIcon icon={faTrash} /> Delete
                 </button>
              </div>

              <button 
                onClick={() => setSelectedImages([])}
                className="w-10 h-10 rounded-2xl bg-white/10 text-white hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center font-black"
              >
                ×
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default AdminGallery;