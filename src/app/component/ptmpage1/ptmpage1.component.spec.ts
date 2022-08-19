import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ptmpage1Component } from './ptmpage1.component';

describe('Ptmpage1Component', () => {
  let component: Ptmpage1Component;
  let fixture: ComponentFixture<Ptmpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ptmpage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptmpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
