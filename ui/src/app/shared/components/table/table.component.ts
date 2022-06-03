import { Component, Input, OnInit } from '@angular/core';
import { GenericService } from '../../generic.service';

import { Field } from '../../model/Field';
import { MatDialog } from '@angular/material/dialog';
import { GenericHelper } from '../../model/generic-helper';
//import { DialogComponent } from 'src/app/core/components/persona/dialog/dialog.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()servicio: GenericService<any>;
  @Input()tablaColumnas!: Field[];
  @Input()tablaHead: String[]
  @Input()editable: Boolean;
  @Input()entidad:String;
  dataSource: any[];
  constructor(
    //public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAllAll();
  }
  findAllAll(): void{
    this.servicio.findAll().subscribe(
      response => {
        JSON.stringify(this.tablaColumnas);
        JSON.stringify(response);
        this.dataSource= response as any[];
        console.log(this.dataSource)
      },
      err =>{
        console.log("Error al mostrar"+ err)
      }
    )
  }
  edit(){}
  // edit(_data:any){
  //   let genericHelper = new GenericHelper();
  //   //ESTOS CAMPOS SERAN LOS QUE DEFINA PELI
  //   genericHelper.title="Editar "+ this.entidad;
  //   genericHelper.subtitle="Modifique los datos";
  //   genericHelper.content="";
  //   genericHelper.entidad= _data;
  //   genericHelper.isEdit=true;
  //   const dialogEdit= this.dialog.open( DialogComponent,{
  //     disableClose:true,
  //     width:'60%',
  //     //ESTA DATA SERA LA QUE PASE MATIAS
  //     data:_data})
  // }
  delete(){
    
  }
}
