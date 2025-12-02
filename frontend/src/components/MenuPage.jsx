import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-center mb-8" style={{ fontFamily: "'Futura PT', 'Futura', sans-serif", fontWeight: 800 }}>
            Our Menu
          </h1>
          
          <div className="max-w-6xl mx-auto">
            <Products />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
