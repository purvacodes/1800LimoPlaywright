// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if test.only is left in code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter
  reporter: 'html',

  // Shared settings
  use: {
    trace: 'on-first-retry',

    // Disable Playwright's default viewport
    viewport: null,

    // Launch browser maximized
    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: {
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },

    {
      name: 'firefox',
      use: {
        viewport: null,
      },
    },

    {
      name: 'webkit',
      use: {
        viewport: null,
      },
    },
  ],
});