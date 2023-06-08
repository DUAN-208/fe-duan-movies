import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutClientComponent } from './layouts/base-layout-client/base-layout-client.component';
import { BaseLayoutAuthComponent } from './layouts/base-layout-auth/base-layout-auth.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesDetailPageComponent } from './pages/movies-detail-page/movies-detail-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { BaseLayoutAdminComponent } from './layouts/base-layout-admin/base-layout-admin.component';



const routes: Routes = [
  {path:'',component:BaseLayoutClientComponent,children:[
    {path:'',component:HomePageComponent},
    {path:'movies',component:MoviesPageComponent},
    {path:'movies/:id',component:MoviesDetailPageComponent}
  ]},
  {path:'',component:BaseLayoutAuthComponent,children:[
    {path: 'login',component:LoginPageComponent},
    {path: 'signup',component:SignupPageComponent}
  ]},
  {path:'admin',component:BaseLayoutAdminComponent,children:[
  ]},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
