import { Component, OnInit, ElementRef, ViewChild, NgZone, OnDestroy, ViewContainerRef , AfterViewInit, HostListener} from '@angular/core';
import { FormsModule, NgForm,FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router'
import {Commonservice} from '../services/Commonservice.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('myForm')
  private myForm: NgForm;
  signUpObj:any={};
  constructor(private commonservice:Commonservice , private router:Router) { }

  ngOnInit() {

  }

  signUp(myForm){
    console.log("signupform",myForm);
    if(myForm.valid==true){
      console.log("signupform",myForm);
         }
         this.createPostObject(myForm);
  }

  createPostObject(form: any){
    Object.assign(this.signUpObj, form.value);
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

    this.signUpObj.DateAppliedOn =mm + '/' + dd + '/' + yyyy; //AppConstants.AUTHORITY_DEFAULT_VALUE; // by default setting but check with vihan and set default value.
    this.signUpObj.RequestedLoanAmout = "50000";
    this.signUpObj.UserId ="ghgfh646"
  
    console.log("this.obj", this.signUpObj);
    this.commonservice.setUserDetails(this.signUpObj);
    console.log("userdetails",this.commonservice.getUserDetails());
    this.router.navigate(['borrower','loans']);
  }
}
