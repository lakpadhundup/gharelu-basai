export interface Listing {
  id: string;
  title: string;
  location: string;
  district: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  beds: number;
  baths: number;
  guests: number;
  amenities: string[];
  description: string;
  host: {
    name: string;
    avatar: string;
    superhost: boolean;
    joined: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  featured?: boolean;
  type: 'house' | 'apartment' | 'cottage' | 'villa';
}

export const listings: Listing[] = [
  {
    id: '1',
    title: 'Traditional Newari House in Bhaktapur',
    location: 'Bhaktapur Durbar Square',
    district: 'Bhaktapur',
    price: 4500,
    rating: 4.92,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800',
    images: [
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    ],
    beds: 3,
    baths: 2,
    guests: 6,
    amenities: ['WiFi', 'Kitchen', 'Mountain View', 'Traditional Decor', 'Garden'],
    description: 'Experience authentic Newari culture in this beautifully restored traditional home. Located steps away from the famous Bhaktapur Durbar Square, this heritage property offers a unique glimpse into Nepal\'s rich architectural history.',
    host: {
      name: 'Rajesh Shrestha',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      superhost: true,
      joined: '2019',
    },
    coordinates: { lat: 27.6722, lng: 85.4279 },
    featured: true,
    type: 'house',
  },
  {
    id: '2',
    title: 'Himalayan View Cottage in Nagarkot',
    location: 'Nagarkot Hill Station',
    district: 'Bhaktapur',
    price: 6000,
    rating: 4.89,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    ],
    beds: 2,
    baths: 1,
    guests: 4,
    amenities: ['WiFi', 'Fireplace', 'Sunrise View', 'Breakfast Included', 'Hiking Trails'],
    description: 'Wake up to breathtaking views of the Himalayan range including Mt. Everest on clear days. This cozy cottage is perfect for couples and small families seeking peace and natural beauty.',
    host: {
      name: 'Sunita Tamang',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      superhost: true,
      joined: '2020',
    },
    coordinates: { lat: 27.7172, lng: 85.5200 },
    featured: true,
    type: 'cottage',
  },
  {
    id: '3',
    title: 'Lakeside Villa in Pokhara',
    location: 'Lakeside, Pokhara',
    district: 'Kaski',
    price: 8500,
    rating: 4.95,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    ],
    beds: 4,
    baths: 3,
    guests: 8,
    amenities: ['Pool', 'Lake View', 'WiFi', 'BBQ', 'Kayak', 'Mountain View'],
    description: 'Luxurious villa overlooking the serene Phewa Lake with stunning views of the Annapurna range. Features a private pool, lush gardens, and direct lake access.',
    host: {
      name: 'Bikram Gurung',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
      superhost: true,
      joined: '2018',
    },
    coordinates: { lat: 28.2096, lng: 83.9856 },
    featured: true,
    type: 'villa',
  },
  {
    id: '4',
    title: 'Cozy Apartment in Thamel',
    location: 'Thamel, Kathmandu',
    district: 'Kathmandu',
    price: 3000,
    rating: 4.78,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    ],
    beds: 1,
    baths: 1,
    guests: 2,
    amenities: ['WiFi', 'AC', 'Kitchen', 'Central Location', 'Rooftop Access'],
    description: 'Modern apartment in the heart of Thamel, walking distance to restaurants, shops, and cultural sites. Perfect for solo travelers and couples exploring Kathmandu.',
    host: {
      name: 'Anita Maharjan',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      superhost: false,
      joined: '2021',
    },
    coordinates: { lat: 27.7152, lng: 85.3123 },
    type: 'apartment',
  },
  {
    id: '5',
    title: 'Mountain Retreat in Bandipur',
    location: 'Bandipur Village',
    district: 'Tanahu',
    price: 5500,
    rating: 4.88,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800',
    images: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800',
    ],
    beds: 3,
    baths: 2,
    guests: 5,
    amenities: ['WiFi', 'Garden', 'Organic Food', 'Village Tours', 'Meditation Space'],
    description: 'Escape to this peaceful retreat in the historic hilltop village of Bandipur. Experience traditional Nepali hospitality with modern comforts.',
    host: {
      name: 'Hari Prasad',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
      superhost: true,
      joined: '2017',
    },
    coordinates: { lat: 27.9342, lng: 84.4167 },
    featured: true,
    type: 'house',
  },
  {
    id: '6',
    title: 'Riverside Cottage in Chitwan',
    location: 'Sauraha, Chitwan',
    district: 'Chitwan',
    price: 4000,
    rating: 4.82,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    ],
    beds: 2,
    baths: 1,
    guests: 4,
    amenities: ['River View', 'Safari Tours', 'WiFi', 'Breakfast', 'Nature Walks'],
    description: 'Rustic cottage on the edge of Chitwan National Park. Perfect base for jungle safaris, elephant encounters, and bird watching.',
    host: {
      name: 'Maya Tharu',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
      superhost: false,
      joined: '2020',
    },
    coordinates: { lat: 27.5833, lng: 84.5000 },
    type: 'cottage',
  },
];

export const districts = [
  'All Districts',
  'Kathmandu',
  'Bhaktapur',
  'Lalitpur',
  'Kaski',
  'Chitwan',
  'Tanahu',
];

export const propertyTypes = ['All Types', 'House', 'Apartment', 'Cottage', 'Villa'];
