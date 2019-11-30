import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestInSessionService {

  constructor(private http: HttpClient) { }

  send() {
    return this.http.get('http://localhost:3000/');
  }
}
