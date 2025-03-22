import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Curso } from '../../../models/curso';
import { ActivatedRoute } from '@angular/router';

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

  constructor() {
    let id = this.rotaAtivida.snapshot.params['id'];
    if (id) {
      //AQUI VC VAI CHAMAR O FINDBYID()
      let curso1 = new Curso();
      curso1.id = 1;
      curso1.nome = 'ADS';
      this.curso =curso1; //setar o objeto no carro do formuljario
    }
  }

  save() {
    if (this.curso.id > 0) {
      // UPDATE
      alert('estou fazendo um update....');
    } else {
      // SAVE
      alert('estou fazendo um save');
    }
  }

}
