import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { GetservicesService } from 'src/app/services/getservices.service';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit {
blog:any=[];
blogs:any=[];
b:any;
  constructor(private http:GetservicesService,private router:Router) {

  }

/*-----------url passing to services----------- */
  readdetails(url:any){  
     this.router.navigateByUrl("blogdetails"+url);
  }

  ngOnInit(): void {
    

    this.blogs=this.http.blogarray;
   
    }

 
    
 }
  
