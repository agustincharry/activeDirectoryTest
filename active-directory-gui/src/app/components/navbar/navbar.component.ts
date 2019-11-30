import { Component, OnInit } from '@angular/core';
import { ActiveDirectoryService } from '../../modules/active-directory';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private authenticated: Boolean;
  constructor(private activeDirectoryService: ActiveDirectoryService) {
    this.activeDirectoryService.onLoadedModule().subscribe(() => {
      this.authenticated = this.activeDirectoryService.getIsAuthenticated();
    })
  }

  ngOnInit() {
  }

}
