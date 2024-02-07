import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideAnimations(),provideToastr(
    {
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }
  )]
};
