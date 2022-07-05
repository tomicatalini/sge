import { TestBed } from '@angular/core/testing';
import { PermisosService } from 'src/app/shared/services/permisos.service';



describe('PermisosService', () => {
  let service: PermisosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
