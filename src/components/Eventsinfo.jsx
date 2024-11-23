import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import image4 from "../assets/1300.jpg";
import r1 from "../assets/w1.jpg";
import r2 from "../assets/w2.jpg";
import r3 from "../assets/w3.jpg";
import c1 from "../assets/c1.jpeg";
import c2 from "../assets/c2.jpeg";
import c3 from "../assets/c3.jpeg";
import thirteen from "../assets/13(1).jpg";
const Eventsinfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [event, setEvent] = useState(null);

  // Mock event data - in real app would fetch from API/database
  const events = [
    {
      id: 1,
      description: "The 1300 Degrees Celsius Quiz challenges students to push their intellectual limits, testing knowledge across science, math, and general topics. Like melting a diamond, it requires critical thinking, teamwork, and strategy. Participants must rise to the challenge to emerge victorious in this thrilling competition.",
      images: [
        {
          url: image4
        },
        {
          url: thirteen
        }
      ],
      venue: "KL SAC",
      date: "November 13, 2024",
      time: "03:00 PM - 5:00 PM",
      attendees: "100",
      highlights: [
        "Intense Competition",
        "Diverse Rounds", 
        "Team Collaboration",
        "Celebrating Brilliance"
      ]
    },
    {
      id: 2,
      description: "The Walkathon brought together a vibrant community of participants to promote [cause], covering scenic routes and fostering unity. Highlights included an energizing warm-up session, fun activities, and inspiring speeches. The event concluded with medals, refreshments, and an unforgettable group celebration!",
      images: [
        {
          url: r1 
        },
        {
          url: r2
        },
        {
          url: r3
        }
      ],
      venue: "IGM Stadium",
      date: "June 06, 2024", 
      time: "07:30 AM",
      attendees: "200k+",
      highlights: [
        "Community Participation",
        "Exciting Activities",
        "Route and Scenery",
        "Memorable Finishing Line"
      ],
      
    },
    {
      id: 3,
      description: "The Cyclothon united cycling enthusiasts and advocates of [cause], pedaling through picturesque routes to raise awareness and inspire change. The event featured a thrilling start, engaging pit stops, and motivational guest speeches. Cyclists celebrated their achievement with medals, refreshments, and a vibrant closing ceremony!",
      images: [
        {
          url: c1 
        },
        {
          url: c2
        },
        {
          url: c3
        }
      ],
      venue: "IGM Stadium",
      date: "June 04, 2024", 
      time: "06:00 AM",
      attendees: "200k+",
      highlights: [
        "Massive Participation",
        "Scenic and Challenging Route",
        "Cause and Awareness",
        "Awards and Recognition"
      ],
      
    },
  ];

  useEffect(() => {
    const eventData = events.find(e => e.id === parseInt(id));
    setEvent(eventData);
  }, [id]);

  useEffect(() => {
    if (!event) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === event.images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [event]);

  const nextSlide = () => {
    if (!event) return;
    setCurrentSlide((prev) => (prev === event.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (!event) return;
    setCurrentSlide((prev) => (prev === 0 ? event.images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-black pt-40 flex items-center justify-center">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 pt-40">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="text-white hover:text-purple-400 transition duration-300 mb-8"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        {/* Hero Section */}
        <div className="relative w-[640px] h-[360px] mx-auto rounded-2xl overflow-hidden mb-16 shadow-2xl">
          {event.images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
                <p className="text-xl text-gray-200">{image.caption}</p>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button onClick={prevSlide} className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {event.images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-8 bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">About the Event</h2>
              <p className="text-gray-200 text-lg leading-relaxed">{event.description}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Event Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-4 text-gray-200">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-lg">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event Details Sidebar */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-fit">
            <h2 className="text-3xl font-bold text-white mb-8">Event Details</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-purple-300 font-medium mb-1">Venue</p>
                  <p className="text-white text-lg">{event.venue}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-purple-300 font-medium mb-1">Date & Time</p>
                  <p className="text-white text-lg">{event.date}</p>
                  <p className="text-white text-lg">{event.time}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-purple-300 font-medium mb-1">Expected Attendees</p>
                  <p className="text-white text-lg">{event.attendees}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventsinfo;
