import React from 'react';
import Switch from 'react-switch';
import { FiMoon, FiSun } from 'react-icons/fi';

interface HeaderProps {
  schedule: {
    date: string;
    time: string;
  };
}

const Header: React.FC<HeaderProps> = ({ schedule }) => {
  const [isTurnOff, setIsTurnOff] = React.useState(false);

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
          onChange={setIsTurnOff}
        />
      </nav>
    </header>
  );
};

export default Header;
