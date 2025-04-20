import { Routes } from '@angular/router';
import { PiecesComponent } from './pieces/pieces.component';
import { CommandeComponent } from './commande/commande.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminComponent } from './admin/admin/admin.component';

export const routes: Routes = [
  { path: 'pièces', component: PiecesComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'admin', component: AdminComponent },
  
];




