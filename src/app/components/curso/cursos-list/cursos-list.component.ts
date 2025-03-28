import { Component, inject } from '@angular/core';
import { Curso } from '../../../models/curso';
import { FormsModule } from '@angular/forms';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-cursos-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cursos-list.component.html',
  styleUrl: './cursos-list.component.scss'
})
export class CursosListComponent {
lista: Curso[] = [];
  
    cursoService = inject(CursoService);
  
    constructor() {
      this.findAll();
    }
  
  
    findAll(){
      
      this.cursoService.findAll().subscribe({
        next: lista => {
          this.lista = lista;
        },
        error: (erro) => {
          alert(erro.error)
        }
      });
    }
  
    delete(curso:Curso){
      if(confirm('Deseja deletar isso aí?')){
  
        this.cursoService.delete(curso.id).subscribe({
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

