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
  replaceurl: any;
  uid:any
  updatedetails:any

  constructor(private http: GetservicesService, private router: Router, private location: Location) { }
  
  ngOnInit(): void {
   
    this.url = this.router.url
    this.replaceurl = this.url.replace("/blogdetails", "");
   
    this.http.blogarray.forEach((value: any) => {
      var blogurl1 = value.url
    
      if (blogurl1 == this.replaceurl) {

        this.blogdetails = value

        console.log("hXHCljah")
      }
    });

    
  }
  
  



/*--------------deleting the blog ----------------------*/

  delete() {
    this.http.blogarray.forEach((value: any,index:any) => {

      
      
      var blogurl1 = value.url
      if (blogurl1 == this.replaceurl) {
        this.blogdetails = index
      }
    });
    this.http.blogarray.splice(this.blogdetails,1)
  localStorage.setItem('setblog',JSON.stringify(this.http.blogarray))
    this.location.back();
  }

/*-----------------editing the blog-------------*/
  edit(){
    this.http.blogarray.forEach((updatevalue:any,index:any)=>{
      this.updatedetails=updatevalue;
      if(this.blogdetails==this.updatedetails){
       
        this.uid=index;
      
        this.http.editF(this.updatedetails,index);
        this.router.navigateByUrl('updateblogs');
      }
    });
   }
  

}

