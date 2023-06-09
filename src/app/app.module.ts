import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutClientComponent } from './layouts/base-layout-client/base-layout-client.component';
import { BaseLayoutAuthComponent } from './layouts/base-layout-auth/base-layout-auth.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BannerMovieComponent } from './components/banner-movie/banner-movie.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { MoviesDetailPageComponent } from './pages/movies-detail-page/movies-detail-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { BaseLayoutAdminComponent } from './layouts/base-layout-admin/base-layout-admin.component';
import { ListMoviesComponent } from './pages/admin/list-movies/list-movies.component';
import { AddMoviesPageComponent } from './pages/admin/add-movies-page/add-movies-page.component';

import { ListUserComponent } from './pages/admin/list-user/list-user.component';
import { EditMoviesPageComponent } from './pages/admin/edit-movies-page/edit-movies-page.component';
import { EditUserPageComponent } from './pages/admin/edit-user-page/edit-user-page.component';




@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutClientComponent,
    BaseLayoutAuthComponent,
    HomePageComponent,
    BannerMovieComponent,
    ListMovieComponent,
    MoviesDetailPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    NotFoundComponent,
    MoviesPageComponent,
    AdminNavComponent,
    BaseLayoutAdminComponent,
    ListMoviesComponent,
    AddMoviesPageComponent,
    ListUserComponent,
    EditMoviesPageComponent,
    EditUserPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
