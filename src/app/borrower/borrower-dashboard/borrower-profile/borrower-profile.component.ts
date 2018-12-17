import { Component, OnInit, ElementRef, ViewChild, NgZone, OnDestroy, AfterViewInit, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Commonservice } from '../../../services/Commonservice.service';
 import {countryData} from '../../../shared/countryStateData';
 import {reasonCategory} from '../../../shared/reasonCategories';
//  import { DatepickerOptions } from 'ng2-datepicker';

// var DatePickerOptions;
//  import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-borrower-profile',
  templateUrl: './borrower-profile.component.html',
  styleUrls: ['./borrower-profile.component.scss']
})

export class BorrowerProfileComponent implements OnInit {
  @ViewChild('personalDtls')

  private personalDtls: NgForm;
  
  @ViewChild('professionalDtls')
  private professionalDtls: NgForm;
  @ViewChild('uploadDocumetDtls')
  private uploadDocumetDtls: NgForm;
  showpersonalDtls: boolean = true;
  showprofessionalDtls: boolean = false;
  showUploadDocuments: boolean = false;
  showProfileCompletionMessage: boolean = false;
  pincodeApiResponse:any;
  errorMessage:any;
  maritalStatusCategories:any;
  loanReasonCategories:any;
  educationCategories:any;
  genderCategories:any;
  residenceCategories:any;
  companyCategories:any;
  designationCategories:any;
  yearOfExpCategories:any;
  public datepickerOptions:any;

  @ViewChild('curPincode') curPincode:ElementRef;

  constructor(private commonservice: Commonservice ,private countryData:countryData, private reasonCategory:reasonCategory) { }

  ngOnInit() {
   
  //   this.datepickerOptions = new DatePickerOptions({
  //     minYear: 1970,
  //     maxYear: 2030,
  //     displayFormat: 'MMM D[,] YYYY',
  //     barTitleFormat: 'MMMM YYYY',
  //     dayNamesFormat: 'dd',
  //     firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
  //     locale: frLocale,
  //     minDate: new Date(Date.now()), // Minimal selectable date
  //     maxDate: new Date(Date.now()),  // Maximal selectable date
  //     barTitleIfEmpty: 'Click to select a date',
  //     placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
  //     addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
  //     addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
  //     fieldId: 'dob', // ID to assign to the input field. Defaults to datepicker-<counter>
  //     useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
      
  // });
    console.log("this.datepickerOptions",this.datepickerOptions)

   let allCategory= this.reasonCategory.getAllCategory();
   console.log("allCategory",allCategory);

    this.maritalStatusCategories=allCategory.maritalStatusCategories;
    this.loanReasonCategories = allCategory.loanReasonCategories;
    this.educationCategories =allCategory.educationCategories;
    this.genderCategories =allCategory.genderCategories;
    this.residenceCategories=allCategory.residenceCategories;
    this.companyCategories=allCategory.companyCategories;
    this.designationCategories=allCategory.designationCategories;
    this.yearOfExpCategories=allCategory.yearOfExpCategories;

    this.pincodeApiResponse = this.commonservice.getibibo().subscribe(
			response=>{      
        console.log(" pincodeResponse",response);
			},
			error =>  this.errorMessage = <any>error); 
  }

  getPincode(e){
//console.log("e",e);
if(this.personalDtls.form.controls.curPincode.valid==true){
  console.log("length",this.personalDtls);
}
  }
  getPersonalDetails(personalDtls) {
    console.log("personalDtls", personalDtls);
    console.log("personalDtls.value", personalDtls.value);

    if (personalDtls.valid == true) {
      console.log("personalDtls", personalDtls);
      // this.createPostObject(myForm);
    }
    this.showpersonalDtls = false;
    this.showprofessionalDtls = true;
  }

  getProfessionalDetails(professionalDtls) {
    console.log("professionalDtls", professionalDtls);
    console.log("professionalDtls.value", professionalDtls.value);

    if (professionalDtls.valid == true) {
      console.log("professionalDtls", professionalDtls);
      // this.createPostObject(myForm);
    }

    this.showprofessionalDtls = false;;
    this.showUploadDocuments = true;
  }

  getUploadDocumentsDetails(uploadDocumetDtls) {
    console.log("professionalDtls", uploadDocumetDtls);
    console.log("professionalDtls.value", uploadDocumetDtls.value);

    if (uploadDocumetDtls.valid == true) {
      console.log("professionalDtls", uploadDocumetDtls);
      // this.createPostObject(myForm);
    }

    this.showUploadDocuments = false;
    this.showProfileCompletionMessage = true;
  }

}
