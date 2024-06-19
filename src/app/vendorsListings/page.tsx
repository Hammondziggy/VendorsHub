import { FC, Suspense } from 'react';
import Categories from '@/components/common/categories';
import Footer from '@/components/footer';
import VendorsHero from './hero';

const VendorsListings: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="center flex-col w-full">
        <VendorsHero />
        <Categories />
        <Footer />
      </div>
    </Suspense>
  );
};

export default VendorsListings;
