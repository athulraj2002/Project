import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormControl, Validators,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as $ from 'jquery';

import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { ParticlesComponent } from './particles/particles.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './dashboard/forms/forms.component';
import { ResultViewComponent } from './dashboard/result-view/result-view.component';
import { DashNavComponent } from './dashboard/dash-nav/dash-nav.component';
import { HomeComponent } from './home/home.component';
import { TaketestComponent } from './dashboard/taketest/taketest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './dashboard/homepage/homepage.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
   import { ChartsModule } from 'ng2-charts';
   import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    ParticlesComponent,
    LoginComponent,
    DashboardComponent,
    FormsComponent,
    ResultViewComponent,
    DashNavComponent,
    HomeComponent,
    TaketestComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MatStepperModule,
        MatInputModule,
        MatButtonModule,
        MatAutocompleteModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatTableModule,
        ChartsModule,
        MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
