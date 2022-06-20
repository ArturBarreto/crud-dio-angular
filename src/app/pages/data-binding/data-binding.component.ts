import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text = 'Grazi Alencar Lima'

  retornaNome(): string {
    return this.text;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
