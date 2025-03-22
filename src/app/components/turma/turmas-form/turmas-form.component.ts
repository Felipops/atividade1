import { Component, inject } from '@angular/core';
import { Turma } from '../../../models/turma';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

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

  constructor() {
    let id = this.rotaAtivida.snapshot.params['id'];
    if (id) {
      //AQUI VC VAI CHAMAR O FINDBYID()
      let turma1 = new Turma();
      turma1.id = 1;
      turma1.nome = '1A';
      turma1.semestre= '1';
      turma1.ano=1;
      turma1.turno= 'noite';
      this.turma = turma1; //setar o objeto no carro do formuljario
    }
  }

  save() {
    if (this.turma.id > 0) {
      // UPDATE
      alert('estou fazendo um update....');
    } else {
      // SAVE
      alert('estou fazendo um save');
    }
  }

}

