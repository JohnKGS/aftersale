import { WindowLightData, WindowLightState } from '../contexts/windows/types';

const createWindow = (count: number) =>
  Array.from({ length: count }, (v: number, k: number) => k).map(k => ({
    id: `id-${k}`,
    offline: false
  }));

export const initialData: WindowLightData[] = createWindow(12);

export const initialState: WindowLightState = {
  data: initialData,
  changeAll: false
};
