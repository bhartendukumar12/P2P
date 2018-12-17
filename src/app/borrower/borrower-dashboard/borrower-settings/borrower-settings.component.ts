import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrower-settings',
  templateUrl: './borrower-settings.component.html',
  styleUrls: ['./borrower-settings.component.scss']
})
export class BorrowerSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    console.log("BorrowerProfileComponent Loaded")
  }

}
