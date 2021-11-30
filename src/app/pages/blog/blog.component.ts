import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { GetservicesService } from 'src/app/services/getservices.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  
  constructor(private http:GetservicesService,private router:Router) { }
  blog:any;
  blogs:any;
  ngOnInit(): void {
    this.blogs=this.http.blogarray;  
  
    this.blogs.sort((x: any) => {

      const a = new Date(x.publishedAt)

      const b = new Date()

      return a === b ? 0 : b > a ? -1 : 1;

    })
 
    
  }
  blog1(){
    this.router.navigateByUrl('blog1')
  }
}
