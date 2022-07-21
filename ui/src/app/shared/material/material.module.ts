import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { TablaGenericaComponent } from '../table/tablaGenerica/tablaGenerica/tablaGenerica.component';


@NgModule({
  declarations: [
    TablaGenericaComponent//->Esto impide que declaremos el componente en otro module... restringiendo el uso de los modulos a los que estan aca abajo
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule
  ],
})
export class MaterialModule { }
