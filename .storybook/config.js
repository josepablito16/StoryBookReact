import { configure } from '@storybook/react';

import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import JPTheme from './JPTheme';

// Option defaults.
addParameters({
  options: {
    theme: JPTheme,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
