import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text = 'Grazi Alencar Lima';
  image = 'https://picsum.photos/300/300';
  buttonText = 'Clique aqui';
  textRed = false;
  bgColor = 'green';
  fontSize = '20px';
  textInput = '';

  retornaNome(): string {
    return this.text;
  }

  clicou(value:string): void {
    console.log("CLicou! ", value);
    this.text = value;
    this.textRed = true;
  }

  clicouNoFilho(text:any): void {
    console.log(text)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
