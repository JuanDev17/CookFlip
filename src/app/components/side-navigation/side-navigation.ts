import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { INavigationType } from '../../api/types/side-navigation';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatIconModule, RouterLink],
  selector: 'app-side-navigation',
  styleUrl: './side-navigation.scss',
  templateUrl: './side-navigation.html',
})
export class SideNavigation {

 readonly sidePanelItems: INavigationType[] = [
  {
    label: 'Home',
    route: '/explore',
    icon: 'home',
  },
  {
    label: 'Discover',
    route: '/discover',
    icon: 'explore',
    requiresAuth: true,
  },
  {
    label: 'Board',
    route: '/board',
    icon: 'dashboard',
    requiresAuth: true,
  },
  {
    label: 'Create',
    route: '/create',
    icon: 'add_circle',
    requiresAuth: true,
  },
  {
    label: 'Updates',
    route: '/updates',
    icon: 'notifications',
    requiresAuth: true,
    badge: 3,
  },
  {
    label: 'Settings',
    route: '/settings',
    icon: 'settings',
    requiresAuth: true,
  },
];


}
