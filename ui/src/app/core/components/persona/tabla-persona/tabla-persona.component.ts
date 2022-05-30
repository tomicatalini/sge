import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/core/services/persona/persona.service';
import { TablaColumna, TablaTipoColumna } from 'src/app/shared/model/tablaColumna';

@Component({
  selector: 'app-tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.css']
})
export class TablaPersonaComponent implements OnInit {

  tablaColumnas: TablaColumna[]= [
    { 
      valor:"id",
      tipo: TablaTipoColumna.NUMERO
    },
    {
      valor:'nombre',
      tipo: TablaTipoColumna.TEXTO
    },
    {
      valor:'apellido',
      tipo: TablaTipoColumna.TEXTO
    },
    {
      valor:'biografia',
      tipo: TablaTipoColumna.TEXTO
    }
  ];
  //autoresList: Autor[];
  tablaHead:string[]=['id','nombre','apellido','biografia','acciones']
  editable:boolean = true;
  entidad:string="Autor"

  constructor(
    public personaService: PersonaService
  ) {
    //public dialog: MatDialog,
    
   }

  ngOnInit(): void {
  }
  
}
