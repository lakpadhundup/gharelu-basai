import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Plus, Settings, BarChart3, Calendar, MessageSquare, 
  Star, Eye, Edit, Trash2, Mountain, ChevronRight, Menu, X,
  DollarSign, TrendingUp, Users, ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { listings } from '@/data/listings';
import { cn } from '@/lib/utils';

const vendorListings = listings.slice(0, 3);

const stats = [
  { label: 'Total Earnings', value: 'रू125K', change: '+12%', icon: DollarSign },
  { label: 'Bookings', value: '24', change: '+8%', icon: Calendar },
  { label: 'Views', value: '1.2K', change: '+23%', icon: Eye },
  { label: 'Rating', value: '4.89', change: '+0.2', icon: Star },
];

const recentBookings = [
  { id: 1, guest: 'John Smith', property: 'Traditional Newari House', dates: 'Dec 15-20', amount: 22500, status: 'confirmed' },
  { id: 2, guest: 'Emily Chen', property: 'Himalayan View Cottage', dates: 'Dec 22-25', amount: 18000, status: 'pending' },
  { id: 3, guest: 'Michael Brown', property: 'Traditional Newari House', dates: 'Jan 2-7', amount: 22500, status: 'confirmed' },
];

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'listings', label: 'My Listings', icon: Home },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 md:px-6 h-14 md:h-16">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 -ml-2"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/" className="flex items-center gap-2">
              <Mountain className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <span className="font-display text-lg md:text-xl font-semibold hidden sm:block">
                Gharelu <span className="text-primary">Basai</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="hero" size="sm" className="gap-1.5 text-xs md:text-sm">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Property</span>
              <span className="sm:hidden">Add</span>
            </Button>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-medium text-sm">RS</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={cn(
          "fixed lg:relative w-64 bg-card border-r border-border min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] p-4 z-40 transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-8 p-4 bg-primary/10 rounded-xl hidden lg:block">
            <h4 className="font-semibold text-foreground mb-2 text-sm">Need Help?</h4>
            <p className="text-muted-foreground text-xs mb-3">
              Check our host resources.
            </p>
            <Button variant="outline" size="sm" className="w-full text-xs">
              Get Support
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 min-w-0">
          {activeTab === 'overview' && (
            <div className="space-y-6 md:space-y-8 animate-fade-in">
              {/* Welcome */}
              <div>
                <h1 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1 md:mb-2">
                  Welcome back, Rajesh!
                </h1>
                <p className="text-muted-foreground text-sm md:text-base">
                  Here's what's happening with your properties.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-card rounded-xl p-4 md:p-6 shadow-soft border border-border animate-fade-up opacity-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <span className="flex items-center gap-0.5 text-xs font-medium text-primary">
                        <TrendingUp className="w-3 h-3" />
                        {stat.change}
                      </span>
                    </div>
                    <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-0.5">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent Bookings */}
              <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden">
                <div className="p-4 md:p-6 border-b border-border flex items-center justify-between">
                  <h2 className="font-display text-base md:text-lg font-semibold text-foreground">
                    Recent Bookings
                  </h2>
                  <Button variant="ghost" size="sm" className="gap-1 text-xs">
                    View all
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px]">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left px-4 md:px-6 py-3 text-xs font-medium text-muted-foreground uppercase">
                          Guest
                        </th>
                        <th className="text-left px-4 md:px-6 py-3 text-xs font-medium text-muted-foreground uppercase hidden md:table-cell">
                          Property
                        </th>
                        <th className="text-left px-4 md:px-6 py-3 text-xs font-medium text-muted-foreground uppercase">
                          Amount
                        </th>
                        <th className="text-left px-4 md:px-6 py-3 text-xs font-medium text-muted-foreground uppercase">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-muted/30">
                          <td className="px-4 md:px-6 py-3 md:py-4">
                            <div>
                              <p className="text-foreground text-sm">{booking.guest}</p>
                              <p className="text-muted-foreground text-xs">{booking.dates}</p>
                            </div>
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 text-muted-foreground text-sm hidden md:table-cell">
                            {booking.property}
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 font-medium text-foreground text-sm">
                            रू{booking.amount.toLocaleString()}
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4">
                            <span className={cn(
                              "px-2 py-0.5 text-xs font-medium rounded-full",
                              booking.status === 'confirmed' 
                                ? "bg-primary/10 text-primary"
                                : "bg-secondary/10 text-secondary"
                            )}>
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'listings' && (
            <div className="space-y-4 md:space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h1 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                    My Listings
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Manage your properties.
                  </p>
                </div>
                <Button variant="hero" className="gap-2 w-full sm:w-auto">
                  <Plus className="w-4 h-4" />
                  Add Property
                </Button>
              </div>

              <div className="grid gap-4">
                {vendorListings.map((listing) => (
                  <div
                    key={listing.id}
                    className="bg-card rounded-xl shadow-soft border border-border p-3 md:p-4"
                  >
                    <div className="flex gap-3 md:gap-4">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-20 h-20 md:w-32 md:h-24 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm md:text-base mb-1 truncate">
                          {listing.title}
                        </h3>
                        <p className="text-muted-foreground text-xs md:text-sm mb-2">{listing.location}</p>
                        <div className="flex items-center gap-3 text-xs md:text-sm">
                          <span className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
                            {listing.rating}
                          </span>
                          <span className="font-medium text-foreground">
                            रू{listing.price.toLocaleString()}/night
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                      <Button variant="outline" size="sm" className="flex-1 gap-1.5 text-xs">
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1 gap-1.5 text-xs text-destructive">
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeTab === 'bookings' || activeTab === 'messages' || activeTab === 'settings') && (
            <div className="flex items-center justify-center h-64 md:h-96 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  {activeTab === 'bookings' && <Calendar className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground" />}
                  {activeTab === 'messages' && <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground" />}
                  {activeTab === 'settings' && <Settings className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground" />}
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 capitalize">
                  {activeTab}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Coming soon.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;
