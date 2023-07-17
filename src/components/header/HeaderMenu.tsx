import { NavLink } from 'react-router-dom';
import { links } from './Header';

type HeaderMenuProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderMenu = ({ openMenu, setOpenMenu }: HeaderMenuProps) => {
  return (
    <ul
      className={`fixed inset-0 z-[5] bg-resq-light-200 pt-36 space-y-4 md:hidden ${
        openMenu ? 'translate-x-0' : 'translate-x-full'
      } duration-300 transition-transform`}
    >
      {' '}
      {links.map((link) => {
        return (
          <li
            key={`menu-${link.name}`}
            className="capitalize text-2xl text-center"
            onClick={() => setOpenMenu(false)}
          >
            <NavLink
              to={link.path}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'text-resq-dark-300'
                  : isActive
                  ? 'text-resq-dark-100'
                  : 'text-resq-brand-main transition-colors duration-300 hover:text-resq-brand-dark'
              }
            >
              {link.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderMenu;
