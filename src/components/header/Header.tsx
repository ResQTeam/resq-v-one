import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Emergency from '../shared/Emergency';
import HeaderMenu from './HeaderMenu';
import MenuButton from './MenuButton';

export const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'contactUs',
    path: '/contact',
  },
  {
    name: 'blog',
    path: '/blog',
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="overflow-x-clip bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <Link to="/" className="hidden md:block">
          <p className="font-volkhov text-[2.125rem]/[1.5rem] text-resq-dark-400">
            ResQ
          </p>
        </Link>
        <div className="relative z-[6] block md:hidden">
          <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>

        <ul className="hidden gap-x-5 md:flex lg:gap-x-9">
          {links.map((link) => {
            return (
              <li key={link.name} className="capitalize">
                <NavLink
                  to={link.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'text-resq-dark-300'
                      : isActive
                      ? 'text-resq-brand-main'
                      : 'text-resq-dark-100 transition-colors duration-300 hover:text-resq-brand-dark'
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="relative z-[6]">
          <Emergency textColor="black" />
        </div>
      </nav>
      <HeaderMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};

export default Header;
