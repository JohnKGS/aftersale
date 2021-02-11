import colors from './colors';
import { WindowLightData, WindowLightState } from '../contexts/windows/types';
import { SunlightPhases, SunlightPhasesConfig } from '../common/type';

const createWindow = (count: number) =>
  Array.from({ length: count }, (v: number, k: number) => k).map(k => ({
    id: `id-${k}`,
    offline: false
  }));

const createSunlightPhase = (colors: SunlightPhases) => {
  const obj: SunlightPhasesConfig = {} as SunlightPhasesConfig;

  Object.entries(colors).forEach(color => {
    obj[color[0]] = {
      background: color[1],
      hour: ''
    };
  });

  return obj;
};

export const convertTimeToSeconds = (time: string) => {
  const [hour, minutes, seconds] = time.split(':').map(Number);
  return hour === 0 ? 24 : hour * 3600 + minutes * 60 + seconds;
};

export const initialData: WindowLightData[] = createWindow(12);

export const initialState: WindowLightState = {
  data: initialData,
  changeAllWindowsLight: false
};

export const initialSunlightPhases = createSunlightPhase(colors);
