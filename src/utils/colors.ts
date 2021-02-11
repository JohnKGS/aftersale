import { SunlightPhases } from '../common/type';

const colors: SunlightPhases = {
  sunrise: `linear-gradient(to right top, #fdc352, #f7cf60, #f1d96f, #ece480, #e8ed92)`,
  solar_noon: `linear-gradient(to right top, #ffac6f, #ffb96b, #ffc768, #ffd566, #ffe467)`,
  sunset: `linear-gradient(to right top, #ee9617, #f68628, #fc7739, #ff6748, #fe5858)`,
  civil_twilight_end: `linear-gradient(to right top, #9f493b, #9c475e, #88507b, #695c8a, #4b6489)`,
  nautical_twilight_end: `linear-gradient(to right top, #061d32, #152942, #243553, #354265, #464f76)`,
  astronomical_twilight_end: `linear-gradient(to right top, #0e0d11, #16141b, #1c1925, #221f2f, #282439)`,
  astronomical_twilight_begin: `linear-gradient(to right top, #061d32, #152942, #243553, #354265, #464f76)`,
  nautical_twilight_begin: `linear-gradient(to right top, #9f493b, #9c475e, #88507b, #695c8a, #4b6489)`,
  civil_twilight_begin: `linear-gradient(to right top, #9da0d0, #d9accc, #f9c1c3, #ffdfc6, #fffede)`
};

export default colors;
