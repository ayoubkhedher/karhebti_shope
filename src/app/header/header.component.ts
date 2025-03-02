import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true, // Assurez-vous que c'est bien un standalone component
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {}
