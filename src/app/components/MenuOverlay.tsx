import React from "react";
import NavLink from "./NavLink";


interface Link {
  title: string;
  path: string;
}


interface MenuOverlayProps {
  links: Link[]; 
  closeMenu: () => void; 
}

const MenuOverlay = ({ links, closeMenu }: MenuOverlayProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-lg shadow-lg w-2/3 max-w-md">
    
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 size-[20px] text-white text-5xl"
        >
          &times;
        </button>
        <ul className="flex flex-col py-4 items-center">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                href={link.path}
                title={link.title}
                onClick={closeMenu} 
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuOverlay;
