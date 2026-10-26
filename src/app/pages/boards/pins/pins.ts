import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IRecipeCard } from '../../../api/types/recipe.type';
import { FeederMock } from '../../../api/mocks/feeder-recipe';
import { RecipeCard } from '../../../components/recipe-card/recipe-card';

@Component({
  imports: [CommonModule,RecipeCard],
  selector: 'app-pins',
  styleUrl: './pins.scss',
  templateUrl: './pins.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pins {

  #feederService = inject(FeederMock);

  recipes: IRecipeCard[] = this.#feederService.PINS;   
}
