import React from 'react';
import { siteData } from '../data/siteData';

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {siteData.team.map((member) => (
            <div key={member.id} className="group">
              <div className="mb-6 overflow-hidden rounded-lg aspect-square">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
