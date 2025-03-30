import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Curso } from '../../../models/curso';
import { FormsModule } from '@angular/forms';
import { CursoService } from '../../../services/curso.service';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-cursos-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cursos-list.component.html',
  styleUrl: './cursos-list.component.scss'
})
export class CursosListComponent {
lista: Curso[] = [];
  
@Input("modoModal") modoModal: boolean = false;
@Output("meuEvento") meuEvento = new EventEmitter();

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
  
    selecionar(curso: Curso){
      this.meuEvento.emit(curso); //esse disparo vai acionar o método do FORM
    }

  }

