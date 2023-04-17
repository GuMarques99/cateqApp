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
  public listaTurmas: Turma[] = /*[];
  public turmasFixas: Turma[] =*/ [
  {
    id: '1',
    apelido: 'Turma 1',
    descricao: 'Descrição da Turma 1',
    dataInicio: new Date('2023-04-01'),
    dataConclusao: new Date('2023-05-01'),
    dataPrevEncerramento: new Date('2023-06-01'),
    dataCadastro: new Date(),
    responsavel: 'Responsável 1',
    status: statusTurma.pendente
  },
  {
    id: '2',
    apelido: 'Turma 2',
    descricao: 'Descrição da Turma 2',
    dataInicio: new Date('2023-04-02'),
    dataConclusao: new Date('2023-05-02'),
    dataPrevEncerramento: new Date('2023-06-02'),
    dataCadastro: new Date(),
    responsavel: 'Responsável 2',
    status: statusTurma.emAndamento
  },
  {
    id: '3',
    apelido: 'Turma 3',
    descricao: 'Descrição da Turma 3',
    dataInicio: new Date('2023-04-03'),
    dataConclusao: new Date('2023-05-03'),
    dataPrevEncerramento: new Date('2023-06-03'),
    dataCadastro: new Date(),
    responsavel: 'Responsável 3',
    status: statusTurma.finalizada
  },
  // Adicione os outros elementos da mesma forma
];

  constructor(/*private turmasServ: TurmasService*/) { }

  ngOnInit() {
    this.listarTurmas();
  }

  public listarTurmas() {
    //.turmasServ.carregar().then((turmas) => {
    //  this.listaTurmas = turmas
    //}).then(() => {
      //this.listaTurmas.concat(this.turmasFixas);
    //});
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
