import { Component } from '@angular/core';
import { Cv } from '../models/cv'
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  cvs: Cv[]= [];
  constructor(
    private cvService: CvServiceService
  ){
    this.cvService.getCvs().subscribe(
      (cvs) => {
        this.cvs = cvs;
      },
      (error) =>{
        alert('Probleme dans l acces a l api')
        this.cvService.getLocalCvs();
      }

    );
  }

  selectedCv: Cv | null = null;

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    console.log(cv);
  }
}
