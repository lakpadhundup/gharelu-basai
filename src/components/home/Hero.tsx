import { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    navigate(`/listings${location ? `?search=${location}` : ''}`);
  };

  return (
    <section className="relative min-h-[100svh] md:min-h-[90vh] flex items-center overflow-hidden pt-8 pb-16 md:py-0">
      {/* Background with mountain gradient */}
      <div className="absolute inset-0 mountain-bg" />
      
      {/* Mountain silhouette decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 overflow-hidden">
        <svg 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="hsl(var(--background))" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full text-primary text-xs md:text-sm font-medium mb-6 md:mb-8 animate-fade-up opacity-0 stagger-1">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse" />
            Discover Nepal's hidden gems
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-mountain-dark leading-tight mb-4 md:mb-6 animate-fade-up opacity-0 stagger-2 px-2">
            Find Your Perfect{' '}
            <span className="text-primary relative inline-block">
              Himalayan
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" stroke="hsl(var(--secondary))" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            {' '}Home
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 animate-fade-up opacity-0 stagger-3 px-4">
            Experience authentic Nepali hospitality. From traditional Newari homes to lakeside villas.
          </p>

          {/* Search Bar */}
          <div className="bg-card rounded-2xl shadow-strong p-3 md:p-4 animate-fade-up opacity-0 stagger-4 mx-2 md:mx-0">
            <div className="flex flex-col gap-3">
              {/* Location - Full width on mobile */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Date and Guest row */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                {/* Check In */}
                <div className="flex items-center gap-2 px-3 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground text-xs md:text-sm truncate">Check in</span>
                </div>

                {/* Check Out */}
                <div className="flex items-center gap-2 px-3 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground text-xs md:text-sm truncate">Check out</span>
                </div>

                {/* Guests */}
                <div className="flex items-center gap-2 px-3 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground text-xs md:text-sm">Guests</span>
                </div>
              </div>

              {/* Search Button */}
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full gap-2"
                onClick={handleSearch}
              >
                <Search className="w-5 h-5" />
                Search Stays
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-6 md:gap-16 mt-8 md:mt-12 animate-fade-up opacity-0 stagger-5">
            <div className="text-center">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary">500+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Unique Homes</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary">50+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Districts</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary">10K+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Happy Guests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
