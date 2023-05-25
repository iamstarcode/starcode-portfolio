'use client';
import { Switch } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

export default function DarkModeSwitch() {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  const { theme, setTheme } = useTheme();

  const [open, toggle] = useToggle();

  const init = theme === 'dark' ? true : false;

  const [checked, setChecked] = useState(init);

  const toggleSwitch = (checked: boolean) => {
    checked == true ? setTheme('dark') : setTheme('light');
    setChecked(checked);
  };

  console.log(theme);
  return (
    <Switch
      checked={checked}
      onChange={event => toggleSwitch(event.currentTarget.checked)}
      size="lg"
      color={theme === 'dark' ? 'gray' : '#000'}
      onLabel={<RiSunFill size="1rem" className="text-yellow-500" />}
      offLabel={<RiMoonClearFill size="1rem" className="text-blue-600" />}
    />
  );
}
