import { defineConfig } from 'vite';

import rootConfig from '../../vite.common.config';

export default defineConfig({
  ...rootConfig,
  server: {
    port: 3001,
  },
});
