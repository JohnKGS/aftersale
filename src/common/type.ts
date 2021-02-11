export type SunlightPhaseOptions =
  | 'sunrise'
  | 'solar_noon'
  | 'sunset'
  | 'civil_twilight_end'
  | 'nautical_twilight_end'
  | 'astronomical_twilight_end'
  | 'astronomical_twilight_begin'
  | 'nautical_twilight_begin'
  | 'civil_twilight_begin';

export type SunlightPhases = {
  [key in SunlightPhaseOptions]: string;
};

export type SunlightPhasesConfig = {
  [key in SunlightPhaseOptions]: {
    hour: string;
    background: string;
  };
};

export interface SunlightPhasesResponse {
  results: SunlightPhases;
  status: string;
}
