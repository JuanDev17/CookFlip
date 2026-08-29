import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, MatAnchor, RouterLink],
  selector: 'app-form',
  styleUrl: './form.scss',
  templateUrl: './form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Form {


  signUpForm = new FormGroup({
    email: new FormControl(''),
  })

  //submit form

  // sign up with google 

}
