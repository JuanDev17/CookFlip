import { Routes } from '@angular/router';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Landing } from './pages/landing/landing';
import { Explore } from './pages/explore/explore';
import { Discover } from './pages/discover/discover';
import { Boards } from './pages/boards/boards';

export const routes: Routes = [
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then((m) => m.Register)
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then((m) => m.Login)
    },
    {
        path: '',
        loadComponent: () => import('./pages/landing/landing').then((m) => m.Landing)
    },
    {
        path: 'explore',
        loadComponent: () => import('./pages/explore/explore').then((m) => m.Explore)
    },
    {
        path: 'discover',
        loadComponent   : () => import('./pages/discover/discover').then((m) => m.Discover)
    },
    {
        path: 'boards',
        loadChildren: () => import('./boards.routes').then((m) => m.boardRoutes)
    }
];
