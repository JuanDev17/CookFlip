import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  selector: 'app-login-form',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class LoginForm {

   loginForm = new FormGroup({
    email: new FormControl(''),
  })

}
