import * as firebase from 'firebase';
import {Http} from '@angular/http';
import {Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
  token: string;
  test: string;
  userData:JSON;
  public fireAuth:firebase.auth.Auth;
 public userProfileRef:firebase.database.Reference;

 constructor(public http: Http, private router : Router ) {
   this.fireAuth = firebase.auth();
   this.userProfileRef = firebase.database().ref('/userProfile'); //linked to firebase node userProfile
   console.log('firebasel= link ok');
 }
  signupUser(name: string,admno:string, uniregno: string, email: string, password: string ): Promise<any> {
    return this.fireAuth.createUserWithEmailAndPassword(email, password).then( newUser => {
      this.userProfileRef.child(this.fireAuth.currentUser.uid).set({
        name: name,
        regno: uniregno,
        admno:admno,
        email:email,
        test:'not_taken'
      });
    })
    .catch(
        error => console.log(error)
      );
  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {

          this.userProfileRef.child(this.fireAuth.currentUser.uid).on('value', dataSnapshot => {

            this.userData = dataSnapshot.val();


  });

          this.userProfileRef.child(this.fireAuth.currentUser.uid).child('test').on('value', dataSnapshot => {

            this.test = dataSnapshot.val();
            console.log(this.test);
              if(this.test == 'not_taken')
                  this.router.navigate(['/dashboard/taketest']);
              else
                  this.router.navigate(['/dashboard']);

  });  //console.log(this.userProfileRef.child(firebase.auth().currentUser.uid));


          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
   return this.token != null;
 }
 TestTaken() {
   return this.test == 'taken' ;
 }

 getUserData(){
   return this.userData;
 }

}
