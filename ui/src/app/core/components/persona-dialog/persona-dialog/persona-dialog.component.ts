import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PersonaService } from 'src/app/core/services/persona.service';
import { Field } from 'src/app/shared/model/Field';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-persona-dialog',
  templateUrl: './persona-dialog.component.html',
  styleUrls: ['./persona-dialog.component.css']
})
export class PersonaDialogComponent implements OnInit {  

  fields$: Observable< Field[] >;
  data:any;
   constructor(
    service: FormService,
    public dialogRef: MatDialogRef<PersonaDialogComponent>,
    @Inject(MAT_DIALOG_DATA)public permisos:any     
  ) {    
    this.fields$ = service.getFields(); 
    this.data=permisos;
    console.log("Prueba de Datos enviados desde la tabla "+ permisos.usuario);
  }

  ngOnInit(): void {
  }

}
