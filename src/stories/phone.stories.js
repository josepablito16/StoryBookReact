import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  number,
  boolean,
  color,
  select,
  radios,
  array,
  date,
  button,
  object,
  files,
  optionsKnob as options,
} from '@storybook/addon-knobs';

import  Phone  from '../phone.js';

export default {
  title: 'Phone',
  decorators:[withKnobs],
};

export const Default = () => <Phone/>;

Default.story={
	parameters: {
	    notes:
	      'Esta sería la vista si no se le mandan parámetros al teléfono, como se puede notar, aparece muy grande en la pantalla.',
	  },
}


export const PhoneWidth=()=>{
	const widthValue = number('Width', 180, { min: 0, max: 500, step: 0.01 });
	return (<Phone width={`${widthValue}px`}/>)
}