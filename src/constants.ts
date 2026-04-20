export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const AMENITIES = [
  { name: 'Free Super Fast Internet', icon: 'Wifi' },
  { name: 'Call Answering', icon: 'PhoneCall' },
  { name: 'Ample Free Parking', icon: 'Car' },
  { name: 'Coffee Machine', icon: 'Coffee' },
  { name: 'Lounge Area', icon: 'Armchair' },
  { name: 'Printing and Scanning', icon: 'Printer' },
  { name: 'Lockers', icon: 'Box' },
  { name: 'Board Rooms Time', icon: 'Users' },
];

export const SPACES = [
  {
    name: 'Event Space',
    image: 'https://picsum.photos/seed/netwyn-event/800/600',
    description: 'A versatile space for large gatherings and presentations.',
  },
  {
    name: 'Private Office',
    image: 'https://picsum.photos/seed/netwyn-office/800/600',
    description: 'Quiet, professional environment for focused work.',
  },
  {
    name: 'Boardroom',
    image: 'https://picsum.photos/seed/netwyn-boardroom/800/600',
    description: 'Equipped with latest audio and video features.',
  },
];

export const PLANS = [
  {
    name: 'Hot Desk',
    price: '$397',
    period: 'mo',
    features: [
      'Unlimited Internet',
      'Business Address',
      'Mail & Parcel Handling',
      'Telephone Answering',
      'Message Forwarding',
      'Boardroom Access (3 hrs/mo)',
    ],
    highlight: false,
  },
  {
    name: 'Dedicated Desk',
    price: '$547',
    period: 'mo',
    features: [
      'Everything in Hot Desk',
      'Dedicated Reserved Spot',
      'Boardroom Access (5 hrs/mo)',
    ],
    highlight: true,
  },
  {
    name: 'Private Office Room',
    price: '$987',
    period: 'mo',
    features: [
      'Everything in Dedicated Desk',
      'Private Locked Office',
      'Boardroom Access (7 hrs/mo)',
      '24/7/365 Access',
    ],
    highlight: false,
  },
  {
    name: 'Virtual Office',
    price: '$247',
    period: 'mo',
    features: [
      'Business Address',
      'Mail & Parcel Handling',
      'Telephone Answering',
      'Message Forwarding',
      'Hot Desk or Boardroom Access (2 hrs/mo)',
    ],
    highlight: false,
  },
];

export const HOURLY_SERVICES = [
  { name: 'Day Pass (8 hours)', price: '$27' },
  { name: 'Mailing Address', price: '$47/mo' },
  { name: 'Training Room', price: '$180/hr' },
  { name: 'General Meeting Space', price: '$175/hr' },
  { name: 'Private Meeting Room', price: '$25.5/hr' },
  { name: 'Conference Room + General Meeting Space', price: '$1400/day' },
];

export const TESTIMONIALS = [
  {
    quote: "Netwyn Place has completely transformed how our team works. The focus and community here are unmatched in Scarborough.",
    name: "Sarah Jenkins",
    company: "Founder, TechFlow Systems",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "The boardroom facilities are top-notch. We host all our monthly partner meetings here and our clients are always impressed.",
    name: "David Chen",
    company: "Partner, NorthPoint Legal",
    image: "https://picsum.photos/seed/david/100/100"
  },
  {
    quote: "As a solopreneur, finding a space that feels professional yet welcoming was key. Netwyn is exactly that.",
    name: "Elena Rodriguez",
    company: "Creative Director, Studio E",
    image: "https://picsum.photos/seed/elena/100/100"
  }
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'Twitter' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
];

export const CONTACT_INFO = {
  address: '10 Thornmount Drive, Scarborough, ON M1B 3J4',
  email: 'hello@netwyn.place',
  phone: '416-906-1414',
  directions: [
    'Take the Morningside Rd North exit.',
    'Turn right onto Casebridge Ct.',
    'Turn right onto Venture Dr, the building will be on your left hand side.',
  ],
};
