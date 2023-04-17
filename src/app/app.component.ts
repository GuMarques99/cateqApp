import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'login' },
    { title: 'Registro', url: '/cadastro-usuario', icon: 'user' },
  ];
  public labels = ['TESTE', 'TESTE', 'TESTE', 'TESTE', 'TESTE', 'TESTE'];
  constructor() {}
}
