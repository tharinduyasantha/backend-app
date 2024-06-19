import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http'; // Make sure HttpClientModule is imported
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    FormsModule,
    provideHttpClient(), // Use provideHttpClient instead of HttpClientModule
    RouterModule
  ]
};
