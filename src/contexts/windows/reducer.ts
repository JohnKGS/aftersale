import { Reducer } from 'react';
import {
  WindowLightTypes,
  WindowLightActionConfig,
  WindowLightState
} from './types';
import { initialState } from '../../utils';

const reducer: Reducer<WindowLightState, WindowLightActionConfig> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case WindowLightTypes.TURN_ON_WINDOW_LIGHT:
      return {
        ...state,
        data: state.data.map(lamp => ({ ...lamp, offline: false })),
        changeAll: false
      };
    case WindowLightTypes.TURN_OFF_WINDOW_LIGHT:
      return {
        ...state,
        data: state.data.map(lamp => ({ ...lamp, offline: true })),
        changeAll: true
      };
    case WindowLightTypes.CHANGE_WINDOW_LIGHT:
      const newData = state.data.map(lamp => ({
        ...lamp,
        offline:
          lamp.id === action.payload.data.id ? !lamp.offline : lamp.offline
      }));

      const isAllLampsOff = newData.every(lamp => lamp.offline === true);
      const isAllLampsOn = newData.every(lamp => lamp.offline === false);

      const toggle = isAllLampsOn
        ? false
        : isAllLampsOff
        ? true
        : state.changeAll;

      return {
        ...state,
        data: newData,
        changeAll: toggle
      };
    default:
      return state;
  }
};

export default reducer;
