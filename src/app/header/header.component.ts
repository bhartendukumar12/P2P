import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  signInPopup:boolean=false;
  constructor(private router:Router){  }

  ngOnInit() {
  }

  gotoDashboard(){
    this.router.navigate(['borrower','dashboard']);
  }

  signIn(){
this.signInPopup=true;
  }
  closeSignInPopup(){
    this.signInPopup=false;
  }
  
}
