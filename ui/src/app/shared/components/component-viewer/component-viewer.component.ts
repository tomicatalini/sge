import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Menu } from '../menu-items/menu';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.component.html',
  styleUrls: ['./component-viewer.component.css']
})
export class ComponentViewerComponent implements OnInit {

  @Input() entity: String;
  @Input() buttons: Menu[] = [];

  isSmallDevice: boolean = false;

  constructor(
    private responsive: BreakpointObserver,
    private dataService: DataService
  ) {}

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
    
    this.buttons = this.dataService.getPersonasButtons();
    
  }

}
