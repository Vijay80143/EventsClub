import React from "react";
import image1 from "../assets/spotlight.jpg";
import image4 from "../assets/1300.jpg";
import image6 from "../assets/cyclothon.jpg";
import image7 from "../assets/walkathon.jpg";

const Event = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Spotlight",
      description: "The Spotlight Event celebrated talent and achievements with inspiring speakers, exciting performances, and memorable moments.",
      image: image1,
      url: "/events/summer-music-festival", 
      date: "December 20, 2024",
      time: "03:00 PM - 05:00 PM",
      venue: "New Seminar Hall"
    }
  ];

  const completedEvents = [
    {
      id: 1,
      title: "1300 degree",
      description: "The 1300 Degrees Celsius Quiz pushes students to their intellectual limits, testing knowledge, critical thinking, and teamwork in a thrilling competition.",
      image: image4,
      venue: "KL SAC",
      date: "November 13, 2024",
      time: "03:00 PM - 5:00 PM",
      url: "/events/winter-wonderland",
      attendees: "100"
    },
    {
      id: 3,
      title: "Walkathon",
      description: "The Walkathon gathered participants to support [cause], with scenic routes, engaging activities, and a vibrant celebration at the finish line!",
      image: image7,
      venue: "IGM Stadium",
      date: "June 06, 2024",
      time: "07:30 AM",
      url: "/events/art-exhibition",
      attendees: "200k+"
    },
    {
      id: 3,
      title: "Cyclothon",
      description: "The Cyclothon brought cyclists together for [cause], featuring scenic routes, engaging stops, and a celebratory finish!",
      image: image6,
      venue: "IGM Stadium",
      date: "July 04, 2024",
      time: "06:00 AM",
      url: "/events/art-exhibition",
      attendees: "200k+"
    }

  ];

  return (
    <div className="bg-black pt-40 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-[1650px]">
        <h1 className="text-5xl font-bold text-center mb-24 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Upcoming Events</h1>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ${upcomingEvents.length <= 2 ? "place-items-center" : ""}`}>
          {upcomingEvents.map((event) => (
            <div key={event.id} className={`relative group ${upcomingEvents.length === 1 ? "lg:col-start-2" : ""}`}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition duration-300">
                    {event.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-blue-400">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      <span>{event.date} | {event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-center my-16 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Completed Events</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ${completedEvents.length <= 2 ? "place-items-center" : ""}`}>
          {completedEvents.map((event) => (
            <div key={event.id} className={`relative group ${completedEvents.length === 1 ? "lg:col-start-2" : ""}`}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition duration-300">
                    {event.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-blue-400">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                      <span>{event.date} | {event.time}</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                      <span>Attendees: {event.attendees}</span>
                    </div>
                  </div>
                  <a
                    href={`/eventsinfo/${event.id}`}
                    className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 transform hover:-translate-y-1"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
