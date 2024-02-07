import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { FormsModule } from '@angular/forms';
import { ArcEnCielDirective } from './directive/arc-en-ciel.directive';
import { ArcEnCielComponent } from './arc-en-ciel/arc-en-ciel.component';
import { CvComponent } from './cv/cv.component';
import { ListeCvComponent } from './liste-cv/liste-cv.component';
import { ItemCvComponent } from './item-cv/item-cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MiniWordComponent,
    ArcEnCielDirective,
    ArcEnCielComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    EmbaucheComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
