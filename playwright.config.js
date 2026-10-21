// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  workers:3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
 
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout:40*1000,            //normal time out
  expect:{
    timeout:60*1000          //assertion time out
  },
  reporter:'html',
  use: {
    headless: false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure'
  },
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

 
  /* Configure projects for major browsers */
  
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

