import React from 'react';
import { siteData } from '../data/siteData';

export default function Press() {
  return (
    <section id="press" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
          Press & Recognition
        </h2>
        <div className="max-w-4xl space-y-12">
          {siteData.press.map((item) => (
            <div key={item.id} className="border-l-2 border-primary pl-8">
              <p className="text-sm text-muted-foreground mb-2">
                {item.publication} • {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
              <p className="text-lg text-muted-foreground">{item.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
