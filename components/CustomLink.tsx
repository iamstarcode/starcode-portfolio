'use client';
import { useToggle } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useViewportSize } from '@mantine/hooks';

import { useAtom } from 'jotai';
import { burgerOpenedAtom } from '@/stores';

const CustomLink = ({ href, text }: { href: string; text: string }) => {
  const pathName = usePathname();
  //const [burger, toggle] = useToggle([false, true]);
  const { width } = useViewportSize();

  const [burgerOpened, setBurgerOpened] = useAtom(burgerOpenedAtom);

  const handleClick = () => {
    if (width >= 1024) return; //if we are in a bigger screen avoid seeting the burger status
    setBurgerOpened(false);
  };

  return (
    <li>
      <Link
        onClick={handleClick}
        className={`${
          pathName === href ? 'bg-primary text-white' : 'text-primary '
        } p-4 py-2 hover:font-medium`}
        href={href}
      >
        {text}
      </Link>
    </li>
  );
};
export default CustomLink;
