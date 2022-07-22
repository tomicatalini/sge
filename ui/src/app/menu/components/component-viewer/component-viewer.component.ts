import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../interfaces/menu';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.component.html',
  styleUrls: ['./component-viewer.component.css']
})
export class ComponentViewerComponent implements OnInit {

  @Input() entity: string;
  @Input() buttons: Menu[] = [];
  pathLink:string;
  @Input() id:number =0;
  isSmallDevice: boolean = false;

  constructor(
    private responsive: BreakpointObserver,
    private dataService: DataService,
    private activatedRoute:ActivatedRoute
  ) {}  
 modifyEntity(){

  
   this.pathLink= this.dataService.getPersonasButtons(this.entity.toLowerCase(),this.id)[0].state;
   console.log(this.pathLink);
   this.activatedRoute.params.subscribe(()=>console.log(this.id));

 }

  ngOnInit(): void {
  

    this.responsive
      .observe(Breakpoints.XSmall)
        .subscribe({
          next: (res) => {
            if(res.matches){
              this.isSmallDevice = true;
            } else {
              this.isSmallDevice = false;
            }
          },
          error: (e) => {console.error('Error en breakpoint component-viewer')},
          complete: () => console.info('complete')
        });
    
    // this.buttons = this.dataService.getPersonasButtons(this.entity.toLowerCase());
  }

  
}
