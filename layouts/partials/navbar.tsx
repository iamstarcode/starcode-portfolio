import { Logo } from '@/components/Logo';
import MenuDrawer from '@/components/MenuDrawer';

import { socials, linksJsx } from '@/components/MenuDrawer';
import MBurger from '@/components/MBurger';

const NavBar = () => {
  return (
    <>
      <MenuDrawer />
      <div className="shadow-sm backdrop-blur-sm ">
        <div
          id="#navbar"
          className="fixed z-40 mx-auto w-full max-w-6xl flex-none text-gray-700 lg:fixed "
          style={{
            position: 'sticky',
            top: 0,
            width: '100%',
            backgroundColor: 'transparent',
          }}
        >
          <nav className=" flex h-14 flex-col px-4 lg:flex-row lg:items-center lg:justify-between lg:px-4">
            <div className="flex w-full flex-row items-center justify-between">
              <Logo />
              <div className="block lg:hidden">
                <MBurger />
              </div>
            </div>

            <div className=":block hidden">
              <nav className="hidden lg:flex lg:flex-row lg:items-center lg:justify-end lg:space-x-2 lg:pb-0">
                <ul className="menu menu-horizontal space-x-2 bg-base-100 p-2">
                  {linksJsx}
                </ul>
                <ul className="inline-flex list-none space-x-3"> {socials}</ul>
              </nav>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

{
  /* <li key={index}>
<Link
  href={href}
  className={`${
    pathName === href
      ? 'bg-primary text-white'
      : 'text-primary '
  } p-4 py-2 hover:font-medium`}
>
  {text}
</Link>
</li> */
}

export default NavBar;
