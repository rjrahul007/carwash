import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optional: Add animations when component mounts
    const container = containerRef.current;
    if (container) {
      container.classList.add('opacity-100');
      container.classList.remove('opacity-0');
    }
  }, []);

  return (
    <section 
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/6873086/pexels-photo-6873086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Animated water droplet overlay - subtle effect */}
      <div className="absolute inset-0 bg-blue-900/30 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 transition-all duration-700 transform">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The Ultimate <span className="text-blue-400">Car Wash</span> Experience
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Premium car care services designed for those who expect nothing but the best. 
            Experience the difference of professional detailing with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              className="animate-pulse"
            >
              Book Your Wash
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white hover:bg-white/10 active:bg-white/20"
              href="#services"
            
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;