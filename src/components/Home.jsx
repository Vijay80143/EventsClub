import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I join the Events Society?",
      answer: "You can join by filling out the registration form on our website or visiting our office during club hours. Membership is open to all students."
    },
    {
      question: "What are the membership benefits?",
      answer: "Members get priority access to events, exclusive workshops, networking opportunities, and hands-on experience in event management."
    },
    {
      question: "How often do you organize events?",
      answer: "We organize multiple events each month, ranging from small workshops to large-scale festivals and cultural programs."
    },
    {
      question: "Can I volunteer for events?",
      answer: "Yes! We welcome volunteers for all our events. It's a great way to gain experience and be part of our community."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-[url('/event-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Events Society
          </h1>
          <p className="text-2xl font-light text-gray-300">Let's Craft Our Skills Together</p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
             About Events Club
          </h2>
          <div className="flex justify-center">
            <div className="max-w-2xl">
              <p className="text-xl leading-relaxed text-gray-300 text-center">
                Welcome to the Events Society! We are dedicated to organizing and hosting
                exciting events for our community. Our club brings together passionate individuals
                who love creating memorable experiences through various activities and gatherings.
              </p>
              <div className="flex justify-center mt-8">
                <Link 
                  to="/about"
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-purple-900 to-black rounded-2xl border-2 border-purple-500 shadow-lg shadow-purple-500/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Cultural Events"
                className="w-full h-54 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white text-center mb-4">Cultural Events</h3>
                <p className="text-gray-300 text-center">
                  We organize vibrant cultural festivals, art exhibitions, music concerts, and dance performances that celebrate diversity and creativity.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-pink-900 to-black rounded-2xl border-2 border-pink-500 shadow-lg shadow-pink-500/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Technical Workshops"
                className="w-full h-54 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white text-center mb-4">Technical Workshops</h3>
                <p className="text-gray-300 text-center">
                  Immersive workshops on cutting-edge technologies, coding bootcamps, and hands-on training sessions to boost your technical skills.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-blue-900 to-black rounded-2xl border-2 border-blue-500 shadow-lg shadow-blue-500/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Social Gatherings"
                className="w-full h-54 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white text-center mb-4">Social Gatherings</h3>
                <p className="text-gray-300 text-center">
                  Fun networking events, game nights, team building activities, and social mixers to help you connect with like-minded individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-indigo-900/50 to-black rounded-lg border border-indigo-500/30"
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-indigo-500 transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-300 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
