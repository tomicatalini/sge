import { Component, Input, OnInit } from '@angular/core';
import { GenericServiceService } from 'src/app/shared/services/genericService.service';

import { Field } from 'src/app/shared/model/field';

import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-tablaGenerica',
  templateUrl: './tablaGenerica.component.html',
  styleUrls: ['./tablaGenerica.component.css']
})
export class TablaGenericaComponent implements OnInit {

  @Input()servicio: GenericServiceService<any>;
  @Input()fields!: Field[];
  @Input()tablaHead: String[]
  @Input()editable: Boolean;
  @Input()entidad:String;
  @Input() path:String = '';
  dataSource: any[];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.findAllAll();
  }

  findAllAll(): void{
    this.servicio.findAll().subscribe(
      response => {
        JSON.stringify(this.fields);
        JSON.stringify(response);
        this.dataSource= response as any[];
        console.log(this.dataSource);
      },
      err =>{
        console.log("Error al mostrar"+ err)
      }
    )
  }

  goToForm(_data: any){
    this.router.navigate(['/' + this.path, _data.id]);
  }
  delete(){};

}
