import { Component } from '@angular/core';
import { Cv } from '../models/cv';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrl: './embauche.component.css'
})
export class EmbaucheComponent {
  cvs : Cv[];

  constructor(private embaucheService: EmbaucheService){
    this.cvs=this.embaucheService.getEmbauches();
  }

}
