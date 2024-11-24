import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdGameComponent } from './third-game.component';

describe('ThirdGameComponent', () => {
  let component: ThirdGameComponent;
  let fixture: ComponentFixture<ThirdGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
