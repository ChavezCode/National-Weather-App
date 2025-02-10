import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()), //using server side rendering so I need to configure (withFetch()) for compatability with SSR contexts
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
};
