import { Injectable } from '@angular/core';
import { ApiservicesService } from './apiservices.service';

@Injectable({
  providedIn: 'root'
})
export class GetservicesService {
blogarr:any;
blogarray:any;
b:any;
id=-1;
edit:any;

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
  console.log("in",index)
  return this.blogarray[index];
}


  


addblogs(a :any){
  if(this.id==-1){
    this.blogarray.push(a);
    alert("added")

  }
  else{
    this.blogarray[this.id]=a;
    alert("updated")
    
  }
 
  
  localStorage.setItem('setblog',JSON.stringify(this.blogarray))
  

}


editF(blogdetails:any,u:any){
  this.edit=blogdetails
  console.log("e",u);
  this.id=u;
  

}




// submitBlogEdit(a: any, blogarray: any) {

//   if (this.action == -1) {

//    this.blogarray.push(a.value)

//     localStorage.setItem("setblog", JSON.stringify(this.blogarray));

//     alert("blogadded");

//   }

//   else {
//     this.blogarray[this.action] = a.value;
//     localStorage.setItem("setblog", JSON.stringify(this.blogarray))
//     alert("Blog Edited Successfull");

//   }
// }

}




