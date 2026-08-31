import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscoverCard } from './discover-card';

describe('DiscoverCard', () => {
  let component: DiscoverCard;
  let fixture: ComponentFixture<DiscoverCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
