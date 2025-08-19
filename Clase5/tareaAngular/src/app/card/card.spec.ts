import { ComponentFixture, TestBed } from '@angular/core/testing';

// If './card' exports a default class/component, use:
import Card from './card';

// Or, if './card' exports 'CardComponent', use:
// import { CardComponent } from './card';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
