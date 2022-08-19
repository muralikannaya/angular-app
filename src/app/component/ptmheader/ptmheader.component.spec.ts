import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtmheaderComponent } from './ptmheader.component';

describe('PtmheaderComponent', () => {
  let component: PtmheaderComponent;
  let fixture: ComponentFixture<PtmheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtmheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtmheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
