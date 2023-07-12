type MenuButtonProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuButton = ({ openMenu, setOpenMenu }: MenuButtonProps) => {
  return (
    <button className="space-y-1" onClick={() => setOpenMenu((m) => !m)}>
      <span
        className={`h-[2px] w-8 bg-black block ${
          openMenu ? 'translate-y-[10px] -rotate-45' : 'translate-y-0 rotate-0'
        } duration-300 ease-in-out transition-all`}
      ></span>
      <span
        className={`h-[2px] w-5 bg-black block ${
          openMenu
            ? 'translate-y-[10px] opacity-0'
            : 'translate-y-0 opacity-100'
        } duration-300 ease-in-out transition-all`}
      ></span>
      <span
        className={`h-[2px] w-7 bg-black block ${
          openMenu ? 'rotate-45' : 'rotate-0'
        } duration-300 ease-in-out transition-all`}
      ></span>
    </button>
  );
};

export default MenuButton;

//  animate={openMenu ? { rotate: [360, 45] } : { rotate: -360 }}
//         transition={{
//           ease: [0.6, 0.01, -0.05, 0.95],
//           duration: 0.45,
//         }}

//  animate={
//           openMenu ? { y: 10, rotate: [-360, -45] } : { y: 0, rotate: 360 }
//         }
