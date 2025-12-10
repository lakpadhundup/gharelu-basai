import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import ListingCard from '@/components/listings/ListingCard';
import ListingFilters from '@/components/listings/ListingFilters';
import { listings } from '@/data/listings';
import { MapPin } from 'lucide-react';

const Listings = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialDistrict = searchParams.get('district') || 'All Districts';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedDistrict, setSelectedDistrict] = useState(initialDistrict);
  const [selectedType, setSelectedType] = useState('All Types');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const matchesSearch = 
        searchQuery === '' ||
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.district.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDistrict = 
        selectedDistrict === 'All Districts' || 
        listing.district === selectedDistrict;

      const matchesType = 
        selectedType === 'All Types' || 
        listing.type.toLowerCase() === selectedType.toLowerCase();

      const matchesPrice = 
        listing.price >= priceRange[0] && 
        listing.price <= priceRange[1];

      return matchesSearch && matchesDistrict && matchesType && matchesPrice;
    });
  }, [searchQuery, selectedDistrict, selectedType, priceRange]);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Explore Stays in Nepal
          </h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {filteredListings.length} properties available
          </p>
        </div>

        {/* Filters */}
        <ListingFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedDistrict={selectedDistrict}
          setSelectedDistrict={setSelectedDistrict}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        {/* Results */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing, index) => (
              <div
                key={listing.id}
                className="animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ListingCard listing={listing} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              No properties found
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Try adjusting your filters or search query to find available properties.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Listings;
