import { TestBed } from '@angular/core/testing';
import { PopularBoardsMock } from './popular-boards.mock';

describe('PopularBoardsMock', () => {
  let service: PopularBoardsMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularBoardsMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
