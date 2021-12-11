import { createContext } from 'react';
import { AppContextValue } from 'types';
import { Theme } from './theme';

const defaultState: AppContextValue = {
  theme: Theme.Dark,
};

export const AppContext = createContext(defaultState);
