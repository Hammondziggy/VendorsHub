"use client";

import { FC } from "react";
import { vendorsListings } from "@/utils/vendorslistings";
import Image from "next/image";
import ErrorVendorPage from "./error";

interface VendorsProfileProps {
  params: { userId: string }
}

const VendorsProfile: FC<VendorsProfileProps> = ({ params }) => {
  // Find the vendor in the vendorsListings array based on the userId
  const vendor = vendorsListings.find((vendor) =>
    vendor.name.replace(/\s/g, "-") === params.userId
  );

  if (!vendor) {
    // Handle case when vendor is not found
    return <ErrorVendorPage />;
  }

  return (
    <div>
      <h1>{vendor.name}</h1>
      <Image width={300} height={400} src={vendor.image} alt="Vendor" />
      {/* <p>{vendor.address}</p> */}
      <p>{vendor.description}</p>
      {/* <p>{vendor.price}</p>
      <p>{vendor.reviews}</p> */}
      <p>{vendor.rating}</p>
    </div>
  );
};

export default VendorsProfile;
