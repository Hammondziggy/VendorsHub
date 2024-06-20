import { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut } from '@/app/auth/signout'; // Adjust the import path according to your file structure

const SideNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleToggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/login'); // Redirect to login page on success
    } catch (error) {
      console.error('Error during sign-out:', error);
      // Handle any errors that occur during sign-out
    }
  };

  return (
    <div className="relative inline-block">
      <button
        className="relative rounded-full overflow-hidden hover:bg-grey hover:bg-opacity-50 transition-colors duration-300 cursor-pointer focus:outline-none"
        onClick={handleToggleDropdown}
        onBlur={() => setShowDropdown(false)}
        aria-haspopup="true"
        aria-expanded={showDropdown}
      >
        <FaEllipsisV className="text-[2.3rem] text-white p-2 group-hover:text-yellow" />
      </button>
      {showDropdown && (
        <div
          className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 z-10"
          onMouseDown={(e) => e.preventDefault()}
          style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
        >
          <div className="py-1">
            <div
              onClick={handleSignOut}
              className="block w-full text-black text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Sign Out
            </div>
            <hr />
            <Link href="/help" passHref>
              <div className="block w-full text-black text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                Help
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNav;
