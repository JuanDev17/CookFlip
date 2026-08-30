import { Component } from '@angular/core';
import { Form } from "../../components/form/form";
import { Navigation } from '../../components/navigation/navigation';

@Component({
  imports: [Form, Navigation],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register {}
