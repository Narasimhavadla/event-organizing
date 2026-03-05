import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faXmark, faCheck, faTrashCan, faTicket, faUserPlus, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function AdminNotification({ isOpen, onClose }) {
  // Mock data for notifications
  const notifications = [
    { id: 1, type: "booking", title: "New Booking", desc: "John Doe booked 2 VIP tickets for Tech Summit.", time: "2 mins ago" },
    { id: 2, type: "user", title: "New Organizer", desc: "A new sponsor request received from Global Tech.", time: "1 hour ago" },
    { id: 3, type: "alert", title: "System Update", desc: "Server maintenance scheduled for 2:00 AM.", time: "5 hours ago" },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "booking": return faTicket;
      case "user": return faUserPlus;
      case "alert": return faCircleExclamation;
      default: return faBell;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[150] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
        onClick={onClose} 
      />

      {/* Sidebar Panel */}
      <aside className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[160] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <h2 className="text-xl font-black text-slate-800 tracking-tight">Notifications</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors">
            <FontAwesomeIcon icon={faXmark} className="text-xl" />
          </button>
        </div>

        {/* Notification List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {notifications.map((note) => (
            <div key={note.id} className="group p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all">
              <div className="flex gap-4">
                <div className="mt-1 w-8 h-8 shrink-0 bg-white rounded-lg flex items-center justify-center text-indigo-500 shadow-sm">
                  <FontAwesomeIcon icon={getIcon(note.type)} className="text-sm" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-slate-800">{note.title}</h4>
                    <span className="text-[10px] font-medium text-slate-400">{note.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{note.desc}</p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    <button 
                      onClick={onClose} 
                      className="flex-1 py-2 bg-indigo-600 text-white text-[10px] font-bold rounded-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
                    >
                      <FontAwesomeIcon icon={faCheck} className="mr-1" /> Got it
                    </button>
                    <button 
                      className="px-3 py-2 bg-white border border-slate-200 text-slate-400 text-[10px] font-bold rounded-lg hover:text-rose-500 hover:border-rose-200 transition"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/30">
            <button className="w-full py-3 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">
                Mark all as read
            </button>
        </div>
      </aside>
    </>
  );
}