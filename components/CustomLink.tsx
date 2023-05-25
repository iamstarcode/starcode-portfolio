'use client';
import { useToggle } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CustomLink = ({ href, text }: { href: string; text: string }) => {
  const pathName = usePathname();
  const [burger, toggle] = useToggle([false, true]);

  return (
    <li>
      <Link href={href} onClick={() => toggle()}>
        {text}
      </Link>
    </li>
  );
};
export default CustomLink;
