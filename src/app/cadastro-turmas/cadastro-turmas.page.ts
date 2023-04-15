import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-turmas',
  templateUrl: './cadastro-turmas.page.html',
  styleUrls: ['./cadastro-turmas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroTurmasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
