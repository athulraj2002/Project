import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TaketestComponent} from './dashboard/taketest/taketest.component';
import {FormsComponent} from './dashboard/forms/forms.component';
import {ResultViewComponent} from './dashboard/result-view/result-view.component';
import {HomepageComponent} from './dashboard/homepage/homepage.component';
import {AuthGuard} from './home/auth-guard.service';
import {FacultyComponent} from './faculty/faculty.component';
import {FacHomeComponent} from './faculty/fac-home/fac-home.component';


const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path: 'faculty',component:FacultyComponent, children:[
    {path:'',redirectTo:'fac-home',pathMatch:'full'},
    {path:'fac-home',component:FacHomeComponent},
  ]},
  {path:'dashboard',component:DashboardComponent,  children:[
      {path:'forms',component:FormsComponent},
      {path:'',redirectTo:'homepage',pathMatch:'full',canActivate:[AuthGuard]},
      {path:'homepage',component:HomepageComponent,canActivate:[AuthGuard]},
      {path:'taketest',component:TaketestComponent,canActivate:[AuthGuard]},
      {path:'result-view',component:ResultViewComponent,canActivate:[AuthGuard]},

    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
