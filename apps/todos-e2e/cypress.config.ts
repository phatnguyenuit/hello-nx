import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: nxE2EPreset(__dirname),
});

// Run headless: nx e2e todos-e2e
// Run with UI: nx e2e todos-e2e --watch
