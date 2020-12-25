import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ContactComponent } from './composants/contact/contact.component';
import { Ereur404Component } from './composants/ereur404/ereur404.component';
import { DetailmaterielComponent } from './composants/informatique/detailmateriel/detailmateriel.component';
import { ListmaterielComponent } from './composants/informatique/listmateriel/listmateriel.component';
import { MenuComponent } from './composants/menu/menu.component';

const routes: Routes = [
  {path:'accueil',component:AccueilComponent},
  {path:'detailmateriel',component:DetailmaterielComponent},
  {path:'detailmateriel/:id',component:DetailmaterielComponent},
  {path:'menu',component:MenuComponent},
  {path:'informatique',component:ListmaterielComponent},
  {path:'contact',component:ContactComponent},
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'**',component:Ereur404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
