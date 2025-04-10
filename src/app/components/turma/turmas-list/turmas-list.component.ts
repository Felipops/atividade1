import { Component, inject,TemplateRef, ViewChild} from '@angular/core';
import { Turma } from '../../../models/turma';
import { FormsModule } from '@angular/forms';
import { TurmaService } from '../../../services/turma.service';
import { TurmasFormComponent } from '../turmas-form/turmas-form.component';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-turmas-list',
  standalone: true,
  imports: [FormsModule,TurmasFormComponent,MdbModalModule
  ],
  templateUrl: './turmas-list.component.html',
  styleUrl: './turmas-list.component.scss'
})
export class TurmasListComponent {
lista: Turma[] = [];
turmaEdit!: Turma;

  turmaService = inject(TurmaService);

  @ViewChild("modalTurmaForm") modalTurmaForm!: TemplateRef<any>; //referência ao template da modal
  modalService = inject(MdbModalService); //para abrir a modal
  modalRef!: MdbModalRef<any>; //vc conseguir fechar a modal depois
  
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
  
    new(){ //ABRIRRRRRRRRRRRRRRRRRR
      this.turmaEdit = new Turma(); //limpando o carroEdit para um novo cadastro
      this.modalRef = this.modalService.open(this.modalTurmaForm, { modalClass: 'modal-xl'});
    }
  
    edit(turma: Turma){
      this.turmaEdit = turma; //carregando o carroEdit com o carro clicado na tabela
      this.modalRef = this.modalService.open(this.modalTurmaForm, { modalClass: 'modal-xl'});
    }
  
    meuEventoTratamento(mensagem:any){
      this.findAll();
      this.modalRef.close();
    }
  
  }
  
