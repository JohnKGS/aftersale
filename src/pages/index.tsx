import React from 'react';
import axios from 'axios';
import colors from '../utils/colors';
import Edifice from '../components/Edifice';
import Header from '../components/Header';
import Street from '../components/Street';
import { SunlightPhasesResponse } from '../common/type';
import { usePosition } from '../hooks/usePosition';
import { convertTimeToSeconds, initialSunlightPhases } from '../utils';

const Home = () => {
  const { position } = usePosition();
  const [background, setBackground] = React.useState('');
  const [sunlightPhases, setSunlightPhases] = React.useState(
    initialSunlightPhases
  );
  const [schedule, setSchedule] = React.useState({
    date: '--/--/----',
    time: '--:--:--'
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSchedule({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (!position) return;

    axios
      .get<SunlightPhasesResponse>(
        `https://api.sunrise-sunset.org/json?lat=${position.latitude}&lng=${position.longitude}&formatted=0`
      )
      .then(response => {
        Object.entries(response.data.results).forEach(result => {
          if (result[0] === 'day_length') return;

          setSunlightPhases(prevState => ({
            ...prevState,
            [result[0]]: {
              hour: new Date(result[1]).toLocaleTimeString(),
              background: prevState[result[0]].background
            }
          }));
        });
      });
  }, [position]);

  React.useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then(result => {
      const hours = new Date().toLocaleTimeString();

      if (result.state !== 'granted') {
        const bg =
          hours > '06:00:00' && hours < '19:00:00'
            ? colors['solar_noon']
            : colors['astronomical_twilight_end'];

        return setBackground(bg);
      }

      const selectedBackground = Object.values(sunlightPhases)
        .filter(
          sunlightPhase =>
            (sunlightPhase.hour && sunlightPhase.hour < hours) ||
            hours < sunlightPhases['astronomical_twilight_begin'].hour
        )
        .map(sunlightPhase => ({
          ...sunlightPhase,
          difference:
            convertTimeToSeconds(hours) -
            convertTimeToSeconds(sunlightPhase.hour)
        }))
        .sort((a, b) => a.difference - b.difference);

      setBackground(
        selectedBackground.length && selectedBackground[0].background
      );
    });
  }, [schedule]);

  return (
    <div
      className="h-screen flex h-screen flex-col justify-between"
      style={{
        background: background
          ? background
          : `linear-gradient(to right top, #e5e5e5, #d4d4d4, #9f9f9f, #737373)`
      }}
    >
      <Header schedule={schedule} />
      <main className="pt-8">
        <div className="w-full flex items-center justify-center">
          <Edifice />
        </div>
        <Street />
      </main>
    </div>
  );
};

export default Home;
