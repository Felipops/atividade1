import { Component,inject } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { AlunosFormComponent } from '../alunos-form/alunos-form.component';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../../../services/aluno.service';

@Component({
  selector: 'app-alunos-list',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './alunos-list.component.html',
  styleUrl: './alunos-list.component.scss'
})
export class AlunosListComponent {

  lista: Aluno[] = [];
  pesquisa: string = "";  

  alunoService = inject(AlunoService);

  constructor() {
    this.findAll();
  }


  findAll(){
    
    this.alunoService.findAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: (erro) => {
        alert(erro.error)
      }
    });
  }

  delete(aluno: Aluno){
    if(confirm('Deseja deletar isso aí?')){

      this.alunoService.delete(aluno.id).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.findAll();
        },
        error: (erro) => {
          alert(erro.error)
        }
      });

    }
  }

  
  findByNome(){

    this.alunoService.findByNome(this.pesquisa).subscribe({
      next: (lista) => {
        this.lista = lista;
      },
      error: (erro) => {
        alert(erro.error);
      }
    })

  }

  


}


