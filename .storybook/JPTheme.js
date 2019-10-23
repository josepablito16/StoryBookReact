import { create } from '@storybook/theming';

export default create({
  base: 'rgb(95,103,105)',
  colorPrimary: 'rgb(60,66,69)',
  colorSecondary: 'rgb(113,145,146)',

  // UI
  appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: 'rgb(60,66,69)',

  // Form colors
  inputBg: 'black',
  inputBorder: 'white',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: 'The JP storybook',
  brandUrl: 'https://github.com/josepablito16',
  brandImage: 'https://repository-images.githubusercontent.com/54173593/39e57000-a3fa-11e9-83c7-953827061607',
});