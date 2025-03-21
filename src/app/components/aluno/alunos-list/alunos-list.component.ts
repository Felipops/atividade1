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

    let carro1 = new Aluno();
    carro1.id = 1;
    carro1.nome = 'HRV';

    let carro2 = new Aluno();
    carro2.id = 2;
    carro2.nome = 'HRV';

    let carro3 = new Aluno();
    carro3.id = 3;
    carro3.nome = 'HRV';

    this.lista.push(carro1, carro2, carro3);
  
  }

  delete(aluno:Aluno){
    let indice = this.lista.findIndex(x => {return x.id == aluno.id});
    if(confirm('Deseja deletar isso aí?')){
      this.lista.splice(indice, 1); //deletando um objeto na posição INDICE
    }
  }


}


