import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.spreezy.app',
  appName: 'Spreezy',
  webDir: 'dist/spreezy-frontend',
  server: {
    androidScheme: 'https'
  }
};

export default config;
