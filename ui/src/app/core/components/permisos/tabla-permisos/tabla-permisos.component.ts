import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Permiso } from 'src/app/core/model/permiso';
import { PermisoService } from 'src/app/core/services/permisos.service';
import { Field } from 'src/app/shared/model/Field';
import { TypeOfField } from 'src/app/shared/model/TypeOfField';
import { PermisosDialogComponent } from '../permisos-dialog/permisos-dialog.component';

@Component({
  selector: 'app-tabla-permisos',
  templateUrl: './tabla-permisos.component.html',
  styleUrls: ['./tabla-permisos.component.css']
})
export class TablaPermisosComponent implements OnInit {
  
  fields: Field[]= [
    {
      entity: 'Permiso',
      property: 'id',
      type: TypeOfField.TEXT,
      label: 'Id',
      value: '',
      readonly: false,
      order: 1,
      group: '',
      format: [{
        'key': 'required',
        'value': '' 
      }
    ],
      options: []
    }
    ,
    {
      entity: 'Permiso',
      property: 'nombre',
      type: TypeOfField.TEXT,
      label: 'Nombre',
      value: '',
      readonly: false,
      order: 1,
      group: '',
      format: [],
      options: []
    }
    ,{
      entity: 'Permiso',
      property: 'usuario',
      type: TypeOfField.TEXT,
      label: 'Usuario',
      value: '',
      readonly: false,
      order: 1,
      group: '',
      format: [],
      options: []
    },{
      entity: 'Permiso',
      property: 'ultimaConexion',
      type: TypeOfField.DATE,
      label: 'Ultima Conexión',
      value: '',
      readonly: false,
      order: 1,
      group: '',
      format: [],
      options: []
    }
  ];
  tablaHead: string[]=['id','nombre','usuario','ultimaConexion'];
  editable:boolean = true;
  entidad:string="Permiso";
  constructor(
    public permisoService: PermisoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.editable==true){
      this.tablaHead.push('acciones')
    }  
  }
  edit(persona: Permiso){
    const dialogEdit = this.dialog.open( PermisosDialogComponent,{
      disableClose:true,
      width:'60%',
      data:persona
    });
  }
}
