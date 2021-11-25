import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddblogsRoutingModule } from './addblogs-routing.module';
import { AddblogsComponent } from './addblogs.component';


@NgModule({
  declarations: [
    AddblogsComponent
  ],
  imports: [
    CommonModule,
    AddblogsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddblogsModule { }
