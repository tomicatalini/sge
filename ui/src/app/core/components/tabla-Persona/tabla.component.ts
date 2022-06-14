import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Field } from 'src/app/shared/model/Field';
import { TypeOfField } from 'src/app/shared/model/TypeOfField';
import { FormService } from 'src/app/shared/services/form.service';
import { Persona } from '../../model/persona';
import { PersonaService } from '../../services/persona.service';
import { PersonaDialogComponent } from '../persona-dialog/persona-dialog/persona-dialog.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  fields: Field[];
  tablaHead: string[];
  editable:boolean = true;
  entidad:string="Persona";

  constructor(
    public dialog: MatDialog,
    public personaService: PersonaService,
    public formService: FormService
  ) { }

  ngOnInit(): void {

    this.tablaHead = this.getHeaders();

    this.formService.getFields().subscribe( res => this.fields = res);
    
  }

  getHeaders(){
    let headers: string[] = [];
    let prueba: Field[] = [];

    this.formService.getFields().subscribe( res => prueba = res);

    for(let field of prueba){
      headers.push(field.property);
    }

    return headers;
  }

  // edit(persona: Persona){
  //   const dialogEdit = this.dialog.open( PersonaDialogComponent,{
  //     disableClose:true,
  //     width:'60%',
  //     data:persona
  //   });

  // }
}
