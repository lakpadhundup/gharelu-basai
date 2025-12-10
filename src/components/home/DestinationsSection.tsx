import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const destinations = [
  {
    name: 'Kathmandu Valley',
    description: 'Ancient temples & vibrant culture',
    image: 'https://images.unsplash.com/photo-1558799401-1dcba79f9ed3?w=800',
    listings: 45,
    district: 'Kathmandu',
  },
  {
    name: 'Pokhara',
    description: 'Lakes & mountain adventures',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
    listings: 38,
    district: 'Kaski',
  },
  {
    name: 'Bhaktapur',
    description: 'Living heritage & craftsmanship',
    image: 'https://images.unsplash.com/photo-1609766856923-7e0a0c06117d?w=800',
    listings: 22,
    district: 'Bhaktapur',
  },
  {
    name: 'Chitwan',
    description: 'Wildlife & jungle experiences',
    image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800',
    listings: 18,
    district: 'Chitwan',
  },
];

const DestinationsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider">Destinations</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Explore Nepal's Treasures
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-lg mx-auto px-4">
            From bustling Kathmandu to serene Pokhara, find your perfect escape.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {destinations.map((destination, index) => (
            <Link
              key={destination.name}
              to={`/listings?district=${destination.district}`}
              className="group relative h-48 md:h-80 rounded-xl md:rounded-2xl overflow-hidden animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="font-display text-base md:text-2xl font-bold text-background mb-0.5 md:mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-background/80 text-xs md:text-sm mb-2 md:mb-3 line-clamp-1">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-background/70 text-xs md:text-sm">
                      {destination.listings} listings
                    </span>
                    <span className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
