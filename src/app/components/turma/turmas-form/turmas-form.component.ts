import { Component, inject } from '@angular/core';
import { Turma } from '../../../models/turma';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { TurmaService } from '../../../services/turma.service';

@Component({
  selector: 'app-turmas-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './turmas-form.component.html',
  styleUrl: './turmas-form.component.scss'
})
export class TurmasFormComponent {
 turma: Turma = new Turma();

     rotaAtivida = inject(ActivatedRoute);
     roteador = inject(Router);
     turmaService = inject(TurmaService);
   
     constructor(){
       let id = this.rotaAtivida.snapshot.params['id'];
       if(id){
         this.findById(id);
       }
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
         
           },
           error: (erro) => {
             alert(erro.error)
           }
         });
   
   
       }
     }
   
   }
   
 