import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/Services/apiservices.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  
  constructor(private http:ApiservicesService) { }
blogs:any;
title:any;
  ngOnInit(): void {
  
  this.http.blogs().subscribe(data=>{

    this.blogs=data;

    // if(this.blogs.length==0){

    //   console.log("error")

    // }
    // console.log("Data get",this.blogs);
    this.blogs.articles[0].title 
   
    // if(this.title.length<=70){
    //   console.log(this.title)
    // }
    
 })

  }
}
