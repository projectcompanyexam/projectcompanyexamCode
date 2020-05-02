import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { 
    path: "", 
    component: UserComponent, 
    pathMatch: "full" 
  }, 
  { path: 'user', component: UserComponent },
  // { path: 'userdetails', component: UserDetailsComponent }
  { path: 'userdetails/:strName/:dtrDateSumbit/:strEmail/:strCountry/:strAddress', component: UserDetailsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
