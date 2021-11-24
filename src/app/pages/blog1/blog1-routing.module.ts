import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blog1Component } from './blog1.component';

const routes: Routes = [
  {
    path:'',
    component:Blog1Component
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Blog1RoutingModule { }
