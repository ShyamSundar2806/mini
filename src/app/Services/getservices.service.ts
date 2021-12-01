import { Injectable } from '@angular/core';
import { ApiservicesService } from './apiservices.service';

@Injectable({
  providedIn: 'root'
})
export class GetservicesService {

setblogarray:any;
blogarray:any;
localstorage=-1;
id:any;
alldetails:any;
updatevalue:any;



  constructor(private http:ApiservicesService) {
    this.blogarray=localStorage.getItem('setblog')
    if(!this.blogarray){
      this.setdata();
    }
 
 this.getdata();
 
  }

/*--------------------------Date Storeing in to localstorage ------------------*/

setdata(){
  this.http.blogs().subscribe(data => {
    this.setblogarray=data.articles;
    localStorage.setItem('setblog',JSON.stringify(this.setblogarray));
  
})
}

/*--------------------------Date Geting in to localstorage------------------*/

getdata(){

  this.blogarray=JSON.parse(localStorage.getItem('setblog')|| '{}');

}

/*--------------------------Getting index value------------------*/

index(index:any){
  
  return this.blogarray[index];
}


  /*--------------------------Edit Blog Function------------------*/


addblogs(value :any){

  if (this.localstorage == -1) {

    this.blogarray.push(value);
    alert("added")
    

  } else {

    this.blogarray[this.localstorage] = value;
    alert("updated")
  }
   localStorage.setItem("setblog",JSON.stringify(this.blogarray));
  }

/*--------------------------Edit Blog Function------------------*/
editF(updateblog:any,id:any){
  this.updatevalue = updateblog;
  this.id = id;
  this.localstorage = id;

}


}




