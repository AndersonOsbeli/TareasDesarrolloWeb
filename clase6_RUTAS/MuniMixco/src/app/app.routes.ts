import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio | MuniMixco',
    loadComponent: () => import('./vistas/inicio/inicio').then(m => m.Inicio),
  },
  {
    path: 'multas',
    title: 'Multas | MuniMixco',
    loadComponent: () => import('./vistas/multas/multas').then(m => m.Multas),
  },
  {
    path: 'pagos',
    title: 'Pagos | MuniMixco',
    loadComponent: () => import('./vistas/pagos/pagos').then(m => m.Pagos),
  },
  { path: '**', redirectTo: '' },
];
