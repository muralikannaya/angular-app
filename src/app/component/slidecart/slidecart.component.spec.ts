import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidecartComponent } from './slidecart.component';

describe('SlidecartComponent', () => {
  let component: SlidecartComponent;
  let fixture: ComponentFixture<SlidecartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidecartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
