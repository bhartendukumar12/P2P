import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  signUpPopup:boolean=false;
  constructor(private router:Router){  }

  ngOnInit() {
  }

  gotoRegistration(){
    this.router.navigate(['registration']);
  }
 
  openSignUpPopup(){
    this.signUpPopup=true;
  }

}
