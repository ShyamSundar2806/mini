import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { GetservicesService } from 'src/app/services/getservices.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

id:any;
blogdetails:any;

  constructor(private http:GetservicesService,private router:ActivatedRoute) { }
  ngOnInit(): void {
    
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
    }
  }


