import React, { useState, useEffect } from "react";
import image1 from "../assets/w1.jpg";
import image2 from "../assets/c1.jpeg";
import image4 from "../assets/c2.jpeg";
import image5 from "../assets/w3.jpg";
import image6 from "../assets/c3.jpeg";  
import thirteen from "../assets/13(1).jpg";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      url: thirteen,
      title: "1300 degree",
      color: "from-orange-400 to-red-500"
    },
    {
      url: image1,
      title: "Walkathon",
      color: "from-orange-400 to-red-500"
    },
    {
      url: image2,
      title: "Cyclothon", 
      color: "from-blue-400 to-indigo-500"
    },
    {
      url: image4,
      title: "Cyclothon",
      color: "from-cyan-400 to-blue-500"
    },
    {
      url: image5, 
      title: "Walkathon",
      color: "from-emerald-400 to-teal-500"
    },
    {
      url: image6,
      title: "Cyclothon",
      color: "from-rose-400 to-pink-500"
    },
    {
      url: image1,
      title: "Walkathon",
      color: "from-orange-400 to-red-500"
    },
    {
      url: image2,
      title: "Cyclothon", 
      color: "from-blue-400 to-indigo-500"
    },
    {
      url: image4,
      title: "Cyclothon",
      color: "from-cyan-400 to-blue-500"
    },
    {
      url: thirteen,
      title: "1300 degree",
      color: "from-orange-400 to-red-500"
    },
    {
      url: image1,
      title: "Walkathon",
      color: "from-orange-400 to-red-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 700);
  };

  return (
    <div className="bg-black pt-20 md:pt-40 min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-[1200px]">
        <h1 className={`text-3xl md:text-5xl font-bold text-center mb-12 md:mb-24 text-white bg-clip-text text-transparent bg-gradient-to-r ${images[currentSlide].color} transition-all duration-700`}>
          Event Gallery
        </h1>

        <div className="relative">
          {/* Main carousel */}
          <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-2xl group mb-4 md:mb-8">
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-300`}></div>
            
            <img
              src={images[currentSlide].url}
              alt={images[currentSlide].title}
              className={`absolute w-full h-full object-cover transition-all duration-700 ease-in-out transform scale-105 ${
                isTransitioning ? 'blur-sm scale-110' : 'blur-0'
              } group-hover:scale-110`}
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-20 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
              <h2 className={`text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4 bg-gradient-to-r ${images[currentSlide].color} bg-clip-text text-transparent`}>
                {images[currentSlide].title}
              </h2>
              <p className="text-base md:text-xl text-gray-200 mb-4 md:mb-8 opacity-90">{images[currentSlide].description}</p>
            </div>

            <button
              onClick={prevSlide}
              className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r ${images[currentSlide].color} text-white p-2 md:p-4 rounded-full transition-all duration-300 opacity-50 md:opacity-0 group-hover:opacity-100 hover:scale-110`}
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r ${images[currentSlide].color} text-white p-2 md:p-4 rounded-full transition-all duration-300 opacity-50 md:opacity-0 group-hover:opacity-100 hover:scale-110`}
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail strip - scrollable on mobile */}
          <div className="flex overflow-x-auto gap-2 md:gap-4 pb-4 px-2 -mx-2 scrollbar-hide" style={{scrollbarWidth: 'none', '-ms-overflow-style': 'none'}} >
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  currentSlide === index ? 'ring-2 ring-offset-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${
                  currentSlide === index ? 'opacity-0' : 'opacity-100'
                }`}></div>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full h-1 bg-gray-800 mt-4 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${images[currentSlide].color} transition-all duration-700`}
              style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
