import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cv } from '../models/cv';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrl: './item-cv.component.css'
})
export class ItemCvComponent {
  @Input({
    required: true,
  })
  cv: Cv | null = null;
  @Output()
  selectCv = new EventEmitter<Cv>();

  onSelectCv() {
    if (this.cv) this.selectCv.emit(this.cv);
  }
}
