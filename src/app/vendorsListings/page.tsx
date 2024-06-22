import { FC } from 'react';
import Categories from '@/components/common/categories';
import VendorsHero from './hero';
import Footer from '@/components/footer';

const VendorsListings: FC = () => {
  return (
    <div className="center flex-col w-full">
      <VendorsHero />
      <Categories />
      <Footer />
    </div>
  );
};

export default VendorsListings;
