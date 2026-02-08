import type { Preview } from '@storybook/react-vite'

import '../src/components/css-ai-page/css/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
