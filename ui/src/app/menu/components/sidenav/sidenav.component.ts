import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Menu } from '../../interfaces/menu';
import { MenuItems } from '../../service/menu-items.service';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {

  // arrayEntities:String[]=['Persona','Domicilio','Localidaes'];  
  mobileQuery: MediaQueryList;

  fillerNav: Menu[];
  menuItemsHardcore = [
    { state: 'personas', name: 'Personas', type: 'link', icon:'person',options:[{
        key: 'op1',
        value: 'Usuarios' 
      },{
        key: 'op2',
        value: 'Grupos'
      },{
        key: 'op3',
        value: 'Accesos'
      },
      {
        key: 'op4',
        value: 'Reglas'
      },
      {
        key: 'op5',
        value: 'Areas'
      },]},
    { state: 'expedientes', name: 'Expedientes', type: 'link', icon:'article',options:[{
        key: 'op1',
        value: 'Expedientes'
      },{
        key: 'op2',
        value: 'En Borrador'
      },{
        key: 'op3',
        value: 'Documentos'
      },
      {
        key: 'op4',
        value: 'Historial'
      },
      {
        key: 'op5',
        value: 'Tipos de expedientes'
      },
      {
        key: 'op6',
        value: 'Estados'
      },],
    },
    { state: 'configuracion', name: 'Configuracion', type: 'link', icon:'settings',options:[{
      key: 'op1',
      value: 'Usuarios'
    },{
      key: 'op2',
      value: 'Grupos'
    },{
      key: 'op3',
      value: 'Accesos'
    },
    {
      key: 'op4',
      value: 'Reglas'
    },
    {
      key: 'op5',
      value: 'Areas'
    },
    ],
  }   
];
  variableMenu:string;
  variableSidenav:string= '';
  arrayOptions:Object[];
  menu:Menu;
  param:any;

  private _mobileQueryListener: () => void;

  modifySidenav(menu:Menu){
    this.menu=menu;
    this.variableMenu= menu.name;
    // this.variableSidenav= menu.name.toLocaleLowerCase();
    
}
  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    // private menuItems: MenuItems
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // this.fillerNav = menuItems.getMenuItem();
    this.fillerNav = this.menuItemsHardcore;
    this.modifySidenav(this.fillerNav[0]);
    // console.log( this.menu.options);
    // console.log(this.variableMenu);
      
  }
  receiveMessage(message:string){
    this.variableMenu=message.toLocaleLowerCase().replace(/ /g,"");;
    console.log(this.variableMenu);
  }
 

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
