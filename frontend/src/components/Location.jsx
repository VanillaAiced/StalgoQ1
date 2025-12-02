import React from 'react';
import { MapPin, Instagram, Mail } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">
          Get in Touch
        </h2>
        <div className="max-w-2xl grid md:grid-cols-3 gap-12">
          <div>
            <MapPin className="w-6 h-6 mb-4" />
            <p className="text-sm text-muted-foreground mb-1">Address</p>
            <a href="https://maps.app.goo.gl/43UFxBwgPjwQqdGe9" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity cursor-pointer">
              <p className="font-medium">{siteData.location.address}</p>
              <p className="font-medium">{siteData.location.city}</p>
            </a>
          </div>
          <div>
            <Instagram className="w-6 h-6 mb-4" />
            <p className="text-sm text-muted-foreground mb-1">Instagram</p>
            <a href="https://www.instagram.com/midnightsuncafe_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity cursor-pointer">
              <p className="font-medium">{siteData.location.phone}</p>
            </a>
          </div>
          <div>
            <Mail className="w-6 h-6 mb-4" />
            <p className="text-sm text-muted-foreground mb-1">Email</p>
            <p className="font-medium">{siteData.location.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
