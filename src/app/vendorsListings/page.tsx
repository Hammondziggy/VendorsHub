import { FC } from 'react';
import Categories from '@/components/common/categories';
import VendorsHero from './hero';

const VendorsListings: FC = () => {
  return (
    <div className="center flex-col w-full">
      <VendorsHero />
      <Categories />
    </div>
  );
};

export default VendorsListings;
