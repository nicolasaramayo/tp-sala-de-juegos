import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService ]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  async onLogin(){
    const {email, password} = this.loginForm.value;
    try {
      const user = this.authSvc.login(email,password);
      if (await user) {
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error);
    }
    
  }

}
