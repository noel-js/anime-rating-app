import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { RateAnimeComponent } from './rate-anime/rate-anime.component';
import { AppRoutingModule } from './app-routing.module'; // Roteamento

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    RateAnimeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
