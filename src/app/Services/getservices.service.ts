import { Injectable } from '@angular/core';
import { ApiservicesService } from './apiservices.service';

@Injectable({
  providedIn: 'root'
})
export class GetservicesService {
blogarr:any;
blogarray:any;
b:any;

  constructor(private http:ApiservicesService) {
    this.blogarray=localStorage.getItem('setblog')
    if(!this.blogarray){
      this.setdata();
    }
 
 this.getdata();
 
  }

setdata(){
  this.http.blogs().subscribe(data => {
    this.blogarr=data.articles;
    localStorage.setItem('setblog',JSON.stringify(this.blogarr));
  
})
}


getdata(){
  this.blogarray=JSON.parse(localStorage.getItem('setblog')|| '{}');

}

index(index:any){
  return this.blogarray[index];
}

// array(){
//   let sumFunction = async function (this.blogarray[index]){return a + b
//   }
  


addblogs(a :any){
  // console.log(a)
  this.blogarray.push(a);
  localStorage.setItem('setblog',JSON.stringify(this.blogarray))

}
delete(index:any){
  
  this.blogarray.splice(index,1)
  localStorage.setItem('setblog',JSON.stringify(this.blogarray))
}

}
