import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css'],
  imports: [RouterModule,CommonModule,FormsModule]
})
export class CommandeComponent {
  commande = {
    nom: 'AYOUB KHEDHER',
    adresse: '',
    ville: '',
    matricule: '',
    tel: '94336221',
    autreTel: '',
    vin: ''
  };

  termsAccepted = false;

  confirmerCommande() {
    if (!this.termsAccepted) {
      alert('Veuillez accepter les termes et conditions.');
      return;
    }
    alert('Commande confirmée avec succès !');
  }
}
