import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Part {
  name: string;
  description: string;
  serialNumber: string;
  image: string;
  inStock: boolean;
}

@Component({
  selector: 'app-category-parts',
  templateUrl: './category-parts.component.html',
  styleUrls: ['./category-parts.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CategoryPartsComponent implements OnInit {
  categoryName: string = '';
  parts: Part[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoryName = this.route.snapshot.paramMap.get('name') || '';

    // Exemple de pièces par catégorie
    const allParts: Record<string, { name: string; description: string; serialNumber: string; image: string; inStock: boolean; }[]> = {
      "Pièces moteur": [],
      "Freinage": [    {
        name: 'Plaquettes de frein',
        description: 'Sécurité garantie',
        serialNumber: 'FRE-789',
        image: 'assets/images/brake-pads.jpg',
        inStock: true
      }
    ]
    }
    this.parts = allParts [this.categoryName] || [];
  }

  addToCart(part: Part) {
    console.log(`${part.name} ajouté au panier.`);
  }
}

