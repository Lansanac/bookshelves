import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{6,}")]]
    });
  }

  onSubmit(){
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    this.authService.creatNewUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
