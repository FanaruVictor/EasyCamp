import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatSidenavModule, NgFor, MatButtonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'EasyCamp.UI';

  constructor(private router: Router) {

  }
  public pages = [
    {
      name: 'Feedback',
      route: '/feedback'
    },
    {
      name: 'Administrative',
      route: '/administrative',
    },
    {
      name: 'Program',
      route: '/program'
    },
    {
      name: "Visual",
      route: '/visual'
    },
    {
      name: "User Management",
      route: "users"
    }
  ];

  public isMenuOpen: boolean = false;

  public closeSideNav = () => this.isMenuOpen = false;
}
