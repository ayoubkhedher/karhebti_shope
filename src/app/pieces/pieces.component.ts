import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pieces',
   imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.css']
})
export class PiecesComponent {
  pieces = [
    {
      marque: 'Metalcaucho',
      reference: '00273',
      nom: 'Soufflet de cardan',
      prix: 7.23,
      image: 'assets/images/soufflet.jpg',
      enStock: true
    },
    {
      marque: 'Fare',
      reference: '0869',
      nom: 'Joint-soufflet, arbre de commande',
      prix: 5.52,
      image: 'assets/images/joint-soufflet.jpg',
      enStock: true
    },
    {
      marque: 'Autofren Seinsa',
      reference: 'D8167',
      nom: 'Jeu de joints-soufflets, arbre de commande',
      prix: 10.433,
      image: 'assets/images/joints-soufflets.jpg',
      enStock: true
    },
    {
      marque: 'Valeo',
      reference: '577938',
      nom: 'Balai d\'essuie-glace avant (Jeu de 2)',
      prix: 67.265,
      image: 'assets/images/essuie-glace.jpg',
      enStock: true
    },
    {
      marque: 'Adaptable',
      reference: '288B55277R',
      nom: 'Balai d\'essuie-glace Aerotwin',
      prix: 44.675,
      image: 'assets/images/aerotwin.jpg',
      enStock: false
    }
  ];
}
