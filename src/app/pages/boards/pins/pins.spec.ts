import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pins } from './pins';

describe('Pins', () => {
  let component: Pins;
  let fixture: ComponentFixture<Pins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pins],
    }).compileComponents();

    fixture = TestBed.createComponent(Pins);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
