import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupGridComponent } from './popup-grid.component';

describe('PopupGridComponent', () => {
  let component: PopupGridComponent;
  let fixture: ComponentFixture<PopupGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
