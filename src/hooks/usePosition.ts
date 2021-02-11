import React from 'react';

interface Position {
  latitude: number;
  longitude: number;
}

interface Coords {
  coords: Position;
}

export const usePosition = () => {
  const [isPermissionChanged, setIsPermissionChanged] = React.useState(false);
  const [position, setPosition] = React.useState<Position>();
  const [error, setError] = React.useState('');

  const onChange = ({ coords }: Coords) =>
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude
    });

  const onError = (error: GeolocationPositionError) => setError(error.message);

  React.useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) return setError('Geolocalização não suportada');
    const watcherId = geo.watchPosition(onChange, onError, {
      enableHighAccuracy: true
    });

    return () => geo.clearWatch(watcherId);
  }, [isPermissionChanged]);

  React.useEffect(() => {
    const permissions = navigator.permissions;
    if (!permissions) return setError('Permissões não suportadas');

    permissions.query({ name: 'geolocation' }).then(result => {
      result.onchange = () => setIsPermissionChanged(true);
    });
  }, []);

  return { position, error };
};
