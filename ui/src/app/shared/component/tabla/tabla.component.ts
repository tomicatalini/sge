import { Component, Inject, Input, OnInit } from '@angular/core';
import { TablaColumna } from '../../model/tablaColumna';
import { GenericService } from 'src/app/shared/services/generic.service';
//import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
//import { GenericHelper } from './generic-helper';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input()servicio: GenericService<any>;
    @Input()tablaColumnas!: TablaColumna[];
    @Input()tablaHead: String[]
    @Input()editable: Boolean;
    @Input()entidad:String;
    dataSource: any[];
  constructor() { }

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

}
