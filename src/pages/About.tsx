import { Mountain, Heart, Users, Shield, MapPin } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Connecting Travelers with<br />
            <span className="text-primary">Authentic Nepal</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Gharelu Basai was born from a simple belief: the best way to experience Nepal 
            is through the warmth of its homes and the hospitality of its people.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're on a mission to transform how people experience Nepal. By connecting 
                travelers with local homeowners, we create meaningful cultural exchanges 
                that benefit both visitors and communities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every stay through Gharelu Basai isn't just accommodation—it's an invitation 
                into Nepali life, culture, and traditions. From traditional Newari homes in 
                ancient cities to mountain retreats with Himalayan views, each property 
                tells a story.
              </p>
              <div className="flex gap-4">
                <Link to="/listings">
                  <Button variant="hero">Explore Stays</Button>
                </Link>
                <Link to="/vendor">
                  <Button variant="outline">Become a Host</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600"
                alt="Nepal landscape"
                className="rounded-2xl shadow-strong"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-medium">
                <p className="font-display text-3xl font-bold">Since 2020</p>
                <p className="text-primary-foreground/80">Serving travelers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              These principles guide everything we do at Gharelu Basai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Authenticity', desc: 'Real homes, real people, real experiences' },
              { icon: Users, title: 'Community', desc: 'Supporting local economies and families' },
              { icon: Shield, title: 'Trust', desc: 'Verified hosts and secure bookings' },
              { icon: Mountain, title: 'Sustainability', desc: 'Responsible tourism practices' },
            ].map((value, index) => (
              <div 
                key={value.title}
                className="bg-card p-8 rounded-xl text-center shadow-soft animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Ready to Experience Nepal?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Start your journey today and discover the magic of authentic Nepali hospitality.
          </p>
          <Link to="/listings">
            <Button variant="hero" size="xl">
              Find Your Stay
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
