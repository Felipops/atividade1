import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Professor } from '../../../models/professor';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-professores-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './professores-form.component.html',
  styleUrl: './professores-form.component.scss'
})
export class ProfessoresFormComponent {
  professor: Professor = new Professor();

  rotaAtivida = inject(ActivatedRoute);

  constructor() {
    let id = this.rotaAtivida.snapshot.params['id'];
    if (id) {
      //AQUI VC VAI CHAMAR O FINDBYID()
      let professor1 = new Professor();
      professor1.id = 1;
      professor1.nome = 'ronaldo da arte';
      professor1.cpf = '111.111.111-11';
      professor1.email = 'joaodaarte@teteu.com';
      professor1.especialidade = 'ADS';
      this.professor = professor1; //setar o objeto no carro do formuljario
    }
  }

  save() {
    if (this.professor.id > 0) {
      // UPDATE
      alert('estou fazendo um update....');
    } else {
      // SAVE
      alert('estou fazendo um save');
    }
  }

}
