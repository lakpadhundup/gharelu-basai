import { Shield, Home, Heart, Mountain } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Authentic Homes',
    description: 'Stay in genuine Nepali homes, from traditional Newari houses to mountain lodges.',
  },
  {
    icon: Shield,
    title: 'Verified Hosts',
    description: 'All our hosts are verified and committed to providing exceptional hospitality.',
  },
  {
    icon: Heart,
    title: 'Local Experiences',
    description: 'Connect with local culture, cuisine, and traditions through your stay.',
  },
  {
    icon: Mountain,
    title: 'Stunning Locations',
    description: 'From Himalayan peaks to jungle retreats, discover Nepal\'s diverse landscapes.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Gharelu Basai</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            More Than Just a Stay
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            We connect travelers with authentic Nepali homes and experiences that you won't find anywhere else.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
