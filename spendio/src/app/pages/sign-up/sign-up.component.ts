import { UserService } from './../../service/user/user.service';
import { user } from './../../../model/user.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {


  userForm: FormGroup

  constructor(
    private userService: UserService,
    formBuilder: FormBuilder
  ){

    this.userForm = formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    })

  }


  onSubmit(){

    const user = this.userForm.value;

    this.userService.addUser(user).subscribe( res => {
      console.log(res);

    })

  }


}
