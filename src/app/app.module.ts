import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { CatComponent } from './components/cat/cat.component';


import {routing} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { GalleryComponent } from './components/gallery/gallery.component';
@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
