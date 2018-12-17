import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes,ROUTES,Router} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {CommonModule} from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import { FaqBorrowersComponent } from './faq-borrowers/faq-borrowers.component';
import { FaqLendersComponent } from './faq-lenders/faq-lenders.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { RegistrationComponent } from './registration/registration.component';

import { NgDatepickerModule } from 'ng2-datepicker';

const appRoutes: Routes = [
		
	{
		path: 'user-home',
        component: HomePageComponent,
        data: {
            title:'userhome'
        },
	
	},
    
    {
		path: 'footer',
        component: FooterComponent,
        data: {
            title:'footer'
        },
	
    },
    {
		path: 'about-us',
        component: AboutUsComponent,
        data: {
            title:'aboutus'
        },
		
    },
    {
		path: 'contact-us',
        component: ContactUsComponent,
        data: {
            title:'contactus'
        },
		
    },
    {
		path: 'careers',
        component: CareersComponent,
        data: {
            title:'careers'
        },
		 },
    {
		path: 'registration',
        component: RegistrationComponent,
        data: {
            title:'registration'
        },
     },
    {
		path: 'borrower',
        loadChildren: './borrower/borrower.module#BorrowerModule',
         },
	
	  {
		  path: '**',
          redirectTo: '/user-home',
          pathMatch: 'full'
      }
      
];

@NgModule({
	declarations: [
        HomePageComponent,
        FooterComponent,
        AboutUsComponent,
        ContactUsComponent,
        CareersComponent,
        FaqBorrowersComponent,
        FaqLendersComponent,
        TermsOfUseComponent,
        HeaderComponent,
        RegistrationComponent
		],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgDatepickerModule,
   	RouterModule.forRoot(appRoutes)
    ],
  exports: [RouterModule],
  providers: [],
  schemas: []
})

export class AppRoutingModule {
	

}