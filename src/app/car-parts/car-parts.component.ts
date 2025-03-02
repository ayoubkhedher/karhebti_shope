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
    { name: 'Pièces moteur', image: 'assets/images/engine.jpg' },
    { name: 'Direction / Suspension / Train', image: 'assets/images/suspension.jpg' },
    { name: 'Filtres et huile', image: 'assets/filtre-removebg-preview.png' },
    { name: 'Optiques / Phares / Ampoules', image: 'assets/images/lights.jpg' },
    { name: 'Démarrage électrique', image: 'assets/images/electric.jpg' },
    { name: 'Freinage', image: 'assets/images/brakes.jpg' },
    { name: 'Essuie-glaces et pièces', image: 'assets/images/wipers.jpg' },
    { name: 'Embrayage et Boîte de vitesse', image: 'assets/images/clutch.jpg' },
    { name: 'Distribution et Accessoires', image: 'assets/images/distribution.jpg' },
    { name: 'Échappement', image: 'assets/images/exhaust.jpg' },
    { name: 'Pièces Habitacle', image: 'assets/images/interior.jpg' },
    { name: 'Capteurs et Sondes', image: 'assets/images/sensors.jpg' },
    { name: 'Carrosserie / Vitres / Peinture', image: 'assets/images/bodywork.jpg' },
    { name: 'Joints et Étanchéité', image: 'assets/images/seals.jpg' },
    { name: 'Pneus et Équipements Roue', image: 'assets/images/tires.jpg' },
    { name: 'Outillage', image: 'assets/images/tools.jpg' },
    { name: 'Chauffage et Climatisation', image: 'assets/images/ac.jpg' },
    { name: 'Accessoires et Équipements', image: 'assets/images/accessories.jpg' },
    { name: 'Attelage et Portage', image: 'assets/images/trailer.jpg' },
    { name: 'Entretien et Nettoyage', image: 'assets/images/cleaning.jpg' }
  ];
    constructor(private router: Router) { }
  
    navigateToCategory(categoryName: string = '') {
      this.router.navigate(['/category', categoryName]); // Utilisation correcte
    }
  }