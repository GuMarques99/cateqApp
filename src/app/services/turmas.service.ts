import { Injectable } from '@angular/core';
import { Firestore, 
  getFirestore, collection, doc, 
  getDocs, getDoc, addDoc, setDoc, deleteDoc, Timestamp
} from 'firebase/firestore';
import { FirebaseService } from './firebase.service';


import { Turma, statusTurma } from '../models/turma.model';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  public turmas: Turma[] = [
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
  
  private firestoreDB: Firestore;

  constructor(private fireServ: FirebaseService) {
    this.firestoreDB = getFirestore(this.fireServ.getApp());
  }

  public async getAll(): Promise<Turma[]> {
    const turmasCol = collection(
      this.firestoreDB, 'turmas');

    const turmasSnapshot = await getDocs(turmasCol);
    const turmasList: Turma[] = turmasSnapshot.docs
                          .map(
                              (doc)=>{
                                const docData = {...doc.data()};
                                console.log(docData);
                                return {
                                  id: doc.id,
                                  apelido: docData['apelido'],
                                  descricao: docData['descricao'],
                                  dataInicio: docData['dataInicio'].toDate(),
                                  dataConclusao: docData['dataConclusao'] ? docData['dataConclusao'].toDate() : null,
                                  dataPrevEncerramento: docData['dataPrevEncerramento'].toDate(),
                                  dataCadastro: docData['dataCadastro'].toDate(),
                                  responsavel: docData['responsavel'],
                                  status: docData['status']
                                }
                              }
                          );

    return turmasList;
  }

  public async adicionar(turma: Turma) {
    // @ts-ignore
    delete turma.id;
    delete turma.dataConclusao;
    const dataInicioTimestamp = Timestamp.fromMillis(turma.dataInicio!.getTime() / 1000);
    const docRef = await addDoc(collection(this.firestoreDB,'turmas'), 
                      {
                        ...turma,
                        dataInicio: dataInicioTimestamp
                      }
                    );

    return docRef;    
  }

  public async deletar(id: string){
    this.turmas = this.turmas.filter((t) => t.id != id);
  }

  public async editar(turma: Turma){
    let index = this.turmas.findIndex((t) => t.id == turma.id);
    if(index >= 0)
      this.turmas[index] = turma;
  }

  public async obter(id: string){
    this.turmas.find((t) => t.id = id);
  }

  public async carregar(): Promise<Turma[]> {
    return this.turmas;
  }
}
