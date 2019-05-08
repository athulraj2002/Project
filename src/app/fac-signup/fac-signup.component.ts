import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators,ReactiveFormsModule,FormBuilder } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthService} from '../home/auth.service';


@Component({
  selector: 'app-fac-signup',
  templateUrl: './fac-signup.component.html',
  styleUrls: ['./fac-signup.component.scss']
})
export class FacSignupComponent implements OnInit {

   hide = true;
   facsignup:FormGroup;
   message;
   errCheck;

  constructor(private _formBuilder: FormBuilder,private authService:AuthService) { }

  ngOnInit() {

    this.authService.Error.subscribe(message => this.message = message);

    this.facsignup = this._formBuilder.group({
      facId:['',Validators.required],
      facname:['',Validators.required],
      facemail:['',[Validators.email,Validators.required]],
      facpaswd:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  facSignup(){
      let facData=this.facsignup.value;
      this.authService.signupUserFaculty(facData.facname,facData.facId,facData.facemail,facData.facpaswd);
    //  if(this.message=='ok') this.errCheck=1;
    //  else this.errCheck=0;
    

  }

}
