import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Home, Calendar, Settings, 
  BarChart3, Mountain, Bell, Search, ChevronRight, Menu, X,
  TrendingUp, TrendingDown, DollarSign, Eye, UserPlus,
  MoreVertical, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { listings } from '@/data/listings';
import { cn } from '@/lib/utils';

const stats = [
  { label: 'Revenue', value: 'रू1.25M', change: '+18%', trend: 'up', icon: DollarSign },
  { label: 'Bookings', value: '342', change: '+12%', trend: 'up', icon: Calendar },
  { label: 'Listings', value: '156', change: '+8%', trend: 'up', icon: Home },
  { label: 'Users', value: '1,892', change: '+24%', trend: 'up', icon: Users },
];

const recentUsers = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', type: 'Guest', joined: '2h ago', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
  { id: 2, name: 'Bikram Gurung', email: 'bikram@example.com', type: 'Host', joined: '5h ago', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
  { id: 3, name: 'Emma Williams', email: 'emma@example.com', type: 'Guest', joined: '1d ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
];

const pendingListings = [
  { id: 1, title: 'Mountain View Lodge', host: 'Ram Thapa', location: 'Nagarkot', submitted: '2h ago' },
  { id: 2, title: 'Heritage Apartment', host: 'Sita Maharjan', location: 'Patan', submitted: '5h ago' },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'listings', label: 'Listings', icon: Home },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
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
              <span className="font-display text-lg md:text-xl font-semibold">
                Admin <span className="text-primary">Panel</span>
              </span>
            </Link>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            {/* Notifications */}
            <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </button>
            
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-medium text-sm">AD</span>
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
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 min-w-0">
          {activeTab === 'dashboard' && (
            <div className="space-y-6 md:space-y-8 animate-fade-in">
              {/* Header */}
              <div>
                <h1 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1 md:mb-2">
                  Dashboard Overview
                </h1>
                <p className="text-muted-foreground text-sm md:text-base">
                  Platform activity at a glance.
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
                      <span className={cn(
                        "flex items-center gap-0.5 text-xs font-medium",
                        stat.trend === 'up' ? 'text-primary' : 'text-destructive'
                      )}>
                        {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
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

              <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
                {/* Pending Approvals */}
                <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden">
                  <div className="p-4 md:p-6 border-b border-border">
                    <div className="flex items-center justify-between">
                      <h2 className="font-display text-base md:text-lg font-semibold text-foreground">
                        Pending Approvals
                      </h2>
                      <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                        {pendingListings.length}
                      </span>
                    </div>
                  </div>
                  <div className="divide-y divide-border">
                    {pendingListings.map((listing) => (
                      <div key={listing.id} className="p-3 md:p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <h4 className="font-medium text-foreground text-sm">{listing.title}</h4>
                            <p className="text-muted-foreground text-xs">
                              {listing.host} · {listing.location}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="default" size="sm" className="gap-1 text-xs flex-1 sm:flex-none">
                              <Check className="w-3.5 h-3.5" />
                              Approve
                            </Button>
                            <Button variant="outline" size="sm" className="gap-1 text-xs flex-1 sm:flex-none">
                              Reject
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Users */}
                <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden">
                  <div className="p-4 md:p-6 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-3">
                      <UserPlus className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      <h2 className="font-display text-base md:text-lg font-semibold text-foreground">
                        Recent Users
                      </h2>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1 text-xs">
                      View all
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="divide-y divide-border">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="p-3 md:p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-3">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                          />
                          <div className="min-w-0">
                            <h4 className="font-medium text-foreground text-sm truncate">{user.name}</h4>
                            <p className="text-muted-foreground text-xs truncate hidden sm:block">{user.email}</p>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className={cn(
                            "px-2 py-0.5 text-xs font-medium rounded-full",
                            user.type === 'Host' 
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                          )}>
                            {user.type}
                          </span>
                          <p className="text-muted-foreground text-xs mt-1">{user.joined}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* All Listings Table */}
              <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden">
                <div className="p-4 md:p-6 border-b border-border flex items-center justify-between">
                  <h2 className="font-display text-base md:text-lg font-semibold text-foreground">
                    All Listings
                  </h2>
                  <Button variant="ghost" size="sm" className="gap-1 text-xs">
                    View all
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left px-4 md:px-6 py-3 text-xs font-medium text-muted-foreground uppercase">
                          Property
                        </th>
                        <th className="text-left px-4 md:px-6 py-3 text-xs font-medium text-muted-foreground uppercase">
                          Host
                        </th>
                        <th className="text-left px-4 md:px-6 py-3 text-xs font-medium text-muted-foreground uppercase">
                          Price
                        </th>
                        <th className="text-left px-4 md:px-6 py-3 text-xs font-medium text-muted-foreground uppercase">
                          Rating
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {listings.slice(0, 4).map((listing) => (
                        <tr key={listing.id} className="hover:bg-muted/30">
                          <td className="px-4 md:px-6 py-3 md:py-4">
                            <div className="flex items-center gap-2 md:gap-3">
                              <img
                                src={listing.image}
                                alt={listing.title}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover"
                              />
                              <span className="font-medium text-foreground text-sm truncate max-w-[150px] md:max-w-none">
                                {listing.title}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 text-muted-foreground text-sm">
                            {listing.host.name}
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 font-medium text-foreground text-sm">
                            रू{listing.price.toLocaleString()}
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4">
                            <div className="flex items-center gap-1">
                              <span className="text-secondary">★</span>
                              <span className="text-foreground text-sm">{listing.rating}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'dashboard' && (
            <div className="flex items-center justify-center h-64 md:h-96 animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  {sidebarItems.find(i => i.id === activeTab)?.icon && 
                    <span className="text-muted-foreground">
                      {(() => {
                        const Icon = sidebarItems.find(i => i.id === activeTab)?.icon;
                        return Icon ? <Icon className="w-8 h-8 md:w-10 md:h-10" /> : null;
                      })()}
                    </span>
                  }
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

export default AdminDashboard;
