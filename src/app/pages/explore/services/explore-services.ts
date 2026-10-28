import { inject, Injectable, Service } from '@angular/core';
import { FeederMock } from '../../../api/mocks/feeder-recipe';
import { RecipeService } from '../../../api/models/services/recipe-service';

@Injectable()
 
export class ExploreServices {
    #recipeService = inject(RecipeService);

    getAllRecipes() {
        return this.#recipeService.getAllRecipes();
    }

    
}
