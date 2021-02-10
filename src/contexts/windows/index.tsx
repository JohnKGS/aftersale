import React, { createContext, useContext, useReducer } from 'react';
import { WindowLightContextConfig, WindowLightProviderConfig } from './types';

const WindowLightContext = createContext<WindowLightContextConfig>(
  {} as WindowLightContextConfig
);

export const WindowLightProvider: React.FC<WindowLightProviderConfig> = ({
  reducer,
  initialState,
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WindowLightContext.Provider value={{ state, dispatch }}>
      {children}
    </WindowLightContext.Provider>
  );
};

export const useWindowLightState = (): WindowLightContextConfig =>
  useContext(WindowLightContext);
