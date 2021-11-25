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
  
    
  //   this.blogs1=localStorage.getItem('setblog');
  //   this.blogs2=JSON.parse(this.blogs1)
    
  //   this.blogs().subscribe(data=>{
  //     this.get=data.articles
  //     localStorage.setItem('setblog',JSON.stringify(this.get))
      
  //  })
   }
  
   blogs():Observable<any>{
    return  this.http.get<any>("https://api.json-generator.com/templates/VUDUZd4V3QyJ/data?access_token=sdxv5aybndbk39af52pub0x8rlmyp6usm4glpoh2");
   }
  
  //  method(index:any){
   
  //   console.log(index)
  //   console.log("fgbhgvfcd",this.blogs2[index])
  //   return this.blogs2[index];
    
    
  //   }


    
}


