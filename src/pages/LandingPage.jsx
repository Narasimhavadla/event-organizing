import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faUsers,
  faAward,
  faStar,
  faArrowRight,
  faLightbulb,
  faHandshake,
  faCameraRetro,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import TestTheme from "../components/themes/testtheme";
import Landing1 from "../assets/logo.webp"
import TestimonialsCarousel from "../components/testimonialsCorousal";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="min-h-[90vh]  bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-4 grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              We Create
              <span className="block text-yellow-300">
                Unforgettable Events
              </span>
            </h1>

            <p className="text-lg md:text-xl text-indigo-100">
              From weddings to corporate events, we design experiences that
              leave lasting memories.
            </p>

            <div className="flex flex-wrap gap-4">
              <NavLink to="/book-event" className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendarCheck} />
                Book Your Event
              </NavLink>

              <NavLink to="/contact" className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-indigo-700 transition duration-300">
                Contact Team
              </NavLink>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-6">
              <div>
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-indigo-200">Events Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">300+</h3>
                <p className="text-indigo-200">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Side Image Placeholder */}
          <div className="hidden lg:block">
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl h-[400px] shadow-2xl">
            <img src={Landing1} className="w-full h-full rounded-3xl object-cover"></img>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Event Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {["Wedding Planning", "Corporate Events", "Birthday Parties"].map(
              (service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition duration-300 hover:-translate-y-2"
                >
                  <FontAwesomeIcon
                    icon={faAward}
                    className="text-indigo-600 text-3xl mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">{service}</h3>
                  <p className="text-gray-600">
                    Professional event management tailored to your needs.
                  </p>
                </div>
              )
            )}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div className="bg-indigo-100 rounded-3xl h-[400px]"></div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose Our Event Company?
            </h2>
            <p className="text-gray-600">
              We combine creativity, precision, and passion to deliver events
              that exceed expectations.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faUsers} className="text-indigo-600" />
                Experienced Professional Team
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faStar} className="text-indigo-600" />
                5-Star Client Satisfaction
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCalendarCheck} className="text-indigo-600" />
                On-Time Event Execution
              </li>
            </ul>
          </div>

        </div>
      </section>

        

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              From Vision to <span className="text-indigo-600">Reality</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
              Our seamless 4-step process ensures your event is stress-free and spectacular.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-indigo-100 -translate-y-12 z-0" />

            {[
              { icon: faLightbulb, title: "Concept", desc: "We brainstorm unique themes based on your vision." },
              { icon: faHandshake, title: "Planning", desc: "Booking venues, vendors, and managing logistics." },
              { icon: faCameraRetro, title: "Execution", desc: "On-site coordination and real-time management." },
              { icon: faCheckDouble, title: "Final Review", desc: "Post-event feedback and memory delivery." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center space-y-4">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-indigo-200 ring-8 ring-white">
                  <FontAwesomeIcon icon={step.icon} className="text-xl" />
                </div>
                <h4 className="text-xl font-bold text-slate-800">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEW SECTION: FEATURED WORK ================= */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">Our Portfolio</h2>
              <p className="text-slate-400 mt-4 text-lg">A glimpse into the extraordinary experiences we've created.</p>
            </div>
            <NavLink to="/gallery" className="text-indigo-400 font-bold hover:text-white transition flex items-center gap-2">
              View All Projects <FontAwesomeIcon icon={faArrowRight} />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative h-80 rounded-[2rem] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <h4 className="text-xl font-bold">Luxe Wedding 2026</h4>
                    <p className="text-sm text-slate-300">Hyderabad, India</p>
                  </div>
               </div>
               <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Wedding" />
            </div>

            <div className="group relative h-80 rounded-[2rem] overflow-hidden md:mt-12">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <h4 className="text-xl font-bold">Tech Summit 2025</h4>
                    <p className="text-sm text-slate-300">Corporate Conference</p>
                  </div>
               </div>
               <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Corporate" />
            </div>

            <div className="group relative h-80 rounded-[2rem] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <h4 className="text-xl font-bold">Neon Gala Night</h4>
                    <p className="text-sm text-slate-300">Private Celebration</p>
                  </div>
               </div>
               <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gala" />
            </div>
          </div>
        </div>
      </section>

      <div className="w-4/5 mx-auto">
        <TestimonialsCarousel />
        </div>
      

      {/* FINAL CTA */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Plan Your Dream Event?
          </h2>
          <p className="text-indigo-100">
            Let’s turn your vision into reality.
          </p>

          <NavLink to="/book-event" className="w-44 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition flex items-center gap-2 mx-auto">
            Get Started
            <FontAwesomeIcon icon={faArrowRight} />
          </NavLink>
        </div>
      </section>

      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Successful Events", value: "850+" },
            { label: "Global Vendors", value: "120+" },
            { label: "Award Wins", value: "15" },
            { label: "Team Members", value: "45" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl font-black text-indigo-600">{stat.value}</h3>
              <p className="text-slate-500 font-bold text-sm uppercase mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

          {/* test themes here  */}
      {/* <TestTheme /> */}

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p>© 2026 Kapi Events. All rights reserved.</p>
      </footer>

    </div>
  );
}