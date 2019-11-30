import { Component, OnInit } from '@angular/core';
import { TestInSessionService } from './test-in-session.service'

@Component({
  selector: 'app-test-in-session',
  templateUrl: './test-in-session.component.html',
  styleUrls: ['./test-in-session.component.css']
})
export class TestInSessionComponent implements OnInit {

  private message:string;

  constructor(private testInSessionService:TestInSessionService) { }

  ngOnInit() {
  }

  send() {
    this.testInSessionService.send().subscribe((data:any) => {
      this.message = data.message;
    }, (err:any) => {
      this.message = err.message;
    })
  }

}
