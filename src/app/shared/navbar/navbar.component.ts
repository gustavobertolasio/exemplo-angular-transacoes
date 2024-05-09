import { Component, OnInit } from '@angular/core';
import { BarOptions } from './models/bar-options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  barOptions: BarOptions[] = [
    {
      label: 'Transferir',
      arialabel: 'Transferir fundos',
      onClick: () => {
        this.router.navigateByUrl('/transferir');
      },
    },
    {
      label: 'Agendamentos',
      arialabel: 'Transferencias agendadas',
      onClick: () => {
        this.router.navigateByUrl('/transferencias-agendadas');
      },
    },
  ];
}
