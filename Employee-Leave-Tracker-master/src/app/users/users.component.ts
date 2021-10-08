import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
userinfo:any[];
  constructor() { }

  ngOnInit() {
    this.userinfo=JSON.parse(localStorage.getItem("empData"));
  }

}
