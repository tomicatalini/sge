import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonaService } from 'src/app/core/services/persona.service';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PersonaFormComponent>,//Estimo que entre <> se referenciaria el componente de tomas
    @Inject(MAT_DIALOG_DATA) public persona:any,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
  }

}
