import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Field } from './shared/model/Field';
import { FormService } from './shared/services/form.service';
import { FormPermisosService } from './shared/services/formPermisos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';

  fields$: Observable< Field[] >;
  fieldPermisos$: Observable< Field[] >;

  constructor( service: FormService,
               service_permisos: FormPermisosService          
    ) {
    this.fields$ = service.getFields();
    this.fieldPermisos$ = service_permisos.getFields();
  }
}
