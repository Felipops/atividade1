import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Turma } from '../../../models/turma';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { TurmaService } from '../../../services/turma.service';
import { CursosListComponent } from '../../curso/cursos-list/cursos-list.component';
import { ProfessoresListComponent } from '../../professor/professores-list/professores-list.component';
import { Curso } from '../../../models/curso';
import { CursoService } from '../../../services/curso.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Professor } from '../../../models/professor';

@Component({
  selector: 'app-turmas-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule, CursosListComponent, ProfessoresListComponent],
  templateUrl: './turmas-form.component.html',
  styleUrl: './turmas-form.component.scss'
})
export class TurmasFormComponent {

  @Input("turma") turma: Turma = new Turma();
  @Output("meuEvento") meuEvento = new EventEmitter(); //ELE VAI PEGAR QUALQUER COISA E EMITIR

  listaCursos!: Curso[];

     rotaAtivida = inject(ActivatedRoute);
     roteador = inject(Router);
     turmaService = inject(TurmaService);
     cursoService = inject(CursoService);

     @ViewChild("modalCursosList") modalCursosList!: TemplateRef<any>; //referência ao template da modal
     @ViewChild("modalProfessoresList") modalProfessoresList!: TemplateRef<any>; //referência ao template da modal
     modalService = inject(MdbModalService); //para abrir a modal
     modalRef!: MdbModalRef<any>; //vc conseguir fechar a modal depois
   
     constructor(){
       let id = this.rotaAtivida.snapshot.params['id'];
       if(id){
         this.findById(id);
       }
       this.findAllCursos();
     }
   
     findById(id: number){
   
       this.turmaService.findById(id).subscribe({
         next: (turmaRetornado) => {
           this.turma = turmaRetornado;
         },
         error: (erro) => {
           alert(erro.error)
         }
       });
   
     }
   
     save(){
       if(this.turma.id > 0){
         // UPDATE
         this.turmaService.update(this.turma, this.turma.id).subscribe({
           next: (mensagem) => {
             alert(mensagem);
             this.roteador.navigate(['principal/turmas']); 
             this.meuEvento.emit("OK");
             
           },
           error: (erro) => {
             alert(erro.error)
           }
         });
   
   
       }else{
         // SAVE
         this.turmaService.save(this.turma).subscribe({
           next: (mensagem) => {
             alert(mensagem);
             this.roteador.navigate(['principal/turmas']); 
             this.meuEvento.emit("OK");
         
           },
           error: (erro) => {
             alert(erro.error)
           }
         });
   
   
       }
     }
   
     findAllCursos(){

      this.cursoService.findAll().subscribe({
        next: (lista) => {
          this.listaCursos = lista;
        },
        error: (erro) => {
          alert(erro.error)
        }
      }); 
  
    }

    compareId(a: Turma, b: Turma) {
      return a && b ? a.id === b.id : a === b;
    }

    meuEventoTratamento(curso: Curso){
      this.turma.curso = curso;
      this.modalRef.close();
    }
  
    meuEventoTratamentoProfessor(professor: Professor){
      if(this.turma.professores == null)
        this.turma.professores = [];
  
      this.turma.professores.push(professor);
      this.modalRef.close();
    }
  
    buscarCurso(){
      this.modalRef = this.modalService.open(this.modalCursosList, {modalClass: 'modal-xl'});
    }
  
    buscarProfessores(){
      this.modalRef = this.modalService.open(this.modalProfessoresList, {modalClass: 'modal-xl'});
    }
  
    deletarProfessor(professor: Professor){
      let indice = this.turma.professores.findIndex(x => {return x.id == professor.id});
      this.turma.professores.splice(indice,1);
    }

   }
   
 