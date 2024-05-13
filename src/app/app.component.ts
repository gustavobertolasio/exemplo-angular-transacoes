import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarModule } from './shared/navbar/navbar.module';
import { StringMap } from './shared/maps/string-map';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.route = event.url.split('/')[1];
      }
    });
  }
  route = '';
  routeNames: StringMap = {
    transferir: 'Realizar transferência',
    'transferencias-agendadas': 'Transferências agendadas',
  };
}
