import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import FeaturedListings from '@/components/home/FeaturedListings';
import DestinationsSection from '@/components/home/DestinationsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import BecomeHost from '@/components/home/BecomeHost';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <FeaturedListings />
      <DestinationsSection />
      <WhyChooseUs />
      <BecomeHost />
      <Testimonials />
    </MainLayout>
  );
};

export default Index;
