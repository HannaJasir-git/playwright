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
fullyParallel:true,//to run the tests in parallel mode

  projects:[{
  name:'chromeProject',
  use: {
    browserName:'chromium',
    headless:false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure',
    //viewport: {width:500,height:500}
    permissions:['geolocation','camera','notifications','microphone'],
    //location data
    //geolocation:{latitude:12.9716,longitude:77.567}
   ignoreHTTPSErrors:true,//to ignore the SSL certificate errors
   
  },
},
  
  {
    name:'firefoxProject',
  use: {
    browserName:'firefox',
    headless: false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure'
  },
},
{
    name:'safariProject',
  use: {
    browserName:'webkit',
    headless: false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure',
    //...devices['Desktop safari']
  },
},

],

})

