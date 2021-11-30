import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blog1Component } from './pages/blog1/blog1.component';

const routes: Routes = [
  {

    path: '',

    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)

  },
  {
    path:'blog1',
    loadChildren:()=> import('./pages/blog1/blog1.module').then(m => m.Blog1Module)
  },
  
  { path: 'blogdetails', loadChildren: () => import('./pages/blogdetails/blogdetails.module').then(m => m.BlogdetailsModule) },
  { path: 'addblogs', loadChildren: () => import('./pages/addblogs/addblogs.module').then(m => m.AddblogsModule) },
  { path: 'updateblogs', loadChildren: () => import('./pages/addblogs/addblogs.module').then(m => m.AddblogsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
