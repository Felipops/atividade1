import { Component } from '@angular/core';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-alunos-list',
  standalone: true,
  imports: [],
  templateUrl: './alunos-list.component.html',
  styleUrl: './alunos-list.component.scss'
})
export class AlunosListComponent {

  lista: Aluno[] = [];

  constructor() {
    this.findAll();
  }


  findAll(){
    //DEPOIS EU VOU TER A COMUNICAÇÃO COM O SERVICE 

    let aluno1 = new Aluno();
    aluno1.id = 1;
    aluno1.nome = 'Joao';
    aluno1.cpf= '111.111.111-11';
    aluno1.telefone= '(45)99999-9999';
    aluno1.cadastroCompleto= true;

    let aluno2 = new Aluno();
    aluno2.id = 2;
    aluno2.nome = 'Lucas';
    aluno2.cpf= '111.111.111-11';
    aluno2.telefone= '(45)99999-9999';
    aluno2.cadastroCompleto= true;

    let aluno3 = new Aluno();
    aluno3.id = 3;
    aluno3.nome = 'Pedro';
    aluno3.cpf= '111.111.111-11';
    aluno3.telefone= '(45)99999-9999';
    aluno3.cadastroCompleto= true;

    this.lista.push(aluno1, aluno2, aluno3);
  
  }

  delete(aluno:Aluno){
    let indice = this.lista.findIndex(x => {return x.id == aluno.id});
    if(confirm('Deseja deletar isso aí?')){
      this.lista.splice(indice, 1); //deletando um objeto na posição INDICE
    }
  }


}


