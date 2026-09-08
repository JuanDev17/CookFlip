import { Routes } from '@angular/router';

export const boardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/boards/boards').then((m) => m.Boards),

    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pins',
      },
      {
        path: 'pins',
        loadComponent: () =>
          import('./pages/boards/pins/pins').then((m) => m.Pins),
      },
      {
        path: 'collections',
        loadComponent: () =>
          import('./pages/boards/collections/collections').then(
            (m) => m.Collections
          ),
      },
    ],
  },
];