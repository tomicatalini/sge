import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Field } from 'src/app/shared/model/Field';
import { TypeOfField } from 'src/app/shared/model/TypeOfField';
import { DataService } from 'src/app/shared/services/data.service';
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

  fields: Field[]= [];
  tablaHead: string[] = ['id','nombre','apellido','biografia'];
  editable:boolean = true;
  entidad:string="Persona";
  
  constructor(
    public dialog: MatDialog,
    public personaService: PersonaService,
    private formService: FormService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    
    this.formService.getFields().subscribe({
      next: (res) => {
        this.fields = res;
      },
      error: (e) => {console.error('No se pudo obtener la estructura de la tabla.')},
      complete: () => console.warn('Complete')
    });

    this.tablaHead = this.getHeaders();

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

  getHeaders(){
    let headers: string[] = [];
    
    for( let field of this.fields){
      headers.push(field.property);
    }

    return headers;
  }
}
