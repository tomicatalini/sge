import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/shared/generic.service';
import { Field } from 'src/app/shared/model/Field';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  @Input()fields$: Observable< Field[] >;
  //@Input()fields!: Field[];
  @Input()servicio: GenericService<any>
  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public genericHelper:any
    
  ) { }

  cancel(){
    this.dialogRef.close();
  }
  save(){
    console.log("guardado");
    }
  
  ngOnInit(): void {
  }

}
