import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-borrower-dashboard',
  templateUrl: './borrower-dashboard.component.html',
  styleUrls: ['./borrower-dashboard.component.scss']
})
export class BorrowerDashboardComponent implements OnInit {

  constructor(private router:Router){  }

  ngOnInit() {
  }

 
}
