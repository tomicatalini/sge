import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonaFormComponent } from 'src/app/core/components/persona/form/persona-form/persona-form.component';
import { Field } from 'src/app/shared/model/Field';
import { GenericService } from 'src/app/shared/services/generic.service';
import { GenericHelper } from './generic-helper';

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
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAll();
    
  }
  findAll(): void{
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
  edit(_data:any){
    let genericHelper = new GenericHelper();
    //ESTOS CAMPOS SERAN LOS QUE DEFINA PELI
    genericHelper.title="Editar "+ this.entidad;
    genericHelper.subtitle="Modifique los datos";
    genericHelper.content="";
    genericHelper.entidad= _data;
    genericHelper.isEdit=true;
    const dialogEdit= this.dialog.open(PersonaFormComponent,{
      disableClose:true,
      width:'60%',
      //ESTA DATA SERA LA QUE PASE MATIAS
      data:_data
    });         
   
  }

}
