import { useParams, Link } from 'react-router-dom';
import { 
  Star, Heart, Share2, MapPin, Bed, Bath, Users, 
  Wifi, Coffee, Mountain, Car, Utensils, Flame,
  ChevronLeft, Calendar, Check
} from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { listings } from '@/data/listings';
import { cn } from '@/lib/utils';

const amenityIcons: Record<string, React.ElementType> = {
  WiFi: Wifi,
  Kitchen: Utensils,
  'Mountain View': Mountain,
  Fireplace: Flame,
  Parking: Car,
  Breakfast: Coffee,
};

const ListingDetail = () => {
  const { id } = useParams();
  const listing = listings.find((l) => l.id === id);

  if (!listing) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">
            Listing not found
          </h1>
          <Link to="/listings">
            <Button variant="default">Back to Listings</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Back Button */}
        <Link 
          to="/listings" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 md:mb-6 transition-colors text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to listings
        </Link>

        {/* Title Section */}
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-4 mb-4 md:mb-6">
          <div>
            <h1 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
              {listing.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-secondary text-secondary" />
                <span className="font-medium">{listing.rating}</span>
                <span className="text-muted-foreground">({listing.reviews} reviews)</span>
              </div>
              {listing.host.superhost && (
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  Superhost
                </span>
              )}
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                {listing.location}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1.5 text-xs md:text-sm">
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5 text-xs md:text-sm">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Save</span>
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 mb-6 md:mb-8 rounded-xl md:rounded-2xl overflow-hidden">
          <div className="md:col-span-2 md:row-span-2 h-56 md:h-full">
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
          </div>
          {listing.images.slice(1, 3).map((image, index) => (
            <div key={index} className="hidden md:block h-48">
              <img
                src={image}
                alt={`${listing.title} ${index + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Host Info */}
            <div className="flex items-center justify-between pb-6 md:pb-8 border-b border-border">
              <div>
                <h2 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                  Hosted by {listing.host.name}
                </h2>
                <div className="flex items-center gap-2 md:gap-4 text-muted-foreground text-xs md:text-sm flex-wrap">
                  <span>{listing.guests} guests</span>
                  <span>·</span>
                  <span>{listing.beds} bedrooms</span>
                  <span>·</span>
                  <span>{listing.baths} bathrooms</span>
                </div>
              </div>
              <div className="relative shrink-0">
                <img
                  src={listing.host.avatar}
                  alt={listing.host.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                />
                {listing.host.superhost && (
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </span>
                )}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex gap-3 md:gap-4 p-3 md:p-4 bg-muted/50 rounded-xl">
                <Mountain className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Stunning views</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Guests rave about the breathtaking scenery.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4 p-3 md:p-4 bg-muted/50 rounded-xl">
                <Check className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Self check-in</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Check yourself in with the lockbox.
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="pb-6 md:pb-8 border-b border-border">
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                About this place
              </h3>
              <p className="text-foreground text-sm md:text-base leading-relaxed">
                {listing.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="pb-6 md:pb-8 border-b border-border">
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                What this place offers
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {listing.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity] || Check;
                  return (
                    <div key={amenity} className="flex items-center gap-2 md:gap-3">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                      <span className="text-foreground text-sm md:text-base">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                Location
              </h3>
              <div className="h-48 md:h-64 bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">
                    {listing.location}, {listing.district}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card - Fixed on mobile */}
          <div className="lg:col-span-1">
            <div className="fixed bottom-0 left-0 right-0 lg:relative lg:sticky lg:top-24 bg-card rounded-t-2xl lg:rounded-2xl shadow-strong lg:shadow-medium p-4 md:p-6 border border-border z-40">
              {/* Price - visible on desktop */}
              <div className="hidden lg:flex items-baseline gap-2 mb-6">
                <span className="font-display text-2xl font-bold text-foreground">
                  रू{listing.price.toLocaleString()}
                </span>
                <span className="text-muted-foreground">/ night</span>
              </div>

              {/* Mobile compact view */}
              <div className="flex lg:hidden items-center justify-between gap-4">
                <div>
                  <p className="text-foreground">
                    <span className="font-bold text-lg">रू{listing.price.toLocaleString()}</span>
                    <span className="text-muted-foreground text-sm"> / night</span>
                  </p>
                  <p className="text-muted-foreground text-xs">Dec 15 - 20</p>
                </div>
                <Button variant="hero" className="px-8">
                  Reserve
                </Button>
              </div>

              {/* Desktop full view */}
              <div className="hidden lg:block">
                {/* Date Pickers */}
                <div className="border border-border rounded-xl overflow-hidden mb-4">
                  <div className="grid grid-cols-2 divide-x divide-border">
                    <div className="p-3">
                      <label className="block text-xs font-medium text-muted-foreground mb-1">
                        CHECK-IN
                      </label>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground text-sm">Add date</span>
                      </div>
                    </div>
                    <div className="p-3">
                      <label className="block text-xs font-medium text-muted-foreground mb-1">
                        CHECKOUT
                      </label>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground text-sm">Add date</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-border">
                    <label className="block text-xs font-medium text-muted-foreground mb-1">
                      GUESTS
                    </label>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground text-sm">1 guest</span>
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <Button variant="hero" className="w-full mb-4">
                  Reserve
                </Button>

                <p className="text-center text-muted-foreground text-sm mb-4">
                  You won't be charged yet
                </p>

                {/* Price Breakdown */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground underline">
                      रू{listing.price.toLocaleString()} x 5 nights
                    </span>
                    <span className="text-foreground">
                      रू{(listing.price * 5).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground underline">Service fee</span>
                    <span className="text-foreground">रू1,500</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-3 border-t border-border">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">
                      रू{(listing.price * 5 + 1500).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for fixed booking bar on mobile */}
        <div className="h-20 lg:hidden" />
      </div>
    </MainLayout>
  );
};

export default ListingDetail;
