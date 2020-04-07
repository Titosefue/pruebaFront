import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NewUserLabel } from './newUser.label';

@Component({
  selector: 'app-newUser',
  templateUrl: './newUser.component.html',
  styleUrls: ['./newUser.component.css']
})
export class NewUserComponent implements OnInit {

  @Output() flagModal = new EventEmitter();

  public label: Object;

  constructor() {
    this.label = NewUserLabel;
   }

  ngOnInit() {
  }

  public cancelar(): void{
    this.flagModal.emit(false);
  }

}
