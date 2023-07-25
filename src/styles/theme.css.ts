import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    gray0: '#FFFFFF',
    gray1: '#F3F3F3',
    gray2: '#E9E9E9',
    gray3: '#A6A6A6',
    gray4: '#787878',
    gray5: '#575757',
    red: '#FF5353',
    green: '#00FA77',
    purple: '#9747FF',
  },
  font: {
    body: 'arial',
  },
});
