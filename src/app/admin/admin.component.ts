import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private Auth: AuthenticationService, private router: Router) { }

  ngOnInit() {

  }

  logout() {
    console.log('logout clicked');
    this.Auth.logout();
    this.router.navigate(['/'])
  }
}
