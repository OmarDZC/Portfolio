import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Importaciones de Vercel
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

// Inyectar manualmente
if (typeof window !== 'undefined') {
  inject();
  injectSpeedInsights();
}

// Bootstrap de la aplicación
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));