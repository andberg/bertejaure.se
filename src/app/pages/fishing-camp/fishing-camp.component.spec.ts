import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingCampComponent } from './fishing-camp.component';

describe('FishingCampComponent', () => {
  let component: FishingCampComponent;
  let fixture: ComponentFixture<FishingCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FishingCampComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishingCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
