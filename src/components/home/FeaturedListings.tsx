import { Link } from 'react-router-dom';
import { Star, Heart, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { listings } from '@/data/listings';
import { cn } from '@/lib/utils';

const FeaturedListings = () => {
  const featuredListings = listings.filter(l => l.featured);

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 md:mb-12">
          <div>
            <span className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider">Curated for you</span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">
              Featured Stays
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-md">
              Hand-picked properties offering exceptional experiences.
            </p>
          </div>
          <Link to="/listings">
            <Button variant="outline" className="gap-2 group">
              View all
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Listings Grid - Horizontal scroll on mobile */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
          {featuredListings.map((listing, index) => (
            <Link
              key={listing.id}
              to={`/listing/${listing.id}`}
              className={cn(
                "group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 shrink-0 w-[280px] md:w-auto snap-start",
                "animate-fade-up opacity-0",
                index === 0 && "md:col-span-2 md:row-span-2"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className={cn(
                "relative overflow-hidden",
                index === 0 ? "h-48 md:h-full" : "h-40 md:h-48"
              )}>
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                
                {/* Favorite Button */}
                <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-background hover:scale-110">
                  <Heart className="w-4 h-4 text-foreground" />
                </button>

                {/* Superhost Badge */}
                {listing.host.superhost && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Superhost
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-3 md:p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className={cn(
                      "font-semibold text-foreground truncate group-hover:text-primary transition-colors",
                      index === 0 ? "text-base md:text-xl" : "text-sm md:text-base"
                    )}>
                      {listing.title}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs md:text-sm mt-1">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate">{listing.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
                    <span className="font-medium text-xs md:text-sm">{listing.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <span className="text-xs md:text-sm text-muted-foreground">
                    {listing.beds} beds · {listing.baths} baths
                  </span>
                  <p className="text-foreground">
                    <span className="font-bold text-sm md:text-base">रू{listing.price.toLocaleString()}</span>
                    <span className="text-muted-foreground text-xs"> / night</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
