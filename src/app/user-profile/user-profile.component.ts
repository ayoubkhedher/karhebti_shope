import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: User = {
    username: 'ayoub314',
    adresse: 'hamem chat',
    ville: 'Tunis',
    matricule: 'TN-123-456',
    tel: '94336221',
    autreTel: '24515397',
    vin: '1HGCM82633A004352',
    photo: ''
  };


  onSubmit(): void {
    console.log('Profil mis à jour:', this.user);
    // ici tu peux appeler ton service pour envoyer les données au backend
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.user.photo = file.name;
      console.log('Photo de profil sélectionnée:', this.user.photo);
    }
  }
}

interface User {
  username: string;
  adresse: string;
  ville: string;
  matricule: string;
  tel: string;
  autreTel: string;
  vin: string;
  photo: string;
}