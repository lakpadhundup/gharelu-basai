import { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { districts, propertyTypes } from '@/data/listings';
import { cn } from '@/lib/utils';

interface ListingFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedDistrict: string;
  setSelectedDistrict: (district: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const ListingFilters = ({
  searchQuery,
  setSearchQuery,
  selectedDistrict,
  setSelectedDistrict,
  selectedType,
  setSelectedType,
  priceRange,
  setPriceRange,
}: ListingFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters = 
    searchQuery || 
    selectedDistrict !== 'All Districts' || 
    selectedType !== 'All Types' ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 15000;

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDistrict('All Districts');
    setSelectedType('All Types');
    setPriceRange([0, 15000]);
  };

  return (
    <div className="bg-card rounded-2xl shadow-soft p-4 md:p-6 mb-8">
      {/* Search & Toggle */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by location, property name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-muted/50 rounded-xl border-none outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all"
          />
        </div>

        {/* Filter Toggle */}
        <Button
          variant={showFilters ? 'default' : 'outline'}
          className="gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <span className="w-2 h-2 bg-secondary rounded-full" />
          )}
        </Button>

        {hasActiveFilters && (
          <Button variant="ghost" onClick={clearFilters} className="gap-2">
            <X className="w-4 h-4" />
            Clear
          </Button>
        )}
      </div>

      {/* Expanded Filters */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-border animate-fade-in">
          {/* District Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">District</label>
            <div className="flex flex-wrap gap-2">
              {districts.map((district) => (
                <button
                  key={district}
                  onClick={() => setSelectedDistrict(district)}
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-full transition-all",
                    selectedDistrict === district
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {district}
                </button>
              ))}
            </div>
          </div>

          {/* Property Type Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Property Type</label>
            <div className="flex flex-wrap gap-2">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-full transition-all",
                    selectedType === type
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Price Range: रू{priceRange[0].toLocaleString()} - रू{priceRange[1].toLocaleString()}
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="15000"
                step="500"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="flex-1 accent-primary"
              />
              <input
                type="range"
                min="0"
                max="15000"
                step="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="flex-1 accent-primary"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingFilters;
