import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldComponent } from './shared/components/field/field.component';
import { FormComponent } from './shared/components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './shared/components/table/table.component';
import { TablaComponent } from './core/components/tabla-Persona/tabla.component';
import { HttpClientModule } from '@angular/common/http';

//Componentes Angular Material
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { PersonaService } from './core/services/persona.service';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PersonaDialogComponent } from './core/components/persona-dialog/persona-dialog/persona-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './shared/components/dialog/dialog/dialog.component';



//import { DialogComponent } from './core/components/persona/dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    FormComponent,
    TableComponent,
    TablaComponent,
    PersonaDialogComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule,
    HttpClientModule,
    MatTableModule,MatDialogModule,MatIconModule,MatCardModule, MatButtonModule,
    MatDatepickerModule,MatNativeDateModule,
    MatCheckboxModule

  ],
  providers: [PersonaService],
  entryComponents:[TablaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
