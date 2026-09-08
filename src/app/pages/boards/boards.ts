import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { INavigationType } from '../../api/types/side-navigation';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule, RouterOutlet],
  selector: 'app-boards',
  styleUrl: './boards.scss',
  templateUrl: './boards.html',
})
export class Boards {
  readonly router = inject(Router);

   readonly quickMenu: INavigationType[] = [
    {
      label: 'Pins',
      route: '/boards/pins',
      icon: '',
    },
    {
      label: 'Collections',
      route: '/boards/collections',
      icon: '',
      requiresAuth: true,
    },
  ];
}
