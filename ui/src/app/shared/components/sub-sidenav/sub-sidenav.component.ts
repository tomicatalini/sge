import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../menu-items/menu';

@Component({
  selector: 'app-sub-sidenav',
  templateUrl: './sub-sidenav.component.html',
  styleUrls: ['./sub-sidenav.component.css']
})
export class SubSidenavComponent implements OnInit {

  @Input() menu: Menu;

  constructor() { }
  renderComponent(a:string){
    alert('Nueva Opcion Cargada');
    console.log(a);
    // this.menu.state=
  }
  ngOnInit(): void {
  }

}
