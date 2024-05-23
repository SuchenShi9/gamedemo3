import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorcardComponent } from './colorcard.component';

describe('ColorcardComponent', () => {
  let component: ColorcardComponent;
  let fixture: ComponentFixture<ColorcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
