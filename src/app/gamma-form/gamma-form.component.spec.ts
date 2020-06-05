import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GammaFormComponent } from './gamma-form.component';

describe('GammaFormComponent', () => {
  let component: GammaFormComponent;
  let fixture: ComponentFixture<GammaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GammaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GammaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
