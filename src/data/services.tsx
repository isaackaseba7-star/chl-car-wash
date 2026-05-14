import { Droplets, Sparkles, Gem, Wrench, Shield, Search } from 'lucide-react';
import React from 'react';

export const servicesData = [
  {
    id: "exterior-wash",
    icon: <Droplets className="w-8 h-8" />,
    title: "Exterior Wash",
    description: "Thorough hand wash, wheel cleaning, and tire dressing to restore your car's brilliant shine.",
    benefit: "Spotless shine & paint protection",
    details: "Our Exterior Wash isn't just a quick rinse. We meticulously hand wash every panel, safely removing dirt, road grime, and contaminants without scratching your clear coat. We pay special attention to the wheels and tires, removing brake dust and applying a premium tire dressing for that deep, wet look.",
    longDescription: [
      "Two-bucket hand wash method to prevent swirl marks",
      "Thorough cleaning of wheel faces, barrels, and wheel wells",
      "Bug and tar removal from the front bumper and mirrors",
      "Air drying to prevent water spots",
      "Application of premium tire dressing",
      "Exterior glass cleaning for crystal clear vision"
    ],
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "interior-cleaning",
    icon: <Sparkles className="w-8 h-8" />,
    title: "Interior Cleaning",
    description: "Deep vacuuming, upholstery wiping, and dashboard conditioning for a fresh, new-car feel.",
    benefit: "Freshness & hygiene",
    details: "We spend most of our time inside our cars, making a clean interior essential for a pleasant driving experience. Our Interior Cleaning service targets every nook and cranny, removing dust, crumbs, and allergens, leaving your cabin smelling fresh and looking immaculate.",
    longDescription: [
      "Thorough vacuuming of all carpets, floor mats, and seats",
      "Wiping down and sanitizing all hard surfaces (dashboard, console, door panels)",
      "Cleaning out cup holders and storage compartments",
      "Interior glass and mirror cleaning for streak-free visibility",
      "Leather cleaning and gentle conditioning (if applicable)",
      "Application of UV protectant to dashboard to prevent fading and cracking"
    ],
    image: "https://images.unsplash.com/photo-1550524514-ce1aa6510e14?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "full-car-detailing",
    icon: <Gem className="w-8 h-8" />,
    title: "Full Car Detailing",
    description: "The ultimate package. Complete interior and exterior restoration matching showroom standards.",
    benefit: "Complete vehicle rejuvenation",
    details: "For those who want it all, our Full Car Detailing package combines our premium exterior and interior services to completely rejuvenate your vehicle. Whether you're preparing to sell, returning a lease, or just want to treat your car, this package restores it to showroom-like condition.",
    longDescription: [
      "Complete Exterior Wash including wheels and wheels wells",
      "Clay bar treatment to remove embedded paint contaminants",
      "Application of premium carnauba wax or synthetic sealant",
      "Deep Interior Cleaning including specialized stain treatment",
      "Shampooing of carpets and cloth seats",
      "Engine bay wipe down and dressing"
    ],
    image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "engine-cleaning",
    icon: <Wrench className="w-8 h-8" />,
    title: "Engine Cleaning",
    description: "Safe degreasing and cleaning of your engine bay to remove grime and identify leaks easily.",
    benefit: "Performance & longevity",
    details: "A clean engine bay isn't just about looks—it helps engines run cooler and makes it easier to spot potential leaks or issues before they become major problems. We use safe, specialized degreasers and gentle water pressure to clean the bay without risking sensitive electronic components.",
    longDescription: [
      "Covering and protecting sensitive electronics and the alternator",
      "Application of specialized engine degreaser",
      "Agitation with detail brushes to loosen caked-on grease and dirt",
      "Gentle rinse to wash away debris",
      "Blow drying with compressed air",
      "Application of a high-quality dressing for a clean, factory-like finish"
    ],
    image: "https://images.unsplash.com/photo-1486262715619-67081010dd13?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "wax-polish",
    icon: <Shield className="w-8 h-8" />,
    title: "Wax & Polish",
    description: "Professional machine polishing and premium wax application to remove swirls and add a glass-like finish.",
    benefit: "Deep gloss & UV protection",
    details: "Over time, your car's clear coat can become dull due to micro-scratches, wash swirls, and UV exposure. Our Wax & Polish service revitalizes the paint, restoring its deep shine and providing a durable layer of protection against the harsh Zambian sun and environmental fallout.",
    longDescription: [
      "Decontamination wash to prep the paint surface",
      "Machine application of a polishing compound to remove light swirls and oxidation",
      "Refinement polish to maximize gloss and clarity",
      "Hand or machine application of a premium, long-lasting wax or sealant",
      "Buffing to a brilliant, streak-free shine",
      "Exterior trim dressing to restore rich black color"
    ],
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "scratch-removal",
    icon: <Search className="w-8 h-8" />,
    title: "Scratch Removal",
    description: "Targeted paint correction to eliminate minor scratches, swirl marks, and surface blemishes.",
    benefit: "Flawless clear coat",
    details: "Unsightly scratches from branches, keys, or poor washing techniques can ruin your car's appearance. Our targeted Scratch Removal service utilizes varying grades of polishing compounds and pads to safely level the clear coat, permanently removing light-to-medium scratches and restoring a flawless finish.",
    longDescription: [
      "Paint thickness assessment to ensure safe correction",
      "Targeted compounding to level deeper scratches",
      "Progressive polishing to eliminate compounding haze",
      "Final jeweling polish for maximum clarity and reflection",
      "Application of protective coating over the corrected area",
      "Tips and advice on preventing future wash-related scratches"
    ],
    image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&q=80&w=1200"
  }
];
