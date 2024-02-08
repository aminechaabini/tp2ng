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
  ageThreshold : number = 40;
  seniors: Cv[]; 
  juniors: Cv[]; 
  selectedTab: string = 'above' ;
  constructor() {
    this.seniors=this.filterSeniors();
    this.juniors=this.filterJuniors();
  }
  showHide() {
    this.isHidden = !this.isHidden;
  }

  onSelectCv(cv: Cv): void {
    console.log(cv);

    this.forwardCv.emit(cv);
  }
  filterJuniors(): Cv[] {
    return this.cvs.filter(cv => cv.age >= this.ageThreshold);
  }
  filterSeniors(): Cv[] {
    return this.cvs.filter(cv => cv.age < this.ageThreshold);
  }
}
