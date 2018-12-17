import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-borrower-navigation',
  templateUrl: './borrower-navigation.component.html',
  styleUrls: ['./borrower-navigation.component.scss']
})
export class BorrowerNavigationComponent implements OnInit {

  constructor(private router:Router){  }

  ngOnInit() {
    console.log("BorrowerNavigationComponent Loaded")
  }
  goToLoan(){
    this.router.navigate(['borrower','loans']);
  }

  goToProfile(){
    this.router.navigate(['borrower','profile']);
  }

  goToSettings(){
    this.router.navigate(['borrower','settings']);
  }

  goToReferals(){
    this.router.navigate(['borrower','referals']);
  }

  goToFaq(){
    this.router.navigate(['borrower','faq']);
  }
}
