import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../../model/Field';
import { TypeOfField} from '../../model/TypeOfField';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormBuilder, FormGroup} from '@angular/forms';




export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() value:string |number| undefined;
  @Input() type:TypeOfField | undefined;
  @Input() label:string |undefined;
  @Input()entity:string |undefined;
  @Input()property:string |undefined;
  @Input()required:undefined | boolean; 
  @Input()readonly:undefined | boolean;
  @Input() order?:undefined | number;
  @Input()group?:undefined | string; 
  @Input()format ?: {key: string, value: Object}[] ;
  @Input()options?: {key: string, value: Object}[];  
  @Input()cantColumnas?:any ;
  @Input()cantFilas?:any ;
  @Input()minFecha?:any ;
  @Input()maxFecha?:any ;
  @Input()minL?:any;
  @Input()maxL?:any;
  @Input()checked?:boolean|undefined ;
  @Input()cantDecimal?:number|undefined;
  @Input()disabled?:boolean;
  @Input()op:number[]=[1,2,3,4,5,6,7];
  @Input()check!:boolean;


  public inputControl!: FormControl;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  // toppings: FormGroup;
  constructor() { }
  // constructor(fb: FormBuilder) {
  //   this.toppings = fb.group({
  //     controlCheckForm: true
  
  //   });
  // }
  ngOnInit(): void {
    this.inputControl = new FormControl();
  
  
  }

}
