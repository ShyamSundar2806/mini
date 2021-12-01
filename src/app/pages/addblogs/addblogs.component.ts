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
  valueobject:any;
  updateValue:any;
  


  constructor( private http:GetservicesService) { 
    
    this.updateValue=http.updatevalue

   /*---------Form Validation Condition------------------ */

    this.alldetails=new FormGroup({
      'title':new FormControl(null,Validators.required),
      'author':new FormControl(null,Validators.required),
      'description':new FormControl(null,Validators.required),
      'content':new FormControl(null,Validators.required),
      'urlToImage':new FormControl('',Validators.required),
      'url':new FormControl(null,Validators.required)
    });

    
      this.alldetails.patchValue(this.updateValue)
    
    
  }

  ngOnInit(): void {  


  }

/*---------Form  value------------*/

blogs(data:any){
  this.valueobject={
    title:data.value.title,
    author:data.value.author,
    description:data.value.description,
    content:data.value.content,
    urlToImage:data.value.urlToImage,
    url:data.value.url

  }

  this.http.addblogs(this.valueobject)
 
  
}







Reset() {
  console.log("reset",this.alldetails.value);
  this.alldetails.reset();
}
get url(){
  return this.alldetails.get('url');

}
get title() {
  return this.alldetails.get('title');
}
get author() {
  return this.alldetails.get('author');
}
get description() {
  return this.alldetails.get('description');
}
get urlToImage() {
  return this.alldetails.get('urlToImage');
}
get content(){
  return this.alldetails.get('content');
}

}
