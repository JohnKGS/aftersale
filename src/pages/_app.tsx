import React from 'react';
import { AppProps } from 'next/app';

import '../styles/tailwind.css';
import '../styles/globals.css';

import reducer from '../contexts/windows/reducer';
import { initialState } from '../utils';
import { WindowLightProvider } from '../contexts/windows';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <WindowLightProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
    </WindowLightProvider>
  );
};

export default MyApp;
