import React from 'react';
import { action } from '@storybook/addon-actions';
import  App  from '../App.js';

export default {
  title: 'App',
};

export const FinalVersion = () => <App/>;

FinalVersion.story={
  parameters: {
      notes:
        'Esta sería la vista final de la aplicación, los componentes fueron basados en https://codepen.io/ricardoolivaalonso/pen/vYBVYPa?editors=1010',
    },
}