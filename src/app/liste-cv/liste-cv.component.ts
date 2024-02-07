import { Component, Output, EventEmitter } from '@angular/core';
import { Cv } from '../models/cv';
import { Input } from '@angular/core';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrl: './liste-cv.component.css'
})
export class ListeCvComponent {
  @Input() cvs: Cv[] = [];
  isHidden = true;
  @Output()
  forwardCv = new EventEmitter();
  constructor() {}
  showHide() {
    this.isHidden = !this.isHidden;
  }

  onSelectCv(cv: Cv): void {
    console.log(cv);

    this.forwardCv.emit(cv);
  }
}
