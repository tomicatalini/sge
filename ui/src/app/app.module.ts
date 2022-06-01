import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldComponent } from './shared/components/field/field.component';
import { FormComponent } from './shared/components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

import {MatIconModule} from '@angular/material/icon'; 

import {MatCheckboxModule} from '@angular/material/checkbox';
import { TablaPersonaComponent } from './core/components/persona/tabla/tabla-persona/tabla-persona.component'; 
import { TableComponent } from './shared/components/table/table/table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PersonaService } from './core/services/persona.service';



@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    FormComponent,
    TableComponent,
    TablaPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule,
    BrowserModule,
    FormsModule,
    // FontAwesomeModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule   
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},PersonaService],
  entryComponents:[TablaPersonaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
