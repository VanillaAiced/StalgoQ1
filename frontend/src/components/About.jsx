import React from 'react';
import { siteData } from '../data/siteData';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            {siteData.about.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
            {siteData.about.description}
          </p>
          <p className="text-lg md:text-xl text-foreground font-medium">
            {siteData.about.mission}
          </p>
        </div>
      </div>
    </section>
  );
}
