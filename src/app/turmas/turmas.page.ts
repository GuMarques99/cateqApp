import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { Turma, statusTurma } from '../models/turma.model';
import { TurmasService } from '../services/turmas.service';

@Component({
  selector: 'turmas',
  templateUrl: './turmas.page.html',
  styleUrls: ['./turmas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TurmasPage implements OnInit {
  public listaTurmas: Turma[] = [];

  constructor(private turmasServ: TurmasService) { }

  ngOnInit() {
    this.listarTurmas();
  }

  public listarTurmas() {
    this.turmasServ.carregar().then((turmas) => {
      this.listaTurmas = turmas
    }) 
  }

  public adicionar() {
    
  }

  public statusBadgeColor(status: statusTurma): string {
    switch(status){
      case statusTurma.pendente:
        return "secondary";
      case statusTurma.emAndamento:
        return "success";
      case statusTurma.finalizada:
        return "warning";
      case statusTurma.cancelada:
        return "danger";
    }
  }

}
