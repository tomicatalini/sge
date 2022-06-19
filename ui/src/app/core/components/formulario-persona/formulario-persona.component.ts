import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic.service';
import { Persona } from '../../model/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'persona-form',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

  service: PersonaService;
  
  constructor( private personaService: PersonaService) {
    this.service = this.personaService;
  }

  ngOnInit(): void {
  }

}
