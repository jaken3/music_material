import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'inicio', loadChildren: () => import('./pages/pages.routes').then(m => m.PAGES) }
];
