import { Component, inject } from '@angular/core';
import { Turma } from '../../../models/turma';
import { FormsModule } from '@angular/forms';
import { TurmaService } from '../../../services/turma.service';

@Component({
  selector: 'app-turmas-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './turmas-list.component.html',
  styleUrl: './turmas-list.component.scss'
})
export class TurmasListComponent {
lista: Turma[] = [];

  turmaService = inject(TurmaService);
  
    constructor() {
      this.findAll();
    }
  
  
    findAll(){
      
      this.turmaService.findAll().subscribe({
        next: lista => {
          this.lista = lista;
        },
        error: (erro) => {
          alert(erro.error)
        }
      });
    }
  
    delete(turma:Turma){
      if(confirm('Deseja deletar isso aí?')){
  
        this.turmaService.delete(turma.id).subscribe({
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
  
  }
