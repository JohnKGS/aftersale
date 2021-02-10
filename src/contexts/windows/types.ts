import { Reducer } from 'react';

export enum WindowLightTypes {
  'TURN_OFF_WINDOW_LIGHT' = '@aftersale/TURN_OFF_WINDOW_LIGHT',
  'TURN_ON_WINDOW_LIGHT' = '@aftersale/TURN_ON_WINDOW_LIGHT',
  'CHANGE_WINDOW_LIGHT' = '@aftersale/CHANGE_WINDOW_LIGHT'
}

export interface WindowLightData {
  id: string;
  offline: boolean;
}

export interface WindowLightState {
  readonly data: WindowLightData[];
  readonly changeAll: boolean;
}

export interface WindowLightActionConfig {
  type: WindowLightTypes;
  payload?: { data: { id: string } };
}

export interface WindowLightContextConfig {
  state: WindowLightState;
  dispatch: ({ type, payload }: WindowLightActionConfig) => void;
}

export interface WindowLightProviderConfig {
  reducer: Reducer<WindowLightState, WindowLightActionConfig>;
  initialState: WindowLightState;
  children: React.ReactNode;
}
