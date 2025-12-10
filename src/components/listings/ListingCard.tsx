import { Link } from 'react-router-dom';
import { Star, Heart, MapPin, Bed, Bath, Users } from 'lucide-react';
import { Listing } from '@/data/listings';
import { cn } from '@/lib/utils';

interface ListingCardProps {
  listing: Listing;
  className?: string;
}

const ListingCard = ({ listing, className }: ListingCardProps) => {
  return (
    <Link
      to={`/listing/${listing.id}`}
      className={cn(
        "group bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-44 md:h-56 overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Favorite Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-background hover:scale-110"
        >
          <Heart className="w-4 h-4 text-foreground" />
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {listing.host.superhost && (
            <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              Superhost
            </span>
          )}
          <span className="px-2 py-0.5 bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium rounded-full capitalize">
            {listing.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 md:p-5">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2 mb-1.5 md:mb-2">
          <h3 className="font-semibold text-foreground text-sm md:text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1">
            {listing.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
            <span className="font-medium text-xs md:text-sm">{listing.rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
          <MapPin className="w-3 h-3" />
          <span className="truncate">{listing.location}, {listing.district}</span>
        </div>

        {/* Amenities Preview */}
        <div className="flex items-center gap-3 md:gap-4 text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>{listing.guests}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="w-3.5 h-3.5" />
            <span>{listing.beds}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-3.5 h-3.5" />
            <span>{listing.baths}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-border">
          <div className="flex flex-wrap gap-1 hidden md:flex">
            {listing.amenities.slice(0, 2).map((amenity) => (
              <span key={amenity} className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded">
                {amenity}
              </span>
            ))}
          </div>
          <p className="text-foreground ml-auto">
            <span className="font-bold text-base md:text-lg">रू{listing.price.toLocaleString()}</span>
            <span className="text-muted-foreground text-xs md:text-sm"> / night</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
