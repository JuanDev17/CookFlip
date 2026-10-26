import { inject, Injectable, Service } from '@angular/core';
import { FeederMock } from '../../../../api/mocks/feeder-recipe';

@Injectable()
export class PinService {
    recipes = inject(FeederMock);
    
}
