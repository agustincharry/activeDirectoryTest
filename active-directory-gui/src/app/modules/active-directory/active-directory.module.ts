import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdalService, AdalGuard } from 'adal-angular4';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdalInterceptor, ActiveDirectoryComponent } from './'

@NgModule({
  declarations: [
    ActiveDirectoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActiveDirectoryComponent
  ],
  providers: [AdalService, AdalGuard, {provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true }],
})
export class ActiveDirectoryModule { }
