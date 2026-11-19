export interface ServiceItem {
  id: string;
  title: string;
  shortTitleLines: string[];
  description: string;
  deliverables: string[];
  turnaround: string;
  image: string;
  iconKey: 'kitchen' | 'tv' | 'wardrobe' | 'panels' | 'appliance';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Kitchens' | 'TV & Living' | 'Interior Finishing' | 'Wardrobes & Bedrooms';
  location: string;
  summary: string;
  image: string;
  featured: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  projectType: string;
  initials: string;
  rating: number;
}

export interface ClientPlaceholder {
  id: string;
  name: string;
  sector: string;
  monogram: string;
}

export const SITE_CONTACT = {
  companyName: 'Bahar Al Najd Technical Service LLC',
  phoneDisplay: '+971 50 123 4567',
  phoneHref: 'tel:+971501234567',
  whatsappNumber: '971501234567',
  email: 'info@baharalnajd.ae',
  location: 'Dubai, United Arab Emirates',
};

export const HERO_MEDIA = {
  // Replace videoSrc with your hosted MP4/WebM URL when ready; poster & fallback image render seamlessly.
  videoSrc: '',
  posterImage: '/src/assets/images/hero_luxury_kitchen_1795116974099.jpg',
};

export const WHY_CHOOSE_IMAGE = '/src/assets/images/why_choose_living_1795116969432.jpg';
export const CTA_BANNER_IMAGE = '/src/assets/images/cta_armchair_interior_1795116970706.jpg';

export const SERVICES: ServiceItem[] = [
  {
    id: 'kitchen-installation',
    title: 'Kitchen Installation & Cabinetry',
    shortTitleLines: ['Kitchen', 'Installation', '& Cabinetry'],
    description:
      'Precision installation of custom modular and bespoke kitchens, soft-close cabinetry, quartz or marble countertops, and integrated under-cabinet lighting.',
    deliverables: [
      'Custom base, wall, and tall pantry cabinetry fitting',
      'Island assembly, stone countertop alignment, and sink cutouts',
      'Soft-close hardware calibration and under-cabinet LED integration',
    ],
    turnaround: '5–10 Days',
    image: '/src/assets/images/hero_luxury_kitchen_1795116974099.jpg',
    iconKey: 'kitchen',
  },
  {
    id: 'tv-feature-walls',
    title: 'TV & Feature Wall Units',
    shortTitleLines: ['TV &', 'Feature Wall', 'Units'],
    description:
      'Architectural entertainment walls combining marble-effect slabs, fluted wood panelling, floating consoles, concealed cabling, and warm ambient backlighting.',
    deliverables: [
      'Concealed structural TV mounting and cable management channels',
      'Backlit marble or porcelain feature slab installation',
      'Bespoke shelving niches with recessed warm LED strips',
    ],
    turnaround: '3–6 Days',
    image: '/src/assets/images/service_tv_wall_1795117003999.jpg',
    iconKey: 'tv',
  },
  {
    id: 'wardrobes-storage',
    title: 'Wardrobes & Storage Solutions',
    shortTitleLines: ['Wardrobes &', 'Storage Solutions'],
    description:
      'Floor-to-ceiling hinged and sliding wardrobes, walk-in dressing closets, and tailored internal organizers engineered to maximize every millimeter of space.',
    deliverables: [
      'Custom floor-to-ceiling wardrobe framing and matte door alignment',
      'Pull-out drawers, shoe racks, and accessory tray fitting',
      'Motion-sensor internal LED lighting and silent track systems',
    ],
    turnaround: '4–7 Days',
    image: '/src/assets/images/service_wardrobes_1795116971553.jpg',
    iconKey: 'wardrobe',
  },
  {
    id: 'interior-finishing',
    title: 'Interior Finishing & Wall Panels',
    shortTitleLines: ['Interior', 'Finishing &', 'Wall Panels'],
    description:
      'Refined interior wall cladding including vertical fluted wood slats, decorative acoustic panels, gypsum accents, and concealed cove lighting finishes.',
    deliverables: [
      'Fluted wood slat and WPC decorative wall cladding installation',
      'Seamless mitered corners, skirting boards, and trim detailing',
      'Ceiling cove lighting integration and clean surface finishing',
    ],
    turnaround: '2–5 Days',
    image: '/src/assets/images/service_wall_panels_1795116970891.jpg',
    iconKey: 'panels',
  },
  {
    id: 'appliance-installation',
    title: 'Appliance Installation',
    shortTitleLines: ['Appliance', 'Installation'],
    description:
      'Flush, safe, and level installation of built-in ovens, induction hobs, range hoods, dishwashers, and integrated refrigerators with full cabinetry alignment.',
    deliverables: [
      'Built-in oven, microwave, and coffee station flush cabinetry fitting',
      'Island and wall-mounted range hood ducting and alignment',
      'Integrated dishwasher and refrigerator panel leveling and testing',
    ],
    turnaround: '1–2 Days',
    image: '/src/assets/images/service_appliances_1795116984375.jpg',
    iconKey: 'appliance',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'terracotta-modern-kitchen',
    title: 'Custom Designer Kitchen Island',
    category: 'Kitchens',
    location: 'Residential Villa · Dubai',
    summary:
      'Full cabinetry installation in matte terracotta finish with white quartz waterfall island, induction hob cutout, and suspended matte-black extractor hood.',
    image: '/src/assets/images/project_coral_kitchen_1795116997940.jpg',
    featured: true,
  },
  {
    id: 'backlit-marble-tv-unit',
    title: 'Backlit Marble & Walnut TV Unit',
    category: 'TV & Living',
    location: 'Contemporary Apartment · Dubai',
    summary:
      'Floating veined marble TV backdrop with perimeter warm LED lighting, flanking walnut display shelving, and fluted cream media console.',
    image: '/src/assets/images/service_tv_wall_1795117003999.jpg',
    featured: true,
  },
  {
    id: 'luxury-marble-bath-finishing',
    title: 'Marble Walk-In Shower & Vanity',
    category: 'Interior Finishing',
    location: 'Private Residence · Dubai',
    summary:
      'Precision glass shower enclosure fitting, illuminated recessed marble niche, floating oak vanity installation, and backlit mirror mounting.',
    image: '/src/assets/images/project_luxury_bathroom_1795116970589.jpg',
    featured: true,
  },
  {
    id: 'fluted-master-bedroom',
    title: 'Fluted Oak & Marble Master Suite',
    category: 'Wardrobes & Bedrooms',
    location: 'Luxury Residence · Dubai',
    summary:
      'Floor-to-ceiling vertical oak slat headboard feature wall framed by veined travertine cladding and recessed linear LED illumination.',
    image: '/src/assets/images/project_luxury_bedroom_1795116974465.jpg',
    featured: true,
  },
  {
    id: 'walnut-executive-kitchen',
    title: 'Walnut & Brass Accent Kitchen',
    category: 'Kitchens',
    location: 'Townhouse Renovation · Dubai',
    summary:
      'Complete dark-walnut cabinetry installation with glass display vitrines, warm internal strip lighting, and monolithic veined stone island.',
    image: '/src/assets/images/hero_luxury_kitchen_1795116974099.jpg',
    featured: false,
  },
  {
    id: 'living-room-feature-wall',
    title: 'Grand Lounge Media Wall & Shelving',
    category: 'TV & Living',
    location: 'Villa Living Room · Dubai',
    summary:
      'Expansive vertical fluted oak wall treatment integrated with large-format marble TV paneling and warm lit display compartments.',
    image: '/src/assets/images/why_choose_living_1795116969432.jpg',
    featured: false,
  },
  {
    id: 'walk-in-dressing-wardrobes',
    title: 'Bespoke Matte Taupe Dressing Room',
    category: 'Wardrobes & Bedrooms',
    location: 'Master Suite · Dubai',
    summary:
      'Seamless full-height custom wardrobe run with integrated recessed vertical handles, bespoke mirror enclosure, and custom drawer islands.',
    image: '/src/assets/images/service_wardrobes_1795116971553.jpg',
    featured: false,
  },
  {
    id: 'corridor-fluted-paneling',
    title: 'Architectural Fluted Corridor Panels',
    category: 'Interior Finishing',
    location: 'Commercial Suite · Dubai',
    summary:
      'Precision-aligned vertical oak wall slats paired with matte architectural cladding and continuous perimeter ceiling cove illumination.',
    image: '/src/assets/images/service_wall_panels_1795116970891.jpg',
    featured: false,
  },
];

// Clearly marked replaceable placeholder testimonials — swap with verified client reviews before going live.
export const PLACEHOLDER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'placeholder-1',
    quote:
      'Sample feedback placeholder: The installation team aligned every cabinet door and stone joint with remarkable precision. Our kitchen was completed on schedule and left spotless.',
    author: 'Client Name (Placeholder)',
    role: 'Homeowner · Sample Review',
    projectType: 'Kitchen Installation & Cabinetry',
    initials: 'CN',
    rating: 5,
  },
  {
    id: 'placeholder-2',
    quote:
      'Sample feedback placeholder: From initial measurements to final LED lighting checks, the TV feature wall and fluted panels transformed our living room exactly as planned.',
    author: 'Property Owner (Placeholder)',
    role: 'Villa Renovation · Sample Review',
    projectType: 'TV & Feature Wall Units',
    initials: 'PO',
    rating: 5,
  },
  {
    id: 'placeholder-3',
    quote:
      'Sample feedback placeholder: Clear communication throughout the project, clean workmanship, and reliable follow-up after handover. Highly recommended for custom wardrobes and finishing.',
    author: 'Commercial Client (Placeholder)',
    role: 'Office Fit-Out · Sample Review',
    projectType: 'Wardrobes & Interior Finishing',
    initials: 'CC',
    rating: 5,
  },
  {
    id: 'placeholder-4',
    quote:
      'Sample feedback placeholder: All built-in ovens, hobs, and integrated cabinetry were fitted flush without a single scratch. Professional, punctual, and detail-oriented from start to finish.',
    author: 'Resident Client (Placeholder)',
    role: 'Apartment Upgrade · Sample Review',
    projectType: 'Appliance Installation',
    initials: 'RC',
    rating: 5,
  },
];

// Clearly editable placeholder partner logo slots — replace with confirmed client logos once authorized.
export const CLIENT_LOGO_SLOTS: ClientPlaceholder[] = [
  { id: 'slot-1', name: 'Residential Villas', sector: 'Partner Logo Slot 01', monogram: 'RV' },
  { id: 'slot-2', name: 'Al Najd Properties', sector: 'Partner Logo Slot 02', monogram: 'AN' },
  { id: 'slot-3', name: 'Emirates Living', sector: 'Partner Logo Slot 03', monogram: 'EL' },
  { id: 'slot-4', name: 'Modern Spaces Co.', sector: 'Partner Logo Slot 04', monogram: 'MS' },
  { id: 'slot-5', name: 'Horizon Estates', sector: 'Partner Logo Slot 05', monogram: 'HE' },
];
