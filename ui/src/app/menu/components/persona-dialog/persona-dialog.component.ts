import * as core from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormService } from '../../service/form.service';
import { Field } from '../../interfaces/field';


@core.Component({
  selector: 'app-persona-dialog',
  templateUrl: './persona-dialog.component.html',
  styleUrls: ['./persona-dialog.component.css']
})
export class PersonaDialogComponent implements core.OnInit {  

  fields$: Observable< Field[] >;
   constructor(
    service: FormService,
    public dialogRef: MatDialogRef<PersonaDialogComponent>,
    @core.Inject(MAT_DIALOG_DATA)public persona:any     
  ) {    
    this.fields$ = service.getFields();
    console.log("Prueba de Datos enviados desde la tabla"+ persona.biografia);
  }

  //save(){
  //  this.personaService.save(this.persona).subscribe(response =>{
  //    console.log("se modifico la persona: " + response)
  //  },
  //  err=>{
  //    console.log("Error al modificar: " + err)
  //  }
  //  );
  //}
  //cancel(){
  //  this.dialogRef.close();
  //}

  ngOnInit(): void {
  }

}