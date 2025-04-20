import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-compte',
  standalone: true,
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css'],
  imports: [RouterModule,CommonModule,FormsModule]
})
export class CompteComponent {
  logout() {
    console.log("Déconnexion en cours...");
    // Ajoute ici la logique de déconnexion (ex: localStorage.clear(); router.navigate(['/']))
  }
}

