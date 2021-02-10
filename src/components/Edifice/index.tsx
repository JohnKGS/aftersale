import React from 'react';
import { useWindowLightState } from '../../contexts/windows';
import Window from '../Window';

const Edifice = () => {
  const { state } = useWindowLightState();

  return (
    <div className="bg-gray-700 rounded rounded-b-none grid grid-cols-3 grid-rows-5 gap-4 p-4 h-130 max-w-screen-sm mx-6 w-full justify-center tn:h-sm tn:gap-6 tn:p-6">
      {state.data.map(lamp => (
        <Window key={lamp.id} lamp={lamp} />
      ))}
    </div>
  );
};

export default Edifice;
