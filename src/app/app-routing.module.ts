import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Dashboard/dashboard-component';
import { LoginComponent } from './Login-Details/login-component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import{ SignupComponent } from './Signup Form/signup-form';

const routes: Routes = [

  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LoginComponent},
  {path:'loginPage',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


