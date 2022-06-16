import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPermisosComponent } from './tabla-permisos.component';

describe('TablaPermisosComponent', () => {
  let component: TablaPermisosComponent;
  let fixture: ComponentFixture<TablaPermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPermisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
