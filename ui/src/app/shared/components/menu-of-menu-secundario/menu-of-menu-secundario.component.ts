import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu-items/menu';

@Component({
  selector: 'app-menu-of-menu-secundario',
  templateUrl: './menu-of-menu-secundario.component.html',
  styleUrls: ['./menu-of-menu-secundario.component.css']
})
export class MenuOfMenuSecundarioComponent implements OnInit {
  @Input() boton:Menu;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.boton);

}
}
