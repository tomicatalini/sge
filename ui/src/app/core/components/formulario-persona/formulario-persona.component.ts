import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { GenericService } from 'src/app/shared/services/generic.service';
import { Persona } from '../../model/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'persona-form',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioPersonaComponent implements OnInit {

  service: PersonaService;
  isSmallDevice: boolean = false;

  public grid = {
    "grid-template-areas": '"id id . ." "nom ape . ." "nac nac . ." "sexo sexo . ." "mail mail . ." "movil movil . ." "fax . . ." "tel tel . ." "tipo doc . ." "calle . calle2 ." "loc postal . ." "prov pais . ." "titulo puesto . ." "btn . . ."'
  }; 

  constructor( 
    private personaService: PersonaService,
    private responsive: BreakpointObserver,
    private dataService: DataService
    ) {
    this.service = this.personaService;
  }

  ngOnInit(): void {
    this.responsive
      .observe(Breakpoints.XSmall)
        .subscribe( result => {
            if(result.matches){
              this.isSmallDevice = true;
            } else {
              this.isSmallDevice = false;
            }
          }
      );

      
  }

  getStyle(filter: any){
    return this.dataService.getCustomGrids(filter);
  };

}
