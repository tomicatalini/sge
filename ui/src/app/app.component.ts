import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Field } from './shared/model/Field';
import { FormService } from './shared/services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';

  fields$: Observable< Field[] >;

  constructor( service: FormService) {
    this.fields$ = service.getFields();
  }
}
