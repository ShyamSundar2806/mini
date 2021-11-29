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

  constructor(private http: GetservicesService, private r: Router, private router: ActivatedRoute, private location: Location) { }
  ngOnInit(): void {
    // console.log("g",this.r.url)

    // console.log(this.r.url)
    this.url = this.r.url
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
  delete() {
    this.http.delete(this.url)
    this.location.back();
  }

}

