import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormasComunicacionComponent } from './formas-comunicacion.component';

describe('FormasComunicacionComponent', () => {
  let component: FormasComunicacionComponent;
  let fixture: ComponentFixture<FormasComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormasComunicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormasComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
