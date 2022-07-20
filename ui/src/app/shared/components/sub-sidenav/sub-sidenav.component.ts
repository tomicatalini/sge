import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Menu } from '../menu-items/menu';

@Component({
  selector: 'app-sub-sidenav',
  templateUrl: './sub-sidenav.component.html',
  styleUrls: ['./sub-sidenav.component.css']
})
export class SubSidenavComponent implements OnInit {
  @Input() menu:Menu;
  textoEnviar:string;
  id:number=3;
  constructor() { }
  renderComponent(a:string){
    this.textoEnviar=a;
  }
  
  @Output()enviar:EventEmitter<string> = new EventEmitter<string>();
 
  sendMessage(){
    this.enviar.emit(this.textoEnviar);
  }
  ngOnInit(): void {
  }

}
