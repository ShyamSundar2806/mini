import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
blogs:any;
blog:any;
id:any;
blogdetails:any;
b:any;
  constructor(private http:ApiservicesService,private router:ActivatedRoute) { }
  ngOnInit(): void {
    
    
    this.id=this.router.snapshot.params['id'];
    this.blogdetails=this.http.method(this.id)
    // this.b=JSON.stringify(this.blogdetails)
    // console.log(this.b)
    }
  }


