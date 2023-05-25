'use client';
import { burgerOpenedAtom } from '@/stores';
import { Burger } from '@mantine/core';
import { useAtom } from 'jotai';

function MBurger() {
  const [burgerOpened, setBurgerOpened] = useAtom(burgerOpenedAtom);
  return (
    <Burger
      opened={burgerOpened}
      onClick={() => setBurgerOpened(!burgerOpened)}
      aria-label="burger"
    />
  );
}

export default MBurger;
