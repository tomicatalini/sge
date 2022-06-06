import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Field } from 'src/app/shared/model/Field';
import { TypeOfField } from 'src/app/shared/model/TypeOfField';
import { Persona } from '../../model/persona';
import { PersonaService } from '../../services/persona.service';
import { PersonaDialogComponent } from '../persona-dialog/persona-dialog/persona-dialog.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  fields: Field[]= [
    {
      entity: 'Persona',
      property: 'id',
      type: TypeOfField.TEXT,
      label: 'Nombre',
      value: '',
      required: true,
      readonly: false,
      order: 1,
      group: '',
      format: [{
        'key': 'required',
        'value': '' 
      },
      {
        'key': 'maxLength',
        'value': 25
      },
      {
        'key': 'minLength',
        'value': 5
      }
    ],
      options: []
    }
    ,
    {
      entity: 'Persona',
      property: 'nombre',
      type: TypeOfField.TEXT,
      label: 'Apodo',
      value: '',
      required: false,
      readonly: false,
      order: 1,
      group: '',
      format: [],
      options: []
    }
    ,{
      entity: 'Persona',
      property: 'apellido',
      type: TypeOfField.TEXT,
      label: 'Apellido',
      value: '',
      required: true,
      readonly: false,
      order: 1,
      group: '',
      format: [],
      options: []
    },{
      entity: 'Persona',
      property: 'biografia',
      type: TypeOfField.TEXT,
      label: 'Correo Electrónico',
      value: '',
      required: false,
      readonly: false,
      order: 1,
      group: '',
      format: [],
      options: []
    }
  ];
  tablaHead: string[]=['id','nombre','apellido','biografia'];
  editable:boolean = true;
  entidad:string="Persona";
  constructor(
    public dialog: MatDialog,
    public personaService: PersonaService
  ) { }

  ngOnInit(): void {
    if (this.editable==true){
      this.tablaHead.push('acciones')
    }  
  }
  edit(persona: Persona){
    const dialogEdit = this.dialog.open( PersonaDialogComponent,{
      disableClose:true,
      width:'60%',
      data:persona
    });

  }
}
