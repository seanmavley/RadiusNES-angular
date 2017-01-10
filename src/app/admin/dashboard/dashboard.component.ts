import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  model: any = {};

  constructor(
    private users: UsersService ) { }

  ngOnInit() {
  }

  randomUsername() {
    this.model.username = this.randomize();
  }  

  randomPassword() {
    this.model.password = this.randomize();
  }

  // tuck this function somewhere nicer 
  // for reusability
  randomize() {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let length = 4;
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }

  onSubmit() {
    console.log(this.model);
    this.users.createUser(this.model)
       .subscribe((res) => {
         if (res) {
           console.log(res);
           console.log('You should redirect to recently created user page');
         } else {
           console.log(res);
           console.log('It failed, remain on page.');
         }
       })
  }

}
