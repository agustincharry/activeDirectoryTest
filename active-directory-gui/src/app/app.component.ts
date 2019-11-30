import { Component } from '@angular/core';
import { ActiveDirectoryService } from './modules/active-directory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private activeDirectoryService:ActiveDirectoryService) { }
  
  ngOnInit() {
    this.activeDirectoryService.loadAdalModule();
  }

}
