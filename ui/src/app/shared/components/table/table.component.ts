import { Component, Input, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';

import { Field } from '../../model/Field';
import { MatDialog } from '@angular/material/dialog';
import { GenericHelper } from '../../model/generic-helper';
import { DialogComponent } from '../dialog/dialog/dialog.component';
import { PersonaDialogComponent } from 'src/app/core/components/persona-dialog/persona-dialog/persona-dialog.component';
import { Overlay, ScrollStrategyOptions } from '@angular/cdk/overlay';
//import { DialogComponent } from 'src/app/core/components/persona/dialog/dialog.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()servicio: GenericService<any>;
  @Input()fields!: Field[];
  @Input()tablaHead: String[]
  @Input()editable: Boolean;
  @Input()entidad:String;
  dataSource: any[];
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAllAll();
  }
  findAllAll(): void{
    this.servicio.findAll().subscribe(
      response => {
        JSON.stringify(this.fields);
        JSON.stringify(response);
        this.dataSource= response as any[];
        // console.log(this.dataSource);
      },
      err =>{
        console.log("Error al mostrar"+ err)
      }
    )
  }

   edit(_data:any){
     let genericHelper = new GenericHelper();
     //ESTOS CAMPOS SERAN LOS QUE DEFINA PELI
     genericHelper.title="Editar "+ this.entidad;
     genericHelper.subtitle="Modifique los datos";
     genericHelper.content="";
     genericHelper.entidad= _data;
     genericHelper.isEdit=true;
     console.log(_data);
    
     const dialogEdit= this.dialog.open( PersonaDialogComponent,{
       disableClose:true,
       width:'60%',
       //ESTA DATA SERA LA QUE PASE MATIAS
       data:_data
      }
       )
   }
  delete(){
    
  }
}
