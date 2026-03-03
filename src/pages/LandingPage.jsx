import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faUsers,
  faAward,
  faStar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import TestTheme from "../components/themes/testtheme";
import Landing1 from "../assets/logo.webp"
import TestimonialsCarousel from "../components/testimonialsCorousal";

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="min-h-screen  bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">
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
              <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendarCheck} />
                Book Your Event
              </button>

              <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-indigo-700 transition duration-300">
                View Portfolio
              </button>
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

      {/* TESTIMONIALS */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <p className="text-gray-600 mb-4">
                “Absolutely amazing event planning! Everything was perfect.”
              </p>
              <h4 className="font-semibold">– Priya Sharma</h4>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <p className="text-gray-600 mb-4">
                “Professional and creative team. Highly recommend!”
              </p>
              <h4 className="font-semibold">– Raj Verma</h4>
            </div>
          </div>
        </div>
      </section> */}


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

          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition flex items-center gap-2 mx-auto">
            Get Started
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>

      <TestTheme />

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p>© 2026 EventElite. All rights reserved.</p>
      </footer>

    </div>
  );
}