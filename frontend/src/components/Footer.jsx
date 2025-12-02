import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Showcase. All rights reserved. Airel Jan Evangelista.
          </p>
          <p className="text-sm text-muted-foreground">
            Brewed With Love under the endless Sun.
          </p>
        </div>
      </div>
    </footer>
  );
}
