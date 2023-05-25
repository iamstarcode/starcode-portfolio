import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const darkModeAtom = atomWithStorage('darkMode', false);

export const burgerOpenedAtom = atom(false);
