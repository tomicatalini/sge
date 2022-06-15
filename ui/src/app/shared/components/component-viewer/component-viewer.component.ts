import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.component.html',
  styleUrls: ['./component-viewer.component.css']
})
export class ComponentViewerComponent implements OnInit {

  @Input() model: string = 'Persona';
  list = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.list){
      this.list = false;
    } else {
      this.list = true;
    }
    console.log(this.list);
  }
}
