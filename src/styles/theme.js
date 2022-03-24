import { css } from 'styled-components';

const wrapSize = '1100px';

const wrapper = css`
  margin: 0 auto;
  max-width: ${wrapSize};
  width: 100%;
`;

const colors = {
  primary: '#ff9270',
  gray300: '#e3e3e3',
  gray500: '#bbbbbb',
  gray800: '#f0f0f0',
  white: '#ffffff',
  black: '#000000',
};

const media = {
  phone: 'only screen and (max-width: 1024px)',
  desktop: 'screen and (min-width: 1025px)',
};

const theme = {
  colors,
  wrapSize,
  wrapper,
  media,
};

export default theme;
