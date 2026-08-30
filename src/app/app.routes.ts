import { Routes } from '@angular/router';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Landing } from './pages/landing/landing';
import { Explore } from './pages/explore/explore';
import { Discover } from './pages/discover/discover';

export const routes: Routes = [
    {
        path: 'register',
        component: Register
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Landing
    },
    {
        path: 'explore',
        component: Explore
    },
    {
        path: 'discover',
        component: Discover
    }
];
