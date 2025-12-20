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
  const [products, setProducts] = React.useState([]);
  
  React.useEffect(() => {
    async function fetchProducts() {
      const {data} = await axios.get('http://127.0.0.1:8000/api/products/')
      setProducts(data)
    }
    fetchProducts()
  }, [])
  
  if (!isOpen) return null;

  const menuCategories = [
    {
      name: 'SANDWICH',
      items: [
        { name: 'Cheesy Ham', price: '140', image: cheesyham },
        { name: 'Cheesy Meat', price: '140', image: cheesymeat },
      ]
    },
    {
      name: 'CHICKEN FINGERS',
      items: [
        { name: 'Double Cheese', price: '160', image: doublecheesechick},
        { name: 'Glazed Teriyaki', price: '160', image: teri },
      ]
    },
    {
      name: 'FRIES',
      items: [
        { name: 'Barbecue', price: '75', image: bar },
        { name: 'Cheese', price: '75', image: cheese },
        { name: 'Sour Cream', price: '75', image: sc },
      ]
    },
    {
      name: 'CROFFLES',
      items: [
        { name: 'Chocolate Oreo', price: '145', image: oreo },
        { name: 'Cinnamon Biscoff', price: '145', image: biscoff },
        { name: 'Mango Graham', price: '145', image: mango },
        { name: 'Salted Caramel', price: '145', image: saltcarm },
        { name: 'Strawberry', price: '145', image: strawberry },
      ]
    },
    {
      name: 'CAKE',
      items: [
        { name: 'Blueberry Cheesecake', price: '165', image: bbc },
        { name: 'Biscoff Cheesecake', price: '175', image: biscoffcake },
      ]
    },
    {
      name: 'COOKIES',
      items: [
        { name: 'Chocolate Chip', price: '85', image: cc },
        { name: 'Double Chocolate', price: '100', image: dcc },
        { name: "S'mores", price: '100', image: smores },
        { name: 'Red Velvet', price: '115', image: rev },
      ]
    },
    {
      name: 'SIGNATURE',
      items: [
        { name: 'Caramel Macchiato', description: 'espresso, caramel, milk', price: 'Hot 145 / Iced 140', image: carmm },
        { name: 'Spanish Latte', description: 'espresso, condensed milk, milk', price: 'Hot 155 / Iced 150', image: spanish },
        { name: 'Sea Salt Latte', description: 'espresso, sea salt breve', price: 'Iced 160', image: seasalt },
        { name: 'Mocha Breve', description: 'espresso, chocolate, breve', price: 'Iced 160', image: breve },
        { name: 'Dirty Cinnamon Biscoff', description: 'espresso, biscoff breve, cinnamon', price: 'Iced 170', image: dirtycb },
        { name: 'Dirty Matcha', description: 'espresso, matcha, milk', price: 'Hot 175 / Iced 170', image: dirtymatcha },
      ]
    },
    {
      name: 'TRADITIONAL',
      items: [
        { name: 'Long Black', price: 'Hot 95', image: longblack },
        { name: 'Honey Americano', price: 'Hot 90 / Iced 100', image: honeyame },
        { name: 'Latte', price: 'Hot 100 / Iced 110', image: latte },
        { name: 'Cappuccino', price: 'Hot 100' , image: capp },
        { name: 'Mocha', price: 'Hot 115', image: mocha},
      ]
    },
    {
      name: 'NON-COFFEE',
      items: [
        { name: 'Choco Rush', description: 'chocolate, breve', price: '130', image: rush },
        { name: 'Midnight Matcha', description: 'matcha, milk', price: '160', image: midnight },
        { name: 'Cinnamon Honeybear', description: 'cinnamon, honey, milk', price: '160', image: honeycin },
        { name: 'Milo Dinosaur', description: 'chocolate milo, milk', price: '160', image: milod },
        { name: 'Cinnamon Biscoff', description: 'biscoff breve, cinnamon', price: '170', image: biss },
      ]
    },
    {
      name: 'FRAPPE',
      items: [
        { name: 'Java Chip', price: 'w/ Coffee 160 / Iced 170', image: java },
        { name: 'Caramel Popcorn', price: 'w/ Coffee 160 / Iced 170', image: carmfrap },
        { name: 'White Mocha', price: 'w/ Coffee 160 / Iced 170', image: whitemocha },
      ]
    },
    {
      name: 'YOGURT SMOOTHIE',
      items: [
        { name: 'Lychee Yogurt', price: '160', image: lychee },
        { name: 'Mango Yogurt', price: '160', image: mangoy },
        { name: 'Strawberry Yogurt', price: '160', image: strawy },
      ]
    },
    {
      name: 'FIZZY DRINK',
      items: [
        { name: 'Green Apple Tonic', price: '115', image: green },
        { name: 'Mango Tonic', price: '115', image: mangofizz },
        { name: 'Strawberry Tonic', price: '115', image: strawberryfizz },
      ]
    },
    {
      name: 'REFRESHERS',
      items: [
        { name: 'Green Apple Lemonade', price: '110', image: gal },
        { name: 'Mango Lemonade', price: '110', image: ml },
        { name: 'Strawberry Lemonade', price: '110', image: sl },
      ]
    },
    {
      name: 'ADD-ONS',
      items: [
        { name: 'Syrup Pump', price: '15', image: pump },
        { name: 'Espresso 1 Shot', price: '30', image: shot },
        { name: 'Oat Milk / Sub Out', price: '30', image: oats },
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
                {selectedCategory.items.map((item) => (
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
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">★</span>
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
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
