import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonaService } from 'src/app/core/services/persona.service';
import { Field } from 'src/app/shared/model/Field';
import { Persona } from 'src/app/shared/model/persona';
import { TablaColumna, TablaTipoColumna } from 'src/app/shared/model/tablaColumna';
import { TypeOfField } from 'src/app/shared/model/TypeOfField';
import { PersonaFormComponent } from '../../form/persona-form/persona-form.component';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.css']
})
export class TablaPersonaComponent implements OnInit {

  tablaColumnas: Field[]= [
    { 
      entity:"Persona",
      property:"",
      type: TypeOfField.NUMBER,
      label:"id",
      value:"",
      required:false,
      readonly:false,
      order:1,
      group:"datos-personales",
      format:[],
      options:[]      
    },
    {
      entity:"Persona",
      property:"",
      type: TypeOfField.NUMBER,
      label:"nombre",
      value:"",
      required:false,
      readonly:false,
      order:1,
      group:"datos-personales",
      format:[],
      options:[] 
    },
    {
      entity:"Persona",
      property:"",
      type: TypeOfField.NUMBER,
      label:"apellido",
      value:"",
      required:false,
      readonly:false,
      order:1,
      group:"datos-personales",
      format:[],
      options:[] 
    },
    {
      entity:"Persona",
      property:"",
      type: TypeOfField.NUMBER,
      label:"biografia",
      value:"",
      required:false,
      readonly:false,
      order:1,
      group:"datos-personales",
      format:[],
      options:[] 
    }
  ];
  tablaHead:string[]=['id','nombre','apellido','biografia','acciones']
  editable:boolean = true;
  entidad:string="Persona"
  constructor(
    public dialog: MatDialog,
    public personaService: PersonaService
  ) { }

  ngOnInit(): void {
  }

  edit(persona: Persona){
    const dialogEdit = this.dialog.open( PersonaFormComponent,{
      disableClose:true,
      width:'60%',
      data:persona
    });}
}
