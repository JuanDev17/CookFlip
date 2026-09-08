import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Navigation } from './components/navigation/navigation';
import { SideNavigation } from './components/side-navigation/side-navigation';
import { SearchComponent } from './components/search-component/search-component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Navigation, SideNavigation, SearchComponent, MatIconModule, MatButtonModule],
  templateUrl: './app.html'
})
export class App {
  showNav = true;
  isAuthRoute = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const hideNavRoutes = ['/', '/login', '/register'];
        this.isAuthRoute = hideNavRoutes.includes(event.urlAfterRedirects);
        this.showNav = !this.isAuthRoute;
      });
  }

  
}