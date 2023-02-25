import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home-routes') },
  { path: 'register', loadChildren: () => import('./features/register/register-routes') },
  { path: 'business-information', loadChildren: () => import('./features/business-information/business-information-routes') },
  { path: 'thankyou', loadChildren: () => import('./features/thankyou/thankyou-routes') },
];
