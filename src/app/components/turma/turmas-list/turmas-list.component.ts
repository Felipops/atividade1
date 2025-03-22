import { Component } from '@angular/core';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-turmas-list',
  standalone: true,
  imports: [],
  templateUrl: './turmas-list.component.html',
  styleUrl: './turmas-list.component.scss'
})
export class TurmasListComponent {

  lista: Turma[] = [];

  constructor() {
    this.findAll();
  }


  findAll(){
    //DEPOIS EU VOU TER A COMUNICAÇÃO COM O SERVICE 

    let turma1 = new Turma();
    turma1.id = 1;
    turma1.nome = 'HRV';

    let turma2 = new Turma();
    turma2.id = 2;
    turma2.nome = 'HRV';

    let turma3 = new Turma();
    turma3.id = 3;
    turma3.nome = 'HRV';

    this.lista.push(turma1, turma2, turma3);
  
  }

  delete(turma:Turma){
    let indice = this.lista.findIndex(x => {return x.id == turma.id});
    if(confirm('Deseja deletar isso aí?')){
      this.lista.splice(indice, 1); //deletando um objeto na posição INDICE
    }
  }
}
