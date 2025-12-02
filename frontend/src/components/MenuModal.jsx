import React from 'react';
import { X } from 'lucide-react';

export default function MenuModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const menuCategories = [
    {
      name: 'Coffee',
      items: [
        { name: 'Espresso', description: 'Rich and bold', price: '$3.50' },
        { name: 'Cappuccino', description: 'Creamy and smooth', price: '$4.50' },
        { name: 'Latte', description: 'Silky and comforting', price: '$4.75' },
        { name: 'Americano', description: 'Classic and strong', price: '$3.25' },
        { name: 'Mocha', description: 'Chocolate delight', price: '$5.00' },
      ]
    },
    {
      name: 'Pastries',
      items: [
        { name: 'Croissant', description: 'Buttery and flaky', price: '$3.25' },
        { name: 'Muffin', description: 'Fresh baked daily', price: '$2.95' },
        { name: 'Scone', description: 'Traditional English', price: '$3.50' },
        { name: 'Danish', description: 'Sweet and fruity', price: '$3.75' },
      ]
    },
    {
      name: 'Sandwiches',
      items: [
        { name: 'Turkey & Cheese', description: 'With lettuce and tomato', price: '$7.95' },
        { name: 'Ham & Swiss', description: 'On fresh sourdough', price: '$7.50' },
        { name: 'Veggie Delight', description: 'Fresh vegetables', price: '$6.95' },
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-white">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
      >
        <X size={32} className="text-gray-800" />
      </button>

      {/* Menu content */}
      <div className="h-full overflow-y-auto">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-center mb-4" style={{ fontFamily: "'Futura PT', 'Futura', sans-serif", fontWeight: 800 }}>
            Our Menu
          </h1>
          
          {/* Category links */}
          <div className="flex justify-center gap-8 mb-16">
            {menuCategories.map((category) => (
              <a
                key={category.name}
                href={`#${category.name.toLowerCase()}`}
                className="text-lg font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Menu items */}
            <div className="space-y-12">
              {menuCategories.map((category) => (
                <div key={category.name} id={category.name.toLowerCase()} className="border-b border-gray-200 pb-8">
                  <h2 className="text-3xl font-bold mb-6">{category.name}</h2>
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold">{item.name}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                        <span className="text-xl font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
