import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  @Input() btnText: string = 'Clique Aqui';
  @Input() btnType: string = ''; 
  @Output() clickChildren = new EventEmitter;
  textFilho = 'clicou no filho';

  constructor() { }

  ngOnInit(): void {
  }

  clicou(): void {
    this.clickChildren.emit(this.textFilho);
    console.log(this.textFilho);
  }

}
