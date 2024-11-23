import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGameComponent } from './first-game.component';

describe('Game1Component', () => {
  let component: FirstGameComponent;
  let fixture: ComponentFixture<FirstGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
