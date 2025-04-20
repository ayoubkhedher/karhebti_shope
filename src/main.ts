import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CarPartsComponent } from './app/car-parts/car-parts.component';
import { HomeComponent } from './app/home/home.component';
import { CategoryPartsComponent } from './app/category-parts/category-parts.component';
import { PanierComponent } from './app/panier/panier.component';
import { CompteComponent } from './app/compte/compte.component';
import { PiecesComponent } from './app/pieces/pieces.component';
import { CommandeComponent } from './app/commande/commande.component';
import { UserProfileComponent } from './app/user-profile/user-profile.component';
import { AdminComponent } from './app/admin/admin/admin.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'categories', component: CarPartsComponent },
  { path: 'panier/:id', component: PanierComponent },
  { path: 'category/:name', component: CategoryPartsComponent },
  { path: 'compte', component: CompteComponent },
  { path: 'pieces', component: PiecesComponent },
  { path: 'Commande', component: CommandeComponent},
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'admin', component: AdminComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));




