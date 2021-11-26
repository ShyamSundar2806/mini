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

id:any;
blogdetails:any;

  constructor(private http:GetservicesService,private r:Router,private router:ActivatedRoute,private location:Location) { }
  ngOnInit(): void {
    console.log("g",this.r.url)
    
    // const Timer:any=setTimeout(function(){
      
    // },3000);
    this.id=this.router.snapshot.params['id'];
    this.blogdetails=this.http.index(this.id)
    console.log("f",this.blogdetails)
    // this.b=JSON.parse(this.blogdetails)
    // console.log(this.b)


    }
    delete(){
      this.http.delete(this.id)
      this.location.back();
    }
  }


