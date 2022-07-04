import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Menu } from '../menu-items/menu';
import { MenuItems } from '../menu-items/menu-items';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {

  // arrayEntities:String[]=['Persona','Domicilio','Localidaes'];  
  mobileQuery: MediaQueryList;

  fillerNav: Menu[];
  variableMenu:string= '';
  variableSidenav:string= '';
  arrayOptions:Object[];
  menu:Menu;
  private _mobileQueryListener: () => void;

  modifySidenav(menu:Menu){
    this.menu=menu;
    this.variableMenu= menu.name;
    this.variableSidenav= menu.name.toLocaleLowerCase();
    // this.arrayOptions=menu.options;
    
}
  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private menuItems: MenuItems) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.fillerNav = menuItems.getMenuItem();
    this.modifySidenav(this.fillerNav[0]);
    // this.arrayOptions(this.fillerNav[0].options);
    console.log( this.menu.options);
    console.log(this.variableMenu);
  
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
