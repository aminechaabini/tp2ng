import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrl: './mini-word.component.css'
})
export class MiniWordComponent {
  color: String= 'red';
  size: number = 10;
  font: String = 'arial';
}

