import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appArcEnCiel]'
})
export class ArcEnCielDirective {

  colors = [
    'red',
    'yellow',
    'blue',
    'purple',
    'green',
    'pink',
    'orange'
  ];
  @HostBinding('style.borderColor') bc : string;
  @HostBinding('style.Color') color : string;
  constructor() {
    this.color= 'orange';
    this.bc= 'purple';
   }
  @HostListener('keypress') changeColor() {
    this.bc= this.colors[Math.floor(Math.random()*(this.colors.length-1))]
    this.color= this.colors[Math.floor(Math.random()*(this.colors.length-1))]
  }
}
