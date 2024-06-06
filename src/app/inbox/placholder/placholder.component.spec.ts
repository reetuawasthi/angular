import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacholderComponent } from './placholder.component';

describe('PlacholderComponent', () => {
  let component: PlacholderComponent;
  let fixture: ComponentFixture<PlacholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
