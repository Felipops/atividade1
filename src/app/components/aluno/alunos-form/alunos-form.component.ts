import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Aluno } from '../../../models/aluno';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alunos-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './alunos-form.component.html',
  styleUrl: './alunos-form.component.scss'
})
export class AlunosFormComponent {


  aluno: Aluno = new Aluno();

  rotaAtivida = inject(ActivatedRoute);

  constructor() {
    let id = this.rotaAtivida.snapshot.params['id'];
    if (id) {
      //AQUI VC VAI CHAMAR O FINDBYID()
      let aluno1 = new Aluno();
      aluno1.id = 1;
      aluno1.nome = 'Joao';
      aluno1.cpf= '111.111.111-11';
      aluno1.telefone='(45)99999-9999';
      aluno1.cadastroCompleto= true;
      this.aluno = aluno1; //setar o objeto no carro do formuljario
    }
  }

  save() {
    if (this.aluno.id > 0) {
      // UPDATE
      alert('estou fazendo um update....');
    } else {
      // SAVE
      alert('estou fazendo um save');
    }
  }

}
