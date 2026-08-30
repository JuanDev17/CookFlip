import { Component } from '@angular/core';
import { LoginForm } from '../../components/login/login';
import { Navigation } from '../../components/navigation/navigation';

@Component({
  imports: [LoginForm, Navigation],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {}
