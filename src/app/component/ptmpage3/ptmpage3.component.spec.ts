import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ptmpage3Component } from './ptmpage3.component';

describe('Ptmpage3Component', () => {
  let component: Ptmpage3Component;
  let fixture: ComponentFixture<Ptmpage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptmpage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptmpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
