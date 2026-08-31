import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SideNavigation } from "../../components/side-navigation/side-navigation";
import { SearchComponent } from "../../components/search-component/search-component";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { FeederMock } from '../../api/mocks/feeder-recipe';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import { IRecipeCard } from '../../api/types/recipe.type';

@Component({
  imports: [SideNavigation, SearchComponent, CommonModule, MatIconModule, MatAnchor, MatButtonModule, RecipeCard],
  selector: 'app-explore',
  styleUrl: './explore.scss',
  templateUrl: './explore.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Explore {

  #feederService = inject(FeederMock);

  recipes: IRecipeCard[] = this.#feederService.MOCK_RECIPES_FEEDER;
}
