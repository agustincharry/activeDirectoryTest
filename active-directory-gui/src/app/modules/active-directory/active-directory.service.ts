import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AdalService } from 'adal-angular4';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActiveDirectoryService {

  private ObservableIsLoadedModule = new Subject<Boolean>();
  constructor(private adalService: AdalService) { }

  /**
   * Used to load AdalModule
   */
  loadAdalModule() {
    this.adalService.init(environment.config);
    this.adalService.handleWindowCallback();
    this.setIsloadedModule(true);
  }

  /**
   * Used to set/launch the notification when AdalModule is correctly loaded
   * @param loaded 
   */
  setIsloadedModule(loaded: Boolean){
    this.ObservableIsLoadedModule.next(loaded);
  }

  /**
   * Event used to know when AdalModule is correctly loaded
   */
  onLoadedModule(): Observable<Boolean> {
    return this.ObservableIsLoadedModule.asObservable();
  }

  /**
   * Used to know if user is authenticated
   */
  getIsAuthenticated(): Boolean {
    return this.adalService.userInfo.authenticated;
  }

  /**
   * Used to get the user in session information
   */
  getUserInfo() {
    return this.adalService.userInfo;
  }

}
