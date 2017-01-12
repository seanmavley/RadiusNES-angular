/* 

  THIS component will house all USER related functionality

  USER CRUD components will be here.
  
*/
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { HelperService } from '../../../services/helpers.service';

@Component({
  selector: 'user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user.component.css']
})

export class UserDash implements OnInit{
  constructor() { }
  ngOnInit() { }
}

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
})

export class UserList implements OnInit {
  constructor() { }
  ngOnInit() { }
}

@Component({
  selector: 'user-app',
  templateUrl: './user.component.html',
})

// USER Homepage
export class UserComponent implements OnInit {

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

// User Create Advanced Page
// This page has all the nitty gritty details required to create a User
@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
})

export class UserCreate implements OnInit {

  constructor() {}
  ngOnInit() {

  }
}

// USER Detail
@Component({
  selector: 'app-detail',
  templateUrl: './user-detail.component.html',
})

export class UserDetail implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }

  // Implement a Delete Functionality within the UserDetail too.
  // Just ask for confirmation from Javascript and delete with 
  // function here
}

// USER edit
@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
})

export class UserEdit implements OnInit {
  constructor() { }

  ngOnInit() {

  }
}
