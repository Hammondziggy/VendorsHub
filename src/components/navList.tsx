import Link from 'next/link';

const NavLinks = [
    { id: 1, name: 'Categories', path: '/vendorsListings' },
	{ id: 2, name: 'Gallery', path: '/galleryPage' },
	{ id: 3, name: 'Sign Up', path: '/auth/signup' },
]

export const NavList = () => {

    return(
        <nav className="hidden items-center w-80 md:flex justify-between">
            <ul className="flex justify-between items-center w-full gap-3 flex-shrink-0 text-white font-medium text-base md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.4rem]">
                {NavLinks.map(link => {
                   return (
                        <li className="cursor-pointer" key={link.id}>
                            <Link
                                href={link.path}
                                className={'hover:text-yellow'}
                            >
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
};