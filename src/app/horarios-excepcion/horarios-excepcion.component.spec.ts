import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosExcepcionComponent } from './horarios-excepcion.component';

describe('HorariosExcepcionComponent', () => {
  let component: HorariosExcepcionComponent;
  let fixture: ComponentFixture<HorariosExcepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariosExcepcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosExcepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
