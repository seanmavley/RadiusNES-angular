import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    console.log(this.model);
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(result => {
        if(result === true) {
          this.router.navigate(['/admin']);
        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      });
  }
}

