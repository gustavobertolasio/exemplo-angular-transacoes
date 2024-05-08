import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarModule } from './shared/navbar/navbar.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'transacoes-angular';
}
