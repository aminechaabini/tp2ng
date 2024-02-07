import { Component, Input } from '@angular/core';
import { Cv } from "../models/cv";
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrl: './detail-cv.component.css'
})
export class DetailCvComponent {

  constructor(private embaucheService:EmbaucheService){

  }
  @Input({
    required: true,
  })
  cv: Cv | null = null;
  embaucher(){
  this.embaucheService.embaucher(this.cv!!);
  }
}
