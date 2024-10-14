import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapG1Component } from './face-snap-g1.component';

describe('FaceSnapG1Component', () => {
  let component: FaceSnapG1Component;
  let fixture: ComponentFixture<FaceSnapG1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnapG1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnapG1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
