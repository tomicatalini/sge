import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdeRoutingModule } from './sde-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SdeRoutingModule
  ]
})
export class SdeModule { }
