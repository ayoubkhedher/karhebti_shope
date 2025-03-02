import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-compte',
  standalone: true,
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css'],
  imports: [RouterModule]
})
export class CompteComponent {
  logout() {
    console.log("Déconnexion en cours...");
    // Ajoute ici la logique de déconnexion (ex: localStorage.clear(); router.navigate(['/']))
  }
}

