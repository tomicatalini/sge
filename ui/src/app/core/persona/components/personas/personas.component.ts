import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Field } from 'src/app/shared/model/Field';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  fields$: Observable< Field[] >;

  constructor( service: FormService) {
    this.fields$ = service.getFields();
  }

  ngOnInit(): void {
  }

}
