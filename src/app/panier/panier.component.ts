import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panier',
  imports: [CommonModule,FormsModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  cartItems = [
    { image: 'assets/product1.jpg', name: 'Produit 1', price: 30, quantity: 1 },
    { image: 'assets/product2.jpg', name: 'Produit 2', price: 50, quantity: 2 }
  ];

  totalBrut = 0;
  remise = 5; // Exemple : remise fixe
  totalNet = 0;

  constructor() {
    this.updateTotal();
  }

  updateTotal() {
    this.totalBrut = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    this.totalNet = this.totalBrut - this.remise;
  }
}
