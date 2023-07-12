import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import MenuButton from './MenuButton';
import Phone from '../shared/svg/Phone';

const links = [
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
    <header className="bg-white">
      <nav className="max-w-7xl mx-auto py-7 px-6 flex justify-between items-center">
        <Link to="/" className="hidden md:block">
          <p className="text-resq-dark-400 text-[2.125rem]/[1.5rem] font-volkhov">
            ResQ
          </p>
        </Link>
        <div className="block md:hidden">
          <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>

        <ul className="hidden md:flex gap-x-5 lg:gap-x-9">
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

        <div className="flex items-center gap-x-1 md:gap-x-3">
          <div className="bg-resq-brand-main w-[29px] h-[27px] md:w-[59px] md:h-[52px] flex justify-center items-center rounded-md md:rounded-[10px]">
            <Phone className="w-5 h-5  md:w-[27px] md:h-[35px]" />
          </div>
          <div className="">
            <p className="text-[0.625rem] md:text-base">Emergency Call</p>
            <p className="text-resq-dark-400 font-bold text-xs md:text-[1.375rem]/[1.5rem]">
              777 657 0000
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
