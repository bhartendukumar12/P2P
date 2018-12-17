import { Component } from '@angular/core';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router'
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'P2P';
constructor(private router:Router){

}

}
