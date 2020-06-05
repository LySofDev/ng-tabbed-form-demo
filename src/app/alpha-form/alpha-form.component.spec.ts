import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaFormComponent } from './alpha-form.component';

describe('AlphaFormComponent', () => {
  let component: AlphaFormComponent;
  let fixture: ComponentFixture<AlphaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
