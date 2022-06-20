import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  constructor( 
    private personaService: PersonaService,
    private responsive: BreakpointObserver
    ) {
    this.service = this.personaService;
  }

  ngOnInit(): void {
    this.responsive
      .observe(Breakpoints.XSmall)
        .subscribe( result => {
            if(result.matches){
              console.log('Device Match');
              console.log(result);
              this.isSmallDevice = true;
            } else {
              this.isSmallDevice = false;
            }
          }
          );
  }

}
