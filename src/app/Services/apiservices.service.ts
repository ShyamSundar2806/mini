import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
blogs1:any;
blogs2:any=[];
get:any;
  constructor(private http:HttpClient) {
  
   }


   /*----------feaching the values  */
  
   blogs():Observable<any>{
    return  this.http.get<any>("https://api.json-generator.com/templates/VUDUZd4V3QyJ/data?access_token=sdxv5aybndbk39af52pub0x8rlmyp6usm4glpoh2");
   }
  
  
    
}


