import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';

import { PersonaService } from './core/services/persona.service';
import { PersonaDialogComponent } from './core/components/persona-dialog/persona-dialog/persona-dialog.component';
import { PersonasComponent } from './core/persona/components/personas/personas.component';
import { TablaComponent } from './core/components/tabla-Persona/tabla.component';

import { FieldComponent } from './shared/components/field/field.component';
import { FormComponent } from './shared/components/form/form.component';
import { TableComponent } from './shared/components/table/table.component';
import { DialogComponent } from './shared/components/dialog/dialog/dialog.component';
import { MenuItems } from './shared/components/menu-items/menu-items';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { ComponentViewerComponent } from './shared/components/component-viewer/component-viewer.component';
import { DynamicListComponent } from './shared/components/dynamic-list/dynamic-list.component';
import { SpanishPaginationComponent } from './shared/components/spanish-pagination/spanish-pagination.component';

//import { DialogComponent } from './core/components/persona/dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    FormComponent,
    TableComponent,
    TablaComponent,
    PersonaDialogComponent,
    DialogComponent,
    SidenavComponent,
    PersonasComponent,
    ComponentViewerComponent,
    DynamicListComponent,
    SpanishPaginationComponent
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
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatPaginatorModule
  ],
  providers: [PersonaService, MenuItems],
  entryComponents:[TablaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
