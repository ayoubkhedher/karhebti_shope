import { Component } from '@angular/core';
import { RouterModule,Router} from '@angular/router';
import { CommonModule , NgForOf} from '@angular/common';

@Component({
  selector: 'app-car-parts',
  imports: [RouterModule, NgForOf,CommonModule],
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent {
  parts = [
    { name: 'Pièces moteur', image: 'assets/Capture_d_écran_2025-03-02_222914-removebg-preview.png' },
    { name: 'Direction / Suspension / Train', image: 'assets/direction-removebg-preview.png' },
    { name: 'Filtres et huile', image: 'assets/filtre-removebg-preview.png' },
    { name: 'Optiques / Phares / Ampoules', image: 'assets/Capture_d_écran_2025-03-02_222950-removebg-preview.png' },
    { name: 'Démarrage électrique', image: ' assets/Capture_d_écran_2025-03-02_223511-removebg-preview (1).png' },
    { name: 'Freinage', image: 'assets/frin-removebg-preview.png' },
    { name: 'Essuie-glaces et pièces', image: 'assets/téléchargé (1).jpg' },
    { name: 'Embrayage et Boîte de vitesse', image: 'assets/Capture_d_écran_2025-03-02_223317-removebg-preview.png' },
    { name: 'Distribution et Accessoires', image: 'assets/téléchargé (2).jpg' },
    { name: 'Échappement', image: 'assets/centre-auto-guichen-dap35-echappement-voiture-001.jpg' },
    { name: 'Pièces Habitacle', image: 'assets/images.jpg' },
    { name: 'Capteurs et Sondes', image: 'assets/Capture_d_écran_2025-03-02_223435-removebg-preview.png' },
    { name: 'Carrosserie / Vitres / Peinture', image: 'assets/Capture_d_écran_2025-03-02_223129-removebg-preview.png' },
    { name: 'Joints et Étanchéité', image: 'assets/IMG-Seal_Solutions.webp' },
    { name: 'Pneus et Équipements Roue', image: 'assets/téléchargé (3).jpg' },
    { name: 'Outillage', image: 'assets/images (1).jpg' },
    { name: 'Chauffage et Climatisation', image: 'assets/Capture_d_écran_2025-03-02_223154-removebg-preview.png' },
    { name: 'Accessoires et Équipements', image: 'assets/téléchargé.jpg' },
    { name: 'Attelage et Portage', image: 'assets/thumb_16554_category_large.webp' },
    { name: 'Entretien et Nettoyage', image: 'assets/Capture_d_écran_2025-03-02_223347-removebg-preview.png' }
  ];
    constructor(private router: Router) { }
  
    navigateToCategory(categoryName: string = '') {
      this.router.navigate(['/category', categoryName]); // Utilisation correcte
    }
  }