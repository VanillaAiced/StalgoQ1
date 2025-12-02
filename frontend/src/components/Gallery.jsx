import React from 'react';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gallery grid will go here */}
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Gallery Item 1
            </div>
          </div>
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Gallery Item 2
            </div>
          </div>
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Gallery Item 3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
