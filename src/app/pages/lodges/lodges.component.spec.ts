import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgesComponent } from './lodges.component';

describe('LodgesComponent', () => {
  let component: LodgesComponent;
  let fixture: ComponentFixture<LodgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LodgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LodgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
