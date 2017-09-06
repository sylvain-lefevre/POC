import { Component, OnInit, Input } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 @Input() user: User;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {};

  connect(): void {
    this.userService.connect(this.user)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.user = new User();
    this.user.name = '';
    this.user.password = '';
  }
}




