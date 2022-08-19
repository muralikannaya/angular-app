import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ptmpage4Component } from './ptmpage4.component';

describe('Ptmpage4Component', () => {
  let component: Ptmpage4Component;
  let fixture: ComponentFixture<Ptmpage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptmpage4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptmpage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
