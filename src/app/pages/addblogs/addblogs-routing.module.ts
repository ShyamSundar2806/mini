import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblogsComponent } from './addblogs.component';

const routes: Routes = [{ path: '', component: AddblogsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddblogsRoutingModule { }
