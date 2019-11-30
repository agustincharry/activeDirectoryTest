import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestInSessionComponent } from './components/test-in-session/test-in-session.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActiveDirectoryModule } from './modules/active-directory/active-directory.module'

@NgModule({
  declarations: [
    AppComponent,
    TestInSessionComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,
    ActiveDirectoryModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
