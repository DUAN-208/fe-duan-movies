import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutClientComponent } from './layouts/base-layout-client/base-layout-client.component';
import { BaseLayoutAuthComponent } from './layouts/base-layout-auth/base-layout-auth.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BannerMovieComponent } from './components/banner-movie/banner-movie.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { MoviesDetailPageComponent } from './pages/movies-detail-page/movies-detail-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutClientComponent,
    BaseLayoutAuthComponent,
    HomePageComponent,
    BannerMovieComponent,
    ListMovieComponent,
    MoviesDetailPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
