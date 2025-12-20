import React from 'react';
import { X } from 'lucide-react';
import Header from './Header';
import axios from 'axios';
import cheesyham from './images/cheesyham.jpg';
import cheesymeat from './images/cheesymeat.jpg';
import doublecheesechick from './images/doublecheesechick.jpg';
import teri from './images/teri.jpg';
import bar from './images/bar.jpg';
import cheese from './images/cheese.jpg';
import sc from './images/sc.jpg';
import oreo from './images/oreo.jpg';
import biscoff from './images/biscoff.jpg';
import mango from './images/mango.jpg';
import saltcarm from './images/saltcarm.jpg';
import strawberry from './images/strawberry.jpg';
import bbc from './images/bbc.jpg';
import biscoffcake from './images/biscoffcake.jpg';
import cc from './images/cc.jpg';
import dcc from './images/dcc.jpg';
import smores from './images/smores.jpg';
import rev from './images/rev.jpg';
import carmm from './images/carmm.jpg';
import spanish from './images/spanish.jpg';
import seasalt from './images/seasalt.jpg';
import breve from './images/breve.jpg';
import dirtycb from './images/dirtycb.jpg';
import dirtymatcha from './images/dirtymatcha.jpg';
import longblack from './images/longblack.jpg';
import honeyame from './images/honeyame.jpg';
import latte from './images/latte.jpg';
import capp from './images/capp.jpg';
import mocha from './images/mocha.jpg';
import rush from './images/rush.jpg';
import midnight from './images/midnight.jpg';
import honeycin from  './images/honeycin.jpg';
import milod from './images/milod.jpg';
import biss from './images/biss.jpg';
import java from './images/java.jpg';
import carmfrap from './images/carmfrap.jpg';
import whitemocha from './images/whitemocha.jpg';
import strawy from './images/strawy.jpg';
import mangoy from './images/mangoy.jpg';
import lychee from './images/lychee.jpg';
import green from './images/green.jpg';
import mangofizz from './images/mangofizz.jpg';
import strawberryfizz from './images/strawberryfizz.jpg';
import gal from './images/gal.jpg';
import ml from './images/ml.jpg';
import sl from './images/sl.jpg';
import pump from './images/pump.jpg';
import shot from './images/shot.jpg';
import oats from './images/oats.jpg';

export default function MenuModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [ratings, setRatings] = React.useState({});
  const [userRatings, setUserRatings] = React.useState({});
  
  React.useEffect(() => {
    async function fetchProducts() {
      const {data} = await axios.get('http://127.0.0.1:8000/api/products/')
      
      // Initialize ratings from backend data
      const initialRatings = {};
      data.forEach(product => {
        initialRatings[product._id] = {
          rating: product.rating,
          numReviews: product.numReviews
        };
      });
      setRatings(initialRatings);
    }
    fetchProducts()
  }, [])
  
  const handleRating = async (productId, ratingValue) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/products/${productId}/rate/`,
        { rating: ratingValue }
      );
      
      // Update local ratings
      setRatings(prev => ({
        ...prev,
        [productId]: {
          rating: response.data.rating,
          numReviews: response.data.numReviews
        }
      }));
      
      // Track user's rating for this product
      setUserRatings(prev => ({
        ...prev,
        [productId]: ratingValue
      }));
    } catch (error) {
      console.error('Error submitting rating:', error);
      alert('Failed to submit rating. Please try again.');
    }
  };
  
  if (!isOpen) return null;

  const menuCategories = [
    {
      name: 'SANDWICH',
      items: [
        { id: '1', name: 'Cheesy Ham', price: '140', image: cheesyham },
        { id: '2', name: 'Cheesy Meat', price: '140', image: cheesymeat },
      ]
    },
    {
      name: 'CHICKEN FINGERS',
      items: [
        { id: '3', name: 'Double Cheese', price: '160', image: doublecheesechick},
        { id: '4', name: 'Glazed Teriyaki', price: '160', image: teri },
      ]
    },
    {
      name: 'FRIES',
      items: [
        { id: 'fries1', name: 'Barbecue', price: '75', image: bar },
        { id: 'fries2', name: 'Cheese', price: '75', image: cheese },
        { id: 'fries3', name: 'Sour Cream', price: '75', image: sc },
      ]
    },
    {
      name: 'CROFFLES',
      items: [
        { id: 'croffle1', name: 'Chocolate Oreo', price: '145', image: oreo },
        { id: 'croffle2', name: 'Cinnamon Biscoff', price: '145', image: biscoff },
        { id: 'croffle3', name: 'Mango Graham', price: '145', image: mango },
        { id: 'croffle4', name: 'Salted Caramel', price: '145', image: saltcarm },
        { id: 'croffle5', name: 'Strawberry', price: '145', image: strawberry },
      ]
    },
    {
      name: 'CAKE',
      items: [
        { id: 'cake1', name: 'Blueberry Cheesecake', price: '165', image: bbc },
        { id: 'cake2', name: 'Biscoff Cheesecake', price: '175', image: biscoffcake },
      ]
    },
    {
      name: 'COOKIES',
      items: [
        { id: 'cookie1', name: 'Chocolate Chip', price: '85', image: cc },
        { id: 'cookie2', name: 'Double Chocolate', price: '100', image: dcc },
        { id: 'cookie3', name: "S'mores", price: '100', image: smores },
        { id: 'cookie4', name: 'Red Velvet', price: '115', image: rev },
      ]
    },
    {
      name: 'SIGNATURE',
      items: [
        { id: '5', name: 'Caramel Macchiato', description: 'espresso, caramel, milk', price: 'Hot 145 / Iced 140', image: carmm },
        { id: '6', name: 'Spanish Latte', description: 'espresso, condensed milk, milk', price: 'Hot 155 / Iced 150', image: spanish },
        { id: 'sig3', name: 'Sea Salt Latte', description: 'espresso, sea salt breve', price: 'Iced 160', image: seasalt },
        { id: 'sig4', name: 'Mocha Breve', description: 'espresso, chocolate, breve', price: 'Iced 160', image: breve },
        { id: 'sig5', name: 'Dirty Cinnamon Biscoff', description: 'espresso, biscoff breve, cinnamon', price: 'Iced 170', image: dirtycb },
        { id: 'sig6', name: 'Dirty Matcha', description: 'espresso, matcha, milk', price: 'Hot 175 / Iced 170', image: dirtymatcha },
      ]
    },
    {
      name: 'TRADITIONAL',
      items: [
        { id: 'trad1', name: 'Long Black', price: 'Hot 95', image: longblack },
        { id: 'trad2', name: 'Honey Americano', price: 'Hot 90 / Iced 100', image: honeyame },
        { id: 'trad3', name: 'Latte', price: 'Hot 100 / Iced 110', image: latte },
        { id: 'trad4', name: 'Cappuccino', price: 'Hot 100' , image: capp },
        { id: 'trad5', name: 'Mocha', price: 'Hot 115', image: mocha},
      ]
    },
    {
      name: 'NON-COFFEE',
      items: [
        { id: 'noncoffee1', name: 'Choco Rush', description: 'chocolate, breve', price: '130', image: rush },
        { id: 'noncoffee2', name: 'Midnight Matcha', description: 'matcha, milk', price: '160', image: midnight },
        { id: 'noncoffee3', name: 'Cinnamon Honeybear', description: 'cinnamon, honey, milk', price: '160', image: honeycin },
        { id: 'noncoffee4', name: 'Milo Dinosaur', description: 'chocolate milo, milk', price: '160', image: milod },
        { id: 'noncoffee5', name: 'Cinnamon Biscoff', description: 'biscoff breve, cinnamon', price: '170', image: biss },
      ]
    },
    {
      name: 'FRAPPE',
      items: [
        { id: 'frappe1', name: 'Java Chip', price: 'w/ Coffee 160 / Iced 170', image: java },
        { id: 'frappe2', name: 'Caramel Popcorn', price: 'w/ Coffee 160 / Iced 170', image: carmfrap },
        { id: 'frappe3', name: 'White Mocha', price: 'w/ Coffee 160 / Iced 170', image: whitemocha },
      ]
    },
    {
      name: 'YOGURT SMOOTHIE',
      items: [
        { id: 'yogurt1', name: 'Lychee Yogurt', price: '160', image: lychee },
        { id: 'yogurt2', name: 'Mango Yogurt', price: '160', image: mangoy },
        { id: 'yogurt3', name: 'Strawberry Yogurt', price: '160', image: strawy },
      ]
    },
    {
      name: 'FIZZY DRINK',
      items: [
        { id: 'fizzy1', name: 'Green Apple Tonic', price: '115', image: green },
        { id: 'fizzy2', name: 'Mango Tonic', price: '115', image: mangofizz },
        { id: 'fizzy3', name: 'Strawberry Tonic', price: '115', image: strawberryfizz },
      ]
    },
    {
      name: 'REFRESHERS',
      items: [
        { id: 'refresh1', name: 'Green Apple Lemonade', price: '110', image: gal },
        { id: 'refresh2', name: 'Mango Lemonade', price: '110', image: ml },
        { id: 'refresh3', name: 'Strawberry Lemonade', price: '110', image: sl },
      ]
    },
    {
      name: 'ADD-ONS',
      items: [
        { id: 'addon1', name: 'Syrup Pump', price: '15', image: pump },
        { id: 'addon2', name: 'Espresso 1 Shot', price: '30', image: shot },
        { id: 'addon3', name: 'Oat Milk / Sub Out', price: '30', image: oats },
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-white">
      <Header />
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-[110]"
      >
        <X size={32} className="text-gray-800" />
      </button>

      {/* Menu content */}
      <div className="h-full overflow-y-auto">
        <div className="container mx-auto px-6 lg:px-12 py-20 mt-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-center mb-8" style={{ fontFamily: "'Futura PT', 'Futura', sans-serif", fontWeight: 800 }}>
            Our Menu
          </h1>
          
          <div className="max-w-6xl mx-auto">
            {/* Menu items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuCategories.map((category) => (
                <div 
                  key={category.name} 
                  id={category.name.toLowerCase().replace(/\s+/g, '-')} 
                  className="rounded-lg p-6 shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#0C2039' }}
                  onClick={() => setSelectedCategory(category)}
                >
                  <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide text-white border-b border-white/20 pb-3" style={{ fontFamily: "'Futura PT', 'Futura', sans-serif", fontWeight: 800 }}>
                    {category.name}
                  </h2>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex justify-between items-start gap-4 text-white">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold">{item.name}</h3>
                          {item.description && <p className="text-xs text-white/70 italic mt-1">{item.description}</p>}
                        </div>
                        <span className="text-base font-bold whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Detail View */}
      {selectedCategory && (
        <div className="fixed inset-0 z-[120] bg-white">
          <Header />
          <button
            onClick={() => setSelectedCategory(null)}
            className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-[130]"
          >
            <X size={32} className="text-gray-800" />
          </button>
          
          <div className="h-full overflow-y-auto pt-32 pb-20">
            <div className="container mx-auto px-6 lg:px-12">
              <h1 className="text-5xl font-black text-center mb-12 uppercase" style={{ fontFamily: "'Futura PT', 'Futura', sans-serif", fontWeight: 800 }}>
                {selectedCategory.name}
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {selectedCategory.items.map((item) => {
                  const itemRating = ratings[item.id] || { rating: 0, numReviews: 0 };
                  const userRating = userRatings[item.id] || 0;
                  
                  return (
                    <div key={item.name} className="rounded-lg overflow-hidden shadow-xl" style={{ backgroundColor: '#0C2039' }}>
                      {/* Food image */}
                      <div className="h-64 bg-gray-700 overflow-hidden">
                        <img 
                          src={item.image || '/images/food/placeholder.jpg'} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-white/50 text-6xl">🍽️</span>
                        </div>
                      </div>
                      
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                        {item.description && (
                          <p className="text-sm text-white/70 italic mb-4">{item.description}</p>
                        )}
                        
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl font-bold">₱{item.price}</span>
                        </div>
                        
                        {/* Display average rating */}
                        <div className="mb-3">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <span 
                                  key={i} 
                                  className={`text-xl ${i < Math.round(itemRating.rating) ? 'text-yellow-400' : 'text-gray-500'}`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <span className="text-sm text-white/70">
                              {itemRating.rating > 0 ? itemRating.rating.toFixed(1) : 'No ratings'} 
                              {itemRating.numReviews > 0 && ` (${itemRating.numReviews} ${itemRating.numReviews === 1 ? 'review' : 'reviews'})`}
                            </span>
                          </div>
                        </div>
                        
                        {/* Rate this item */}
                        <div className="mb-4 border-t border-white/20 pt-3">
                          <p className="text-sm text-white/70 mb-2">
                            {userRating > 0 ? 'Your rating:' : 'Rate this item:'}
                          </p>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                onClick={() => handleRating(item.id, star)}
                                className="text-2xl hover:scale-110 transition-transform focus:outline-none"
                              >
                                <span className={star <= userRating ? 'text-yellow-400' : 'text-gray-500'}>
                                  ★
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <button 
                          className="w-full py-3 bg-white text-[#0C2039] font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(`Added ${item.name} to cart!`);
                          }}
                        >
                          Add to Order
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
