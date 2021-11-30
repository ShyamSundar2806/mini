import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GetservicesService } from 'src/app/services/getservices.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  id: any;
  blogdetails: any;
  url: any;
  u: any;
  edit1:any;

  constructor(private http: GetservicesService, private router: Router, private location: Location) { }
  ngOnInit(): void {
    // console.log("g",this.r.url)

    // console.log(this.r.url)
    this.url = this.router.url
    this.u = this.url.replace("/blogdetails", "");
    //  console.log("hu",this.u)
    this.http.blogarray.forEach((value: any) => {
      var blogurl1 = value.url
      // console.log("he",blogurl1);

      // console.log("url",this.u);

      if (blogurl1 == this.u) {

        this.blogdetails = value

        console.log("hXHCljah")
      }
    });


    
    
  }
  

  // edit(index:any){
  //   // this.http.edit(this.url)
  //   alert("hi")
  //   this.router.navigateByUrl("updateblogs")  
  //   this.http.editF(index);
  // }



  delete() {
    this.http.blogarray.forEach((value: any,index:any) => {

      console.log("i",index);
      
      var blogurl1 = value.url
      if (blogurl1 == this.u) {
        this.blogdetails = index
      }
    });
    this.http.blogarray.splice(this.blogdetails,1)
  localStorage.setItem('setblog',JSON.stringify(this.http.blogarray))
    this.location.back();
  }



  
edit(blogdetails:any){
  this.u=this.u.split('/');
  this.u=this.u[2];
  this.u=this.u.split('-');
  this.u=this.u[1]
  console.log("u",this.u);
  
  console.log("edit",blogdetails)

  this.router.navigateByUrl("updateblogs")
  this.http.editF(blogdetails,this.u)
  

}

}

