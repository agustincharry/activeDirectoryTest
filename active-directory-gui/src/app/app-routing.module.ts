import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestInSessionComponent } from './components/test-in-session/test-in-session.component';
import { AdalGuard } from './modules/active-directory';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'testInSession', component: TestInSessionComponent, canActivate: [AdalGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
