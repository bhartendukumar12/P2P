import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.scss']
})
export class BorrowerComponent implements OnInit {

  constructor(private router:Router){  }

  ngOnInit() {
  }

 
}
