import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BecomeHost = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative mountain silhouette */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M0,300 L100,250 L200,280 L350,180 L500,220 L650,120 L800,200 L950,100 L1100,180 L1250,140 L1350,200 L1440,150 L1440,400 L0,400 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <span className="inline-block px-4 py-2 bg-background/20 rounded-full text-sm font-medium mb-6">
              Earn with your property
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Share Your Home,{' '}
              <span className="text-secondary">Earn Extra Income</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg">
              Join hundreds of Nepali homeowners who are earning by sharing their unique spaces with travelers from around the world.
            </p>

            {/* Benefits */}
            <div className="grid gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Earn Competitive Income</h4>
                  <p className="text-primary-foreground/70 text-sm">Set your own prices and earn on your terms</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Flexible Availability</h4>
                  <p className="text-primary-foreground/70 text-sm">You decide when and how often to host</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Meet Global Travelers</h4>
                  <p className="text-primary-foreground/70 text-sm">Share your culture with guests from everywhere</p>
                </div>
              </div>
            </div>

            <Link to="/vendor">
              <Button variant="heroOutline" size="xl" className="gap-2 group bg-background text-primary hover:bg-background/90">
                Start Hosting Today
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Image/Stats Card */}
          <div className="relative">
            <div className="bg-background/10 backdrop-blur-md rounded-3xl p-8 border border-background/20">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
                alt="Traditional Nepali home"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display text-3xl font-bold text-background">रू50K+</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">Avg. monthly earnings</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-background">200+</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">Active hosts</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-background">4.8★</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">Host satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeHost;
