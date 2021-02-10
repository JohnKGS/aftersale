import React, { useState, useEffect } from 'react';
import { usePosition } from '../hooks/usePosition';
import Edifice from '../components/Edifice';
import Header from '../components/Header';
import Street from '../components/Street';

const Home = () => {
  const { position } = usePosition();
  const [schedule, setSchedule] = useState({
    date: '--/--/----',
    time: '--:--:--'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSchedule({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex h-screen flex-col justify-between">
      <Header schedule={schedule} />
      <main>
        <div className="w-full flex items-center justify-center">
          <Edifice />
        </div>
        <Street />
      </main>
    </div>
  );
};

export default Home;
