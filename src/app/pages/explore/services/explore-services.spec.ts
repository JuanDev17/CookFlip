import { TestBed } from '@angular/core/testing';
import { ExploreServices } from './explore-services';

describe('ExploreServices', () => {
  let service: ExploreServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
