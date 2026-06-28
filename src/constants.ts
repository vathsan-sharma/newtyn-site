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
    video: 'https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/IMG_8838.mov',
    image: 'https://picsum.photos/seed/netwyn-event/800/600',
    description: 'A versatile space for large gatherings and presentations.',
  },
  {
    name: 'Private Office',
    video: 'https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/IMG_8744.mov',
    image: 'https://picsum.photos/seed/netwyn-office/800/600',
    description: 'Quiet, professional environment for focused work.',
  },
  {
    name: 'Boardroom',
    video: 'https://raw.githubusercontent.com/vathsan-sharma/netwyn-images/main/IMG_8818.mov',
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
    quote: "I have attended six or seven business events at Netwyn Place in the past several months. I have always enjoyed the first rate hospitality of the staff and the quality of the events and presenters. Plus the food has always been very good. I look forward to attending more events in the very near future.",
    name: "Michael Ballard",
    company: "Business Attendee",
    image: "https://picsum.photos/seed/ballard/100/100"
  },
  {
    quote: "Awesome facility to conduct seminars, workshops, conferences, tv shows etc. The IT professionals are the best. They did an excellent job with my website... Monfriese Rum Cakes.",
    name: "Christine Monfriese",
    company: "Owner, Monfriese Rum Cakes",
    image: "https://picsum.photos/seed/christine/100/100"
  },
  {
    quote: "Great shared office space. Also a perfect space for a mid sized event. The management is super accommodating and professional.",
    name: "Shahzad Gidwani",
    company: "Event Organizer",
    image: "https://picsum.photos/seed/shahzad/100/100"
  },
  {
    quote: "This place is awesome for entrepreneurs. They have seminars and temporary office rentals. If you haven’t checked it out - you should !",
    name: "Tony Ning",
    company: "Entrepreneur",
    image: "https://picsum.photos/seed/tony/100/100"
  },
  {
    quote: "Great place to network. I got great business leads through networking events at Netwyn Center.",
    name: "Shahbaz Anjum",
    company: "Leads Networker",
    image: "https://picsum.photos/seed/shahbaz/100/100"
  },
  {
    quote: "Professional space, excellent board room and very kind and generous owner. Highly recommended .",
    name: "Linda Ross",
    company: "Consultant / Member",
    image: "https://picsum.photos/seed/linda/100/100"
  },
  {
    quote: "Fantastic co working place. Everyone needs to check this place out. Glad to be one of the original members here.",
    name: "Jorge Solorzano",
    company: "Original Member",
    image: "https://picsum.photos/seed/jorge/100/100"
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
