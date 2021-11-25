import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetservicesService } from 'src/app/services/getservices.service';

@Component({
  selector: 'app-addblogs',
  templateUrl: './addblogs.component.html',
  styleUrls: ['./addblogs.component.css']
})
export class AddblogsComponent implements OnInit {
  alldetails:any;
  a:any
  constructor( private http:GetservicesService) { }

  ngOnInit(): void {
    this.alldetails=new FormGroup({
      'title':new FormControl(null,Validators.required)

    });

  }
blogs(data:any){
  this.a={
    title:data.value.title
  }
  this.http.addblogs(this.a)
}
}
