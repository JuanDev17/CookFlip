import { TestBed } from '@angular/core/testing';
import { RecipeMock } from './recipe-mock';

describe('RecipeMock', () => {
  let service: RecipeMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
