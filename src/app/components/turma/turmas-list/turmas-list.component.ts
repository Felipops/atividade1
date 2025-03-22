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
    turma1.nome = '1A';
    turma1.semestre= '1';
    turma1.ano= 1;
    turma1.turno= 'noite';

    let turma2 = new Turma();
    turma2.id = 2;
    turma2.nome = '2A';
    turma2.semestre= '2';
    turma2.ano= 1;
    turma2.turno= 'noite';

    let turma3 = new Turma();
    turma3.id = 3;
    turma3.nome = '3A';
    turma3.semestre= '3';
    turma3.ano= 2;
    turma3.turno= 'noite';

    this.lista.push(turma1, turma2, turma3);
  
  }

  delete(turma:Turma){
    let indice = this.lista.findIndex(x => {return x.id == turma.id});
    if(confirm('Deseja deletar isso aí?')){
      this.lista.splice(indice, 1); //deletando um objeto na posição INDICE
    }
  }
}
