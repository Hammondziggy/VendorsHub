import Profile from './profile';
import Navbar from '@/components/NavigationBar';
import { vendorsListings } from '@/utils/vendorslistings';
import ErrorVendorPage from "./error";

interface VendorsProfileProps {
  params: { userId: number }
}
  
const VendorsProfile: React.FC<VendorsProfileProps> = ({ params }) => {
  const userIdNumber = Number(params.userId);

  // Find the vendor in the vendorsListings array based on the userId
  const vendor = vendorsListings.find((vend) => vend.id === userIdNumber);
  
  if (!vendor) {
      // Handle case when vendor is not found
      return <ErrorVendorPage />;
  }

  return (
    <div>
        <Navbar />
        <Profile vendor ={vendor} />;
    </div>
  )
}

export default VendorsProfile;