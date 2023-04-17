import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Turma } from '../models/turma.model';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  
  constructor(private storage: Storage) { 
    this.storage.create(); 
  }

  public async adicionar(novaTurma: Turma){
    let id = (Date.now).toString();
    novaTurma.id = id;
    await this.storage['set'](id, novaTurma);
  }

  public async deletar(id: string){
    await this.storage.remove(id);
  }

  public async editar(turma: Turma){
    await this.storage.set(turma.id, turma);
  }

  public async obter(id: string){
    return await this.storage.get(id);
  }

  public async carregar(): Promise<Turma[]> {
    let lista: Array<Turma> = [];
    await this.storage.forEach((turma)=>{
      lista.push({...turma})
    });
    
    return lista;
  }
}
