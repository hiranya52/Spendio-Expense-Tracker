import { UserService } from './../../service/user/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-log-in',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  private userService = inject(UserService);

  loginForm: FormGroup;

  email!:string;
  password!:string;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });

  }

  onLogin() {

    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;

    this.userService.getUser(this.email).subscribe(res => {
      console.log(res);

    })


  }


}
