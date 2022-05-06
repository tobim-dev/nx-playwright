import {ExecutorContext} from "nx/src/config/misc-interfaces";
import { chromium, webkit, firefox } from "playwright";
import 'core-js'


export interface PlaywrightExecutorOptions {
  playwrightConfig: string;
}


export default async function playwrightExecutor(options: PlaywrightExecutorOptions, context: ExecutorContext) {

  for(const browserType of [chromium, firefox, webkit]){


    const browser = await browserType.launch({headless: false});
    // Create pages, interact with UI elements, assert values
    await browser.close();
  }

  return {
    success: true,
  };
}
