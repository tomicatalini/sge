import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Field } from 'src/app/shared/model/Field';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-permisos-dialog',
  templateUrl: './permisos-dialog.component.html',
  styleUrls: ['./permisos-dialog.component.css']
})
export class PermisosDialogComponent implements OnInit {
  fields$: Observable< Field[] >;
  data:any;
   constructor(
    service: FormService,
    public dialogRef: MatDialogRef<PermisosDialogComponent>,
    @Inject(MAT_DIALOG_DATA)public permisos:any     
  ) {    
    this.fields$ = service.getFields_Form_permisos(); 
    this.data=permisos;
    console.log("Prueba de Datos enviados desde la tabla "+ permisos.usuario);
  }

  ngOnInit(): void {
  }
}
