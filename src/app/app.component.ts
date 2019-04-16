import { Component ,OnInit,NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'project';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBRlVym3CdFsJ5GNrcV_uLJFo-97qGwCf8",
    authDomain: "projectwebapp-94f56.firebaseapp.com",
     databaseURL: "https://projectwebapp-94f56.firebaseio.com"
    }
    );
  }
}
