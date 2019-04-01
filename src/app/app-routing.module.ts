import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TaketestComponent} from './dashboard/taketest/taketest.component';
import {FormsComponent} from './dashboard/forms/forms.component';
import {ResultViewComponent} from './dashboard/result-view/result-view.component';
import {HomepageComponent} from './dashboard/homepage/homepage.component';

const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,  children:[
      {path:'forms',component:FormsComponent},
      {path:'',redirectTo:'homepage',pathMatch:'full'},
      {path:'homepage',component:HomepageComponent},
      {path:'taketest',component:TaketestComponent},
      {path:'result-view',component:ResultViewComponent},
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
