import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-active-directory',
  templateUrl: './active-directory.component.html',
  styleUrls: ['./active-directory.component.css']
})
export class ActiveDirectoryComponent implements OnInit {

  constructor(private adalService: AdalService) {
  }

  ngOnInit() {
  }

  /**
   * Used to launch the view to login
   */
  login() {
    this.adalService.login();
  }

  /**
   * Used to launch the view to logout
   */
  logout() {
    this.adalService.logOut();
  }

  /**
   * Used to know if user is authenticated
   */
  get authenticated(): boolean {
    return this.adalService.userInfo.authenticated;
  }

}
