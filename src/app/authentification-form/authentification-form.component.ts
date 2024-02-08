import { Component } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authentification-form',
  templateUrl: './authentification-form.component.html',
  styleUrl: './authentification-form.component.css'
})
export class AuthentificationFormComponent {

  constructor(private authService : AuthentificationService)
  {}

  login(form : NgForm){
    this.authService.login(form.value).subscribe(
      (res) => {
        const token = res.id;
        localStorage.setItem('token', token)
      }
    );
  }

}
