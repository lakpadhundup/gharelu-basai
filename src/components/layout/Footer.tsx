import { Link } from 'react-router-dom';
import { Mountain, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mountain className="w-8 h-8 text-primary" />
              <span className="font-display text-2xl font-semibold">
                Gharelu <span className="text-primary">Basai</span>
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Discover authentic Nepali homes and create unforgettable memories in the land of the Himalayas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/listings" className="text-background/70 hover:text-primary transition-colors text-sm">All Listings</Link></li>
              <li><Link to="/listings?district=Kathmandu" className="text-background/70 hover:text-primary transition-colors text-sm">Kathmandu Valley</Link></li>
              <li><Link to="/listings?district=Kaski" className="text-background/70 hover:text-primary transition-colors text-sm">Pokhara</Link></li>
              <li><Link to="/listings?district=Chitwan" className="text-background/70 hover:text-primary transition-colors text-sm">Chitwan</Link></li>
            </ul>
          </div>

          {/* Host */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Host</h4>
            <ul className="space-y-3">
              <li><Link to="/vendor" className="text-background/70 hover:text-primary transition-colors text-sm">List Your Home</Link></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Host Resources</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Community Forum</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Host Protection</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Safety Information</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Cancellation Policy</a></li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Mail className="w-4 h-4" />
                support@gharelubasai.com
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-background/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© 2024 Gharelu Basai. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
