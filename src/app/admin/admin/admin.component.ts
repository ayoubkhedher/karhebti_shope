
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  voitures = [
    { id: 1, nom: 'Peugeot 208' },
    { id: 2, nom: 'Renault Clio' }
  ];

  categories: string[] = ['Moteur', 'Freinage', 'Suspension'];

  nouvellePiece: {
    nom: string;
    categorie: string;
    voitureId: number | null;
    prix: number;
    stock: number;
    statut: 'En stock' | 'Hors stock';
  } = {
    nom: '',
    categorie: '',
    voitureId: null,
    prix: 0,
    stock: 0,
    statut: 'Hors stock'
  };

  pieces: {
    nom: string;
    categorie: string;
    voitureId: number | null;
    prix: number;
    stock: number;
    statut: 'En stock' | 'Hors stock';
  }[] = [];

  utilisateurs: {
    id: number;
    nom: string;
    email: string;
    role: string;
  }[] = [
    { id: 1, nom: 'Ahmed', email: 'ahmed@example.com', role: 'client' }
  ];

  commandes: {
    id: number;
    client: string;
    status: string;
  }[] = [
    { id: 1, client: 'Ahmed', status: 'En cours' }
  ];

  nouvelleRemise: {
    code: string;
    pourcentage: number;
  } = {
    code: '',
    pourcentage: 0
  };

  remises: {
    code: string;
    pourcentage: number;
  }[] = [];

  constructor() {}

  ngOnInit(): void {}

  ajouterPiece() {
    const statut = this.nouvellePiece.stock > 0 ? 'En stock' as const : 'Hors stock' as const;
    const pieceCopie = { ...this.nouvellePiece, statut };
    this.pieces.push(pieceCopie);
    this.nouvellePiece = {
      nom: '',
      categorie: '',
      voitureId: null,
      prix: 0,
      stock: 0,
      statut: 'Hors stock'
    };
  }

  modifierPiece(index: number) {
    const pieceAModifier = this.pieces[index];
    this.nouvellePiece = { ...pieceAModifier };
    this.pieces.splice(index, 1);
  }

  supprimerPiece(index: number) {
    this.pieces.splice(index, 1);
  }

  changerStatusCommande(commande: any) {
    const statuts = ['En cours', 'Expédiée', 'Annulée'];
    const index = statuts.indexOf(commande.status);
    commande.status = statuts[(index + 1) % statuts.length];
  }

  modifierUtilisateur(utilisateur: any) {
    const nom = prompt('Modifier nom :', utilisateur.nom);
    const email = prompt('Modifier email :', utilisateur.email);
    const role = prompt('Modifier rôle :', utilisateur.role);
    if (nom && email && role) {
      utilisateur.nom = nom;
      utilisateur.email = email;
      utilisateur.role = role;
    }
  }

  ajouterRemise() {
    this.remises.push({ ...this.nouvelleRemise });
    this.nouvelleRemise = { code: '', pourcentage: 0 };
  }

  supprimerRemise(remise: any) {
    this.remises = this.remises.filter(r => r !== remise);
  }

  getNomVoitureById(id: number | null): string {
    if (id === null) {
      return 'N/A';
    }
    const voiture = this.voitures.find(v => v.id === id);
    return voiture ? voiture.nom : 'Inconnue';
  }

}