import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-borrower-loan',
  templateUrl: './borrower-loan.component.html',
  styleUrls: ['./borrower-loan.component.scss']
})
export class BorrowerLoanComponent implements OnInit {

  constructor(private router:Router){  }

  ngOnInit() {
    console.log("Loan Loaded")
  }
  completeApplication(){
    this.router.navigate(['borrower','profile']);
  }
}