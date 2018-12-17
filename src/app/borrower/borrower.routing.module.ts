import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes,ROUTES,Router} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {CommonModule} from '@angular/common';
import {BorrowerComponent} from './borrower.component'
import { BorrowerDashboardComponent } from './borrower-dashboard/borrower-dashboard.component';
import { BorrowerProfileComponent } from './borrower-dashboard/borrower-profile/borrower-profile.component';
import { BorrowerLoanComponent } from './borrower-dashboard/borrower-loan/borrower-loan.component';
import { BorrowerSettingsComponent } from './borrower-dashboard/borrower-settings/borrower-settings.component';
import { BorrowerReferalComponent } from './borrower-dashboard/borrower-referal/borrower-referal.component';
import { BorrowerNavigationComponent } from './borrower-dashboard/borrower-navigation/borrower-navigation.component'
import { BorrowerFaqComponent } from './borrower-dashboard/borrower-faq/borrower-faq.component';

import {DropdownModule} from 'primeng/dropdown';
import { NgDatepickerModule } from 'ng2-datepicker';
const borrowerRoutes: Routes = [
        
    {
        path:'',
        component:BorrowerComponent,
        data:{
            title:'borrower'
        },
        children:[
            
	{
		path: 'dashboard',
        component: BorrowerDashboardComponent,
        data: {
            title:'dashboard'
        },
		
	},
    
    {
		path: 'profile',
        component: BorrowerProfileComponent,
        data: {
            title:'profile'
        },
		
    },
    {
		path: 'loans',
        component: BorrowerLoanComponent,
        data: {
            title:'loans'
        },
	
    },
    {
		path: 'settings',
        component: BorrowerSettingsComponent,
        data: {
            title:'settings'
        },
		
    },
    {
		path: 'referals',
        component: BorrowerReferalComponent,
        data: {
            title:'referals'
        },
		
    },
    {
		path: 'faq',
        component: BorrowerFaqComponent,
        data: {
            title:'faq'
        },
		
    },
	  {
		  path: '**',
          redirectTo: 'dashboard',
          pathMatch: 'full'
      }
        ]
    }
      
];

@NgModule({
	declarations: [
        BorrowerComponent,
        BorrowerDashboardComponent,
      BorrowerProfileComponent,
      BorrowerLoanComponent, 
      BorrowerSettingsComponent,
      BorrowerReferalComponent,
      BorrowerFaqComponent,
      BorrowerNavigationComponent
		],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    NgDatepickerModule,
   	RouterModule.forChild(borrowerRoutes)
    ],
  exports: [RouterModule,BorrowerComponent],
  providers: [],
  schemas: []
})

export class BorrowerRoutingModule {
	

}