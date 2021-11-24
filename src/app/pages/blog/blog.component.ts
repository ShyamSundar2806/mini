import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  
  constructor(private http:ApiservicesService,private router:Router) { }
  blog:any;
  blogs:any;
  ngOnInit(): void {
  
  this.http.blogs().subscribe(data=>{

    //this.blogs=data;
    localStorage.setItem('setblog',JSON.stringify(data))
    
 })
 this.blog=localStorage.getItem('setblog');
  this.blogs=JSON.parse(this.blog)

  }
  blog1(){
    this.router.navigateByUrl('blog1')
  }
}
