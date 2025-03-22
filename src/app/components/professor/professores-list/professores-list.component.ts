import { Component } from '@angular/core';
import { Professor } from '../../../models/professor';

@Component({
  selector: 'app-professores-list',
  standalone: true,
  imports: [],
  templateUrl: './professores-list.component.html',
  styleUrl: './professores-list.component.scss'
})
export class ProfessoresListComponent {
  lista: Professor[] = [];
  
    constructor() {
      this.findAll();
    }
  
  
    findAll(){
      //DEPOIS EU VOU TER A COMUNICAÇÃO COM O SERVICE 
  
      let professor1 = new Professor();
      professor1.id = 1;
      professor1.nome = 'ronaldo da arte';
      professor1.cpf = '111.111.111-11';
      professor1.email='email@hotmail.com';
      professor1.especialidade= 'ADS';

  
      let professor2 = new Professor();
      professor2.id = 2;
      professor2.nome = 'Joao da biologia';
      professor2.cpf = '111.111.111-11';
      professor2.email='email@hotmail.com';
      professor2.especialidade= 'ADS';
  
      let professor3 = new Professor();
      professor3.id = 3;
      professor3.nome = 'Pedro da fisica';
      professor3.cpf = '111.111.111-11';
      professor3.email='email@hotmail.com';
      professor3.especialidade= 'ADS';
  
      this.lista.push(professor1, professor2, professor3);
    
    }
  
    delete(professor:Professor){
      let indice = this.lista.findIndex(x => {return x.id == professor.id});
      if(confirm('Deseja deletar isso aí?')){
        this.lista.splice(indice, 1); //deletando um objeto na posição INDICE
      }
    }
}
