import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Curso } from '../../../models/curso';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-cursos-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.scss'
})
export class CursosFormComponent {

  curso: Curso = new Curso(); 

  rotaAtivida = inject(ActivatedRoute);
    roteador = inject(Router);
    cursoService = inject(CursoService);
  
    constructor(){
      let id = this.rotaAtivida.snapshot.params['id'];
      if(id){
        this.findById(id);
      }
    }
  
    findById(id: number){
  
      this.cursoService.findById(id).subscribe({
        next: (cursoRetornado) => {
          this.curso = cursoRetornado;
        },
        error: (erro) => {
          alert(erro.error)
        }
      });
  
    }
  
    save(){
      if(this.curso.id > 0){
        // UPDATE
        this.cursoService.update(this.curso, this.curso.id).subscribe({
          next: (mensagem) => {
            alert(mensagem);
            this.roteador.navigate(['principal/cursos']); 
            
          },
          error: (erro) => {
            alert(erro.error)
          }
        });
  
  
      }else{
        // SAVE
        this.cursoService.save(this.curso).subscribe({
          next: (mensagem) => {
            alert(mensagem);
            this.roteador.navigate(['principal/cursos']); 
        
          },
          error: (erro) => {
            alert(erro.error)
          }
        });
  
  
      }
    }
  
  }
  
