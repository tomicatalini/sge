import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {  MatTableModule } from '@angular/material/table';
import { TablaGenericaComponent } from './table/tablaGenerica/tablaGenerica/tablaGenerica.component';
//import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    //tablaGenericaComponent ->No puedo agregar en dos lugares
  ],
  imports: [
    //MaterialModule,->no funciona...
    CommonModule,
    SharedRoutingModule,


  ]
})
export class SharedModule { }
