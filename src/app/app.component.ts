import { Component } from '@angular/core';
import { RouterOutlet,RouterModule, } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header.component'; 
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FormsModule } from '@angular/forms';
import { CarPartsComponent } from './car-parts/car-parts.component';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import { CommandeComponent } from './commande/commande.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminComponent } from './admin/admin/admin.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ,RouterModule, HeaderComponent,SearchFilterComponent,FormsModule,CarPartsComponent, BackgroundComponent,HomeComponent,CommandeComponent,UserProfileComponent,AdminComponent,], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("Page changée :", event.url);
      }
    });
  }
}
