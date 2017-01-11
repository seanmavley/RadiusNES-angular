import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HelperService } from '../../services/helpers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  model: any = {};

  constructor(
    private users: UsersService, private helper: HelperService ) { }

  ngOnInit() { }

  randomUsername() {
    this.model.username = this.helper.randomize();
  }  

  randomPassword() {
    this.model.password = this.helper.randomize();
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
           console.log('Maybe relogin. Authentication has expired serverside!');
           console.log('It failed, remain on page.');
         }
       })
  }

}
