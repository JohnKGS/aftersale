import React from 'react';
import { useWindowLightState } from '../../contexts/windows';
import {
  WindowLightData,
  WindowLightTypes
} from '../../contexts/windows/types';

interface WindowProps {
  lamp: WindowLightData;
}

const Window: React.FC<WindowProps> = ({ lamp }) => {
  const { dispatch } = useWindowLightState();

  const handleWindowLight = () => {
    dispatch({
      type: WindowLightTypes.CHANGE_WINDOW_LIGHT,
      payload: { data: { id: lamp.id } }
    });
  };

  return (
    <button
      onClick={handleWindowLight}
      className={`bg-gray-${
        lamp.offline ? 800 : 300
      } transition rounded-lg border-2 border-b-8 border-gray-500 shadow-xl border-opacity-60`}
    />
  );
};

export default Window;
