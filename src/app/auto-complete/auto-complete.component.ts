import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Cv } from '../models/cv';
import { AutoCompleteService } from '../services/auto-complete.service';
import { Router } from '@angular/router';
import { ROUTES } from '../app.routing';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrl: './auto-complete.component.css'
})
export class AutoCompleteComponent {
  searchInput=new FormControl();
  searchResults: Cv[] = [];

  constructor(private acService : AutoCompleteService,
    private readonly router: Router){
    this.searchInput.valueChanges.subscribe({
      next: (data) => {
          this.acService.getUsers(data).subscribe({
              next: (data) => {
                  this.searchResults=data;
              }
          });
      },
  });

}


afficherDetails(cv : Cv){
  this.router.navigate([ROUTES.cvdetails, cv?.id ])
}
}

