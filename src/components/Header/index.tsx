import React from 'react';
import Switch from 'react-switch';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useWindowLightState } from '../../contexts/windows';
import { WindowLightTypes } from '../../contexts/windows/types';
import { SunlightPhasesConfig } from '../../common/type';

interface HeaderProps {
  schedule: {
    date: string;
    time: string;
  };
  sunlightPhases: SunlightPhasesConfig;
}

const Header: React.FC<HeaderProps> = ({ schedule, sunlightPhases }) => {
  const { state, dispatch } = useWindowLightState();
  const [isTurnOff, setIsTurnOff] = React.useState(state.changeAllWindowsLight);
  const hours = new Date().toLocaleTimeString();
  const condition =
    hours >
      (!!sunlightPhases['sunrise'].hour
        ? sunlightPhases['sunrise'].hour
        : '06:00:00') &&
    hours <
      (!!sunlightPhases['nautical_twilight_end'].hour
        ? sunlightPhases['nautical_twilight_end'].hour
        : '19:00:00');

  React.useEffect(() => {
    setIsTurnOff(state.changeAllWindowsLight);
  }, [state.changeAllWindowsLight]);

  React.useEffect(() => {
    dispatch({
      type: condition
        ? WindowLightTypes.TURN_OFF_WINDOW_LIGHT
        : WindowLightTypes.TURN_ON_WINDOW_LIGHT
    });
  }, [condition]);

  const handleAllWindowsLight = () => {
    dispatch({
      type: isTurnOff
        ? WindowLightTypes.TURN_ON_WINDOW_LIGHT
        : WindowLightTypes.TURN_OFF_WINDOW_LIGHT
    });
  };

  return (
    <header className="w-full bg-gradient-to-r from-indigo-500 to-indigo-700 flex justify-center">
      <nav className="max-w-screen-xl flex flex-col w-full items-center py-4 tn:flex-row tn:justify-between tn:px-4">
        <div className="pb-8 tn:pb-0">
          <h3 className="font-medium text-white">Data: {schedule.date}</h3>
          <h3 className="font-medium text-white">Hora: {schedule.time}</h3>
        </div>

        <Switch
          height={24}
          width={64}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor="#d4d4d4"
          onColor="#262626"
          handleDiameter={16}
          uncheckedHandleIcon={<FiSun className="bg-gray-300" />}
          checkedHandleIcon={<FiMoon className="bg-gray-800 text-white" />}
          checked={isTurnOff}
          onChange={handleAllWindowsLight}
        />
      </nav>
    </header>
  );
};

export default Header;
