import { WebPlugin } from '@capacitor/core';
import { rgs-motion-webPlugin } from './definitions';

export class rgs-motion-webWeb extends WebPlugin implements rgs-motion-webPlugin {
  constructor() {
    super({
      name: 'rgs-motion-web',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return Promise.resolve({ value: options.value });
  }
}

const rgs-motion-web = new rgs-motion-webWeb();

export { rgs-motion-web };
