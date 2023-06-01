import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../models/aluno.model';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.page.html',
  styleUrls: ['./cadastro-aluno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CadastroAlunoPage implements OnInit {
  public aluno:  Aluno = {id : "", nome:"", sobrenome:"",email:"",telefone:"",sexo:""};

  constructor(private rota: Router,private alunoServ: AlunoService) { }


  ngOnInit() {
  }
  public registrar() {
    console.log(this.aluno);
    this.alunoServ.adicionar(this.aluno);
    this.rota.navigate(['/turmas']);
    
  }

}
