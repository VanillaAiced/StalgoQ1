import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import menu1 from './images/menu1.jpg';
import menu2 from './images/menu2.jpg';

export default function Products() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);

  const products = [
    {
      id: 1,
      name: 'Coffee Menu',
      description: 'Our signature coffee selection',
      image: menu1
    },
    {
      id: 2,
      name: 'Pastries',
      description: 'Fresh baked daily',
      image: menu2
    }
  ];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextCard();
    }
    if (isRightSwipe) {
      prevCard();
    }
  };

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + products.length) % products.length;
    
    if (diff === 0) {
      // Front card
      return {
        transform: 'translateX(0) translateY(0) scale(1)',
        zIndex: 3,
        opacity: 1
      };
    } else if (diff === 1) {
      // Back card
      return {
        transform: 'translateX(20px) translateY(-20px) scale(0.95)',
        zIndex: 2,
        opacity: 0.7
      };
    } else {
      // Hidden cards
      return {
        transform: 'translateX(40px) translateY(-40px) scale(0.9)',
        zIndex: 1,
        opacity: 0
      };
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-[600px] py-12">
      {/* Left Button - Hidden on mobile */}
      <button
        onClick={prevCard}
        className="hidden md:block absolute left-[152px] z-10 p-4 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Cards Stack */}
      <div 
        className="relative w-full max-w-2xl h-[500px] md:h-[900px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className="absolute inset-0 bg-white rounded-2xl shadow-2xl transition-all duration-500 ease-in-out overflow-hidden"
            style={getCardStyle(index)}
          >
            <div className="w-full h-full p-4 md:p-8">
              <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.backgroundColor = '#f3f4f6';
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button - Hidden on mobile */}
      <button
        onClick={nextCard}
        className="hidden md:block absolute right-[152px] z-10 p-4 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
