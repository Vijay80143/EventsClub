import React from "react";
import image from "../assets/about.png";
import image2 from "../assets/strucuture.png";
import image3 from "../assets/plan.png";
const About = () => {
  return (
    <div className="min-h-screen bg-black pt-40">
      {/* About Section */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 max-w-md mx-auto">
              <img 
                src={image}
                alt="About Us" 
                className="rounded-2xl shadow-2xl opacity-80 hover:opacity-100 transition-opacity duration-300 w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About Us</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Welcome to the Events Society! We are dedicated to organizing and hosting exciting events for our community. Our society brings together passionate individuals who love creating memorable experiences through various activities and gatherings. We strive to build lasting connections and create unforgettable moments for all our community members through innovative and engaging events.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Structure Section */}
      <div className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Structure of Our Society</h2>
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2 max-w-md mx-auto">
              <img 
                src={image2}
                alt="Society Structure" 
                className="rounded-2xl shadow-2xl opacity-80 hover:opacity-100 transition-opacity duration-300 w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {[
                "Broadcasting Committee",
                "Campus Relations Committee",
                "Designing Team Committee",
                "Drafting Committee",
                "Events Committee",
                "Hospitality Committee",
                "HR & Communications Committee",
                "Logistics Committee",
                "PR & Marketing Committee",
                "Registrations & Certifications Committee",
                "Sponsorship Committee",
                "Stage Management Committee",
                "Transport Committee",
                "Website Committee",
                "Emergency Response Committee",
                "Creative Arts Committee"
              ].map((committee, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-purple-500 font-bold">{index + 1}.</span>
                  <span className="text-gray-300">{committee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Our Plans</h2>
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2 max-w-md mx-auto mt-36">
              <img 
                src={image3}
                alt="Our Plans" 
                className="rounded-2xl shadow-2xl opacity-80 hover:opacity-100 transition-opacity duration-300 w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl text-white mb-6">Through the Event Management Society, we plan events including:</h3>
              <ul className="space-y-6 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-2">1.</span>
                  <span><span className="text-white font-semibold">Workshops and Training</span> – Skill-building on event management, budgeting, public speaking, and teamwork. Ex: As we conduct Samyak, Surabhi and department fests we can engage them in such activities to get experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-2">2.</span>
                  <span><span className="text-white font-semibold">Charity and Fundraising Events</span> – Partner with organizations to support social causes and raise funds.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-2">3.</span>
                  <span><span className="text-white font-semibold">Competitions and Hackathons</span> – Organize events where students can showcase their skills in areas like tech, business, and the arts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-2">4.</span>
                  <span><span className="text-white font-semibold">Skill-Based Bootcamps</span> – Intensive workshops on topics like digital marketing, event logistics, crisis management, and leadership.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-2">5.</span>
                  <span><span className="text-white font-semibold">Sports Tournaments</span> – Organize inter-university or community sports events, promoting teamwork and fitness.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-2">6.</span>
                  <span><span className="text-white font-semibold">Art and Film Festivals</span> – Showcase creative works from students or external artists, creating a platform for cultural expression.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-2">7.</span>
                  <span><span className="text-white font-semibold">Field Trips and Site Visits</span> – Organize visits to companies, industries, or event venues for practical learning experiences.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
