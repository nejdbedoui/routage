import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ListmaterielComponent } from './composants/informatique/listmateriel/listmateriel.component';
import { MaterielComponent } from './composants/informatique/materiel/materiel.component';
import { DetailmaterielComponent } from './composants/informatique/detailmateriel/detailmateriel.component';
import { ContactComponent } from './composants/contact/contact.component';
import { MenuComponent } from './composants/menu/menu.component';
import { CommentComponent } from './composants/commentaires/comment/comment.component';
import { Ereur404Component } from './composants/ereur404/ereur404.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListmaterielComponent,
    MaterielComponent,
    DetailmaterielComponent,
    ContactComponent,
    MenuComponent,
    CommentComponent,
    Ereur404Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
