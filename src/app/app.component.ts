import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppbarModule } from './shared/appbar/appbar.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'transacoes-angular';
}
