import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ptmpage2Component } from './ptmpage2.component';

describe('Ptmpage2Component', () => {
  let component: Ptmpage2Component;
  let fixture: ComponentFixture<Ptmpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptmpage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptmpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
