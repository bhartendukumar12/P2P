import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class Commonservice {
  allUsers=[];
  constructor(private http: HttpClient) { }

  userDetails={};

  setUserDetails(dtls){
  this.userDetails=dtls;
  this.allUsers.push(this.userDetails);
  console.log("All Users",this.allUsers);
  }

  getUserDetails(){
    return this.userDetails;
  }

  
getibibo(){   
 
  let _url2:string='https://pincode.saratchandra.in/api/pincode/825318';
  return this.http.get(_url2);
  // .map(this.getibiboResponse)
  // .catch(this.handleError);
  
}

private handleError (error: Response | any) {
  // In a real world app, you might use a remote logging infrastructure
  console.error('Actual :', error);
  let errMsg: string;
  if (error instanceof Response) {
      const body = error.json() || '';
     // const err = body.error || JSON.stringify(body);
    //  errMsg = `${error.status}-${error.statusText || ''}-${err}`;
  } else {
      errMsg = error.message ? error.message : error.toString();
  }
  console.error('Errormessage Prepared :', errMsg);
  // return Observable.throw(errMsg);
}

private getibiboResponse(res: Response) {
  let body = res.json();
  return body || [];
}
 
  
}
