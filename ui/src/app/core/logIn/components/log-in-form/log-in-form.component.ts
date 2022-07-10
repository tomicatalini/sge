import { Component, OnInit } from '@angular/core';
import { LogInService } from '../../service/log-in.service';

@Component({
  selector: 'log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {

  constructor(
    private logInService: LogInService
    ) { }

  ngOnInit(): void {
  }

  getFormStructure(){
    return this.logInService.getFormStructure();
  }
}
