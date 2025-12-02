import React from 'react';
import { siteData } from '../data/siteData';

export default function Projects() {
  return (
    <section id="projects" className="bg-background py-12">
      {/* Full-width sections stacked vertically with gaps */}
      <div className="w-full space-y-12">
        {siteData.gallery.map((item, index) => (
          <div key={item.id} className="w-full px-12">
            {/* Each section is 50/50 split, alternating sides */}
            <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[500px] md:min-h-[450px] overflow-hidden rounded-2xl shadow-lg`}>
              {/* Image side - 50% */}
              <div className="w-full md:w-1/2 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content side - 50% */}
              <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-20 bg-muted">
                <div className="max-w-xl text-center">
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">{item.title}</h3>
                  <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
