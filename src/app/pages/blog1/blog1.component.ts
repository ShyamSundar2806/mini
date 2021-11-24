import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit {
blog:any=[];
blogs:any=[];

b:any
  constructor(private http:ApiservicesService,private router:Router) {
  }


  // readdetails(){
  //   this.router.navigateByUrl('blogdetails')
   
  // }
  ngOnInit(): void {
    
    // this.http.blogs().subscribe(data=>{
      
      // this.blogs=data;
      
      
      this.blog=localStorage.getItem('setblog');
      this.blogs=JSON.parse(this.blog) 
    
    //  for(let i=0;this.b.length>this.i;this.i++){
    //    console.log(this.b)
    //  }
    }
    
 }
  
