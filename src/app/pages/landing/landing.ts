import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Navigation } from '../../components/navigation/navigation';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import { RecipeMock } from '../../api/mocks/recipe-mock';
import { IRecipeCard } from '../../api/types/recipe.type';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  imports: [Navigation, MatButtonModule, RecipeCard, RouterLink],
  selector: 'app-landing',
  styleUrl: './landing.scss',
  templateUrl: './landing.html',
})
export class Landing {
  #recipeMockService = inject(RecipeMock);

  isAuthRoute = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const authRoutes = ['/login', '/register'];
        this.isAuthRoute = authRoutes.includes(event.urlAfterRedirects);
        
      });
  }


  recipes: IRecipeCard[] = this.#recipeMockService.MOCK_RECIPES.slice(0, 4);

  
}
