import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SubSidenavComponent } from './components/sub-sidenav/sub-sidenav.component';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from './components/field/field.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { PersonaDialogComponent } from './components/persona-dialog/persona-dialog.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    SidenavComponent,
    SubSidenavComponent,
    ComponentViewerComponent,
    FieldComponent,
    FormComponent,
    TableComponent,
    PersonaDialogComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTableModule

  ]
})
export class MenuModule { }
