import { Component, inject } from '@angular/core';
import { Professor } from '../../../models/professor';
import { FormsModule } from '@angular/forms';
import { ProfessorService } from '../../../services/professor.service';

@Component({
  selector: 'app-professores-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './professores-list.component.html',
  styleUrl: './professores-list.component.scss'
})
export class ProfessoresListComponent {
  lista: Professor[] = [];
  
    professorService = inject(ProfessorService);
  
    constructor() {
      this.findAll();
    }
  
  
    findAll(){
      
      this.professorService.findAll().subscribe({
        next: lista => {
          this.lista = lista;
        },
        error: (erro) => {
          alert(erro.error)
        }
      });
    }
  
    delete(professor:Professor){
      if(confirm('Deseja deletar isso aí?')){
  
        this.professorService.delete(professor.id).subscribe({
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
