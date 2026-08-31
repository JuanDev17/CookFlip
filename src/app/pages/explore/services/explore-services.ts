import { inject, Service } from '@angular/core';
import { FeederMock } from '../../../api/mocks/feeder-recipe';

@Service()
export class ExploreServices {
    recipes = inject(FeederMock);

    
}
