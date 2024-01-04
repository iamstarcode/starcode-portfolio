'use client';
import { Switch } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

export default function ThemeSwitcher() {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  const { theme, setTheme } = useTheme();

  const init = theme === 'dark' ? true : false;

  const [checked, setChecked] = useState(init);

  const toggleSwitch = (checked: boolean) => {
    checked === true ? setTheme('dark') : setTheme('light');
    setChecked(checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={event => toggleSwitch(event.currentTarget.checked)}
      size="lg"
      color={theme === 'dark' ? 'gray' : 'gray'}
      onLabel={<RiSunFill size="1rem" className="text-yellow-500" />}
      offLabel={<RiMoonClearFill size="1rem" className="text-primary" />}
    />
  );
}
