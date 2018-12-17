import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {HttpModule} from '@angular/http';
import {Commonservice} from '././services/Commonservice.service';
import {countryData} from '././shared/countryStateData';
import {reasonCategory} from '././shared/reasonCategories';
import {InputFocusedDirective} from '././shared/inputLengthDirective';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    InputFocusedDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Commonservice,countryData,reasonCategory],
  bootstrap: [AppComponent]
})
export class AppModule { }
