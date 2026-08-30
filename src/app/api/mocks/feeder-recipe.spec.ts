import { TestBed } from '@angular/core/testing';
import { FeederRecipe } from '../../mocks/feeder-recipe';

describe('FeederRecipe', () => {
  let service: FeederRecipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeederRecipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
