import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { SideNavigation } from "../../components/side-navigation/side-navigation";
import { SearchComponent } from "../../components/search-component/search-component";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { FeederMock } from '../../api/mocks/feeder-recipe';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import { IRecipeCard } from '../../api/types/recipe.type';
import { ExploreServices } from './services/explore-services';

@Component({
  imports: [SideNavigation, SearchComponent, CommonModule, MatIconModule, MatAnchor, MatButtonModule, RecipeCard],
  selector: 'app-explore',
  styleUrl: './explore.scss',
  templateUrl: './explore.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExploreServices]
})
export class Explore implements OnInit {

  #exploreServices = inject(ExploreServices);

  recipes: IRecipeCard[] = [];

  ngOnInit() {
    this.#exploreServices.getAllRecipes().subscribe({
      next: (recipes) => {
          console.log('Fetched recipes:', recipes);
        this.recipes = recipes.map(recipe => ({
          id: String(recipe.id),
          title: recipe.title,
          description: recipe.description,
          cookTime: recipe.cookTime,
          image: '/assets/recipe-placeholder.jpg'
        }));
      },
      error: (error) => {
        console.error('Failed to fetch recipes:', error);
      }
    });
  }
}                                                                                                           