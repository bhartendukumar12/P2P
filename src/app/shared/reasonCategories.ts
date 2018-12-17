import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class reasonCategory {
  
    maritalStatusCategories = [
        {label:'Married', value: 'Married'},
        {label:'UnMarried', value: 'UnMarried'}
    ];
   

    loanReasonCategories = [
        {label:'Credit card refinancing ',  value:{name: 'Credit card refinancing', worthinessValue: '90'}},
        {label:'Debt Consolidation',  value:{name: 'Debt Consolidation', worthinessValue: '80'}},
        {label:'Home improvement',  value:{name: 'Home improvement', worthinessValue: '70'}},
        {label:'Relocation',  value:{name: 'Relocation', worthinessValue: '60'} },
        {label:'Medical expense',  value:{name: 'Home improvement', worthinessValue: '50'}},
        {label:'Wedding',  value:{name: 'Medical expense', worthinessValue: '40'} },
        {label:'Vacation',  value:{name: 'Wedding', worthinessValue: '30'}},
        {label:'High value purchase',  value:{name: 'Vacation', worthinessValue: '20'}},
        {label:'Others',  value:{name: 'Others', worthinessValue: '10'}}
    ];

    educationCategories = [
        {label:'Postgraduate',  value:{name: 'Postgraduate', worthinessValue: '90'} },
        {label:'Graduate',  value:{name: 'Graduate', worthinessValue: '80'} },
        {label:'Diploma',  value:{name: 'Diploma', worthinessValue: '70'} },
        {label:'High school',  value:{name: 'High school', worthinessValue: '50'}},
        {label:'Senior secondary',  value:{name: 'Senior secondary', worthinessValue: '60'} },
        {label:'Uneducated',  value:{name: 'Uneducated', worthinessValue: '90'}},
        {label:'Others',  value:{name: 'Others', worthinessValue: '10'}}
      ];

      genderCategories = [
        {label:'Male', value: 'Male'},
        {label:'Female', value: 'Female'},
        {label:'Others', value: 'Others'}
      ];

      residenceCategories=[
        {label:'Rented with family',  value:{name: 'Rented with family', worthinessValue: '90'} },
        {label:'Own flat',  value:{name: 'Own flat', worthinessValue: '40'} },
        {label:'Own House',  value:{name: 'Own House', worthinessValue: '80'} },
        {label:'Rented with friends',  value:{name: 'Rented with friends', worthinessValue: '90'}},
        {label:'PG',  value:{name: 'PG', worthinessValue: '70'}},
        {label:'Hostel',  value:{name: 'Hostel', worthinessValue: '50'}},
        {label:'Others',  value:{name: 'Others', worthinessValue: '30'}}
      ];

      companyCategories=[
        {label:'Pvt Ltd',  value:{name: 'Pvt Ltd', worthinessValue: '70'}},
        {label:'Public Ltd',  value:{name: 'Public Ltd', worthinessValue: '90'}},
        {label:'Self employed',  value:{name: 'Self employed', worthinessValue: '80'}},
        {label:'Others',  value:{name: 'Others', worthinessValue: '60'}}
      ];

      designationCategories=[
        {label:'C-suite',  value:{name: 'C-suite', worthinessValue: '80'}},
        {label:'Manager',  value:{name: 'Manager', worthinessValue: '60'}},
        {label:'Analyst',  value:{name: 'Analyst', worthinessValue: '40'}},
        {label:'Engineer',  value:{name: 'Engineer', worthinessValue: '90'}},
        {label:'Product head',  value:{name: 'Product head', worthinessValue: '80'}},
        {label:'Others',  value:{name: 'Others', worthinessValue: '80'}}
    ];

    yearOfExpCategories=[
        {label:'1-2',  value:{name: '1-2', worthinessValue: '80'}},
        {label:'2-3',  value:{name: '2-3', worthinessValue: '70'}},
        {label:'3-4',  value:{name: '3-4', worthinessValue: '60'}},
        {label:'4-5',  value:{name: '4-5', worthinessValue: '50'}},
        {label:'5-6',  value:{name: '5-6', worthinessValue: '40'}},
        {label:'6-7',  value:{name: '6-7', worthinessValue: '30'}},
        {label:'7-8',  value:{name: '7-8', worthinessValue: '20'}},
        {label:'8-9',  value:{name: '8-9', worthinessValue: '10'}},
        {label:'9-10',  value:{name: '9-10', worthinessValue: '90'}},
    ];

    allCategory={
       "loanReasonCategories": this.loanReasonCategories,
       "maritalStatusCategories":this.maritalStatusCategories,
       "educationCategories":this.educationCategories,
       "genderCategories":this.genderCategories,
       "residenceCategories":this.residenceCategories,
       "companyCategories":this.companyCategories,
       "designationCategories":this.designationCategories,
       "yearOfExpCategories":this.yearOfExpCategories
    };
   
   

    getAllCategory(){
          return (this.allCategory);
    }
}
