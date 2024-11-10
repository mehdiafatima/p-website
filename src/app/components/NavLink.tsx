import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void; 
}

const NavLink = ({ href, title }: NavLinkProps) => {
  const isHashLink = href.startsWith("#");

  return isHashLink ? (
    <a href={href} className="block py-2 pl-3 pr-4 text-purple-300 sm:text-xl rounded md:p-0 hover:text-white">
      {title}
    </a>
  ) : (
    <Link href={href} className="block py-2 pl-3 pr-4 text-purple-300 sm:text-xl rounded md:p-0 hover:text-white">
      {title}
    </Link>
  );
};

export default NavLink;
