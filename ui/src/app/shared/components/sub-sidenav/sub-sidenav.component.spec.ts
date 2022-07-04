import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSidenavComponent } from './sub-sidenav.component';

describe('SubSidenavComponent', () => {
  let component: SubSidenavComponent;
  let fixture: ComponentFixture<SubSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
