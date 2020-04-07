import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', loadChildren: './modules/users/users.module#UsersModule' },
  { path: '**', redirectTo: '/users', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot (appRoutes, {
  enableTracing: false,
  preloadingStrategy: PreloadAllModules
});
