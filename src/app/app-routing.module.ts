import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Dashboard/dashboard-component';
import { ReactiveDemoApproach } from './Reactive form/reactive-from-approach';

const routes: Routes = [

  {path:'dashboard',component:DashBoardComponent},
  {path:'reactive',component:ReactiveDemoApproach}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
