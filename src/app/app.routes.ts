import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { AlunosListComponent } from './components/aluno/alunos-list/alunos-list.component';
import { AlunosFormComponent } from './components/aluno/alunos-form/alunos-form.component';
import { ProfessoresListComponent } from './components/professor/professores-list/professores-list.component';
import { ProfessoresFormComponent } from './components/professor/professores-form/professores-form.component';
import { CursosListComponent } from './components/curso/cursos-list/cursos-list.component';
import { CursosFormComponent } from './components/curso/cursos-form/cursos-form.component';
import { TurmasListComponent } from './components/turma/turmas-list/turmas-list.component';
import { TurmasFormComponent } from './components/turma/turmas-form/turmas-form.component';


export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "principal", component: PrincipalComponent, children:[
        {path: "alunos", component: AlunosListComponent},
        {path: "alunos/new", component: AlunosFormComponent},
        {path: "alunos/edit/:id", component: AlunosFormComponent},
        {path: "professores", component: ProfessoresListComponent},
        {path: "professores/new", component: ProfessoresFormComponent},
        {path: "professores/edit/:id", component: ProfessoresFormComponent},
        {path: "cursos", component: CursosListComponent},
        {path: "cursos/new", component: CursosFormComponent},
        {path: "cursos/edit/:id", component: CursosFormComponent},
        {path: "turmas", component: TurmasListComponent},
        {path: "turmas/new", component: TurmasFormComponent},
        {path: "turmas/edit/:id", component: TurmasFormComponent}
    ]}
];